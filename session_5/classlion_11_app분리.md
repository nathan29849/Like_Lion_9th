여지껏 1개의 앱을 사용해 작업했었다.
이로 인해 `urls.py`에 수 많은 path가 쌓인 것을 확인할 수 있었다.

기능이 추가되고 app이 다양한 기능을 가질수록 path는 더욱 더 많이 쌓이게 되기 때문에 가독성도 좋지 않고 많이 무거워진다.

따라서 app 별로 url을 관리하는 것이 효과적이기 때문에, app 분리에 대해 알아보자.

### 현재 urls.py

```python
from django.contrib import admin
from django.urls import path
from blog.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name="home"),
    path('<int:id>', detail, name='detail'),
    path('new/', new, name='new'),
    path('create/', create, name='create'),
    path("update/<int:id>", update, name="update"),
    path('delete/<int:id>', delete, name="delete"),
]
```

---

### app 별로 url 분리

- 먼저 app 파일 안에 urls.py를 생성하고 밑에 있는 코드를 작성하자.
- app_name에는 앱 이름을 담는다. 요청 url과 각각의 앱에 속하는 path들을 매핑하기 위해서이다.

#### 앱/urls.py

```python
# app폴더 urls.py
# urls.py에서 blog앱에서 사용하는 url을 모두 가져옵니다.

from django.urls import path
from . import views #현재 폴더에 있는 views에 접근하기 때문

app_name = 'blog' # app_name에는 앱 이름을 넣어줍니다.

urlpatterns = [
    path('<int:id>', views.detail, name='detail'),
    path('new/', views.new, name='new'),
    path('create/', views.create, name='create'),
    path("update/<int:id>", views.update, name="update"),
    path('delete/<int:id>', views.delete, name="delete"),
]
```

- 그리고 프로젝트 폴더 안에 있는 `urls.py`를 아래처럼 수정하자.

#### 프로젝트/urls.py

```python
# 프로젝트폴더 urls.py
from django.contrib import admin
from django.urls import path, include # include 작업을 분리해서 앱의 urls.py로 넘겨준다
import blog.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', blog.views.home, name="home"),
    path('blog/', include('blog.urls')),
]
```

- 마지막으로 다음과 같이 템플릿을 수정한다. 이렇게 url을 수정하면 요청이 blog 앱 내에서 정의된 url을 타게 된다.

#### ✋🤚 여기서 잠깐

`path('blog/', include('blog.urls'))`란 무엇일까?

- 'http://127.0.0.1:8000/blog/ ← 여기 다음부터는 blog.urls.py에 정의된 경로들을 포함할거야!'라는 의미입니다.

- blog에는 detail, new, create, update, delete라는 경로들이 정의되어 있었죠?
  - `path('detail/int:id', views.detail, name='detail')` ← 이런 식으로 말이죠
- include를 통해서 http://127.0.0.1:8000/blog/detail, http://127.0.0.1:8000/blog/new, ... 와 같은 방식으로 사용할 수 있게 됩니다.

---

### 각 html의 url 바꿔주기!

#### home.html

```html
{% extends 'base.html' %} {% block content %}
<h1>Blog Project</h1>
<h4><a href="{% url 'blog:new' %}">New Post</a></h4>

{% for blog in blogs%}
<div>
  <h3>{{ blog.title }}</h3>
  {{ blog.id }} <br />
  {{ blog.writer }} <br />
  {{ blog.summary }}
  <a href="{% url 'blog:detail' blog.id %}">...more</a>
</div>
{% endfor %} {% endblock %}
```

#### detail.html

- home으로 가는 경로는 프로젝트 `urls.py`에 정의되어있기 때문에 붙이지 않는다.

```html
{% extends 'base.html' %} {% block content %}
<h1>{{ blog.title }}</h1>
<p>{{ blog.pub_date }}</p>
<p>{{ blog.body }}</p>
{% if blog.image %}
<img src="{{blog.image.url}}" alt="" />
{% endif %}
<a href="{% url 'blog:update' blog.id %}">수정하기</a>
<a href="{% url 'home' %}">돌아가기</a>
<a href="{% url 'blog:delete' blog.id%}">Delete Post</a>
{% endblock %}
```

---

### 마무리

- django는 url 요청이 들어오면 `urls.py`의 urlpatterns에 있는 내용과 비교해 view로 연결하여 준다.

  - 1.  url 요청이 들어오면 제일 먼저 project에 있는 `urls.py`에서 urlpatterns를 매칭한다.
  - 2.  'blog/'로 시작되는 요청이면 blog 앱 폴더 안에 있는 `urls.py`에서 매칭하여 view로 넘겨주게 된다.

- app 별로 url을 분리 시킴으로써 project 안의 urls.py가 좀 더 깔끔해지고, 각 path를 관리하기 쉬워진다!
