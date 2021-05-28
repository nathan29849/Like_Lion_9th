# CRUD 중 Create

- **CRUD**

> C : Create
> **R : Read**
> U : Update
> D : Delete

---

오늘 배울 함수

- new: new.html을 보여줌
- create: new.html에서 받은 정보를 데이터베이스에 저장

## 💎 new 함수 만들기

### 1. views.py > new

- 단순히 블로그를 새로 만들 페이지이기 때문에 `new.html`만 띄워주면 된다.

```python
def new(request):
    return render(request, 'new.html')
```

### 2. templates > new.html

- (1) 블로그에 들어갈 항목들(필드들)을 입력받을 form 태그를 생성한다.
- (2) form 태그를 생성할 때는 `method="post"`로 설정하여 준다. (이유는 아래에서 나옴)
- (3) `{csrf_token}`을 기입한다. (아래에서 바로 다룸)
- (4) 필드들을 받을 input 태그를 작성한다.
  - 이때, name을 꼭 적는다
  - 이유는, 나중에 create 함수를 만들 때, 이 `new.html`에서 입력한 값을 받아올 때 쓰이기 때문이다.
- (5) form 태그의 action 속성은 아직은 비워둔다. (create 함수를 만들고나서 넣어줄 예정이다.)

```html
<body>
  <h1>Write Your Blog</h1>
  <form action="" method="post">
    {% csrf_token %}
    <p>제목 : <input type="text" name="title" /></p>
    <p>작성자 : <input type="text" name="writer" /></p>
    <p>본문 : <textarea name="body" id="" cols="30" rows="10"></textarea></p>
    <input type="submit" value="submit" />
  </form>
</body>
```

### 3. urls.py

- 이렇게 `templates`와 `views.py`를 만들었다면, `urls.py`까지 설정해주자.

```python
from django.contrib import admin
from django.urls import path
from blog.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name="home"),
    path('<str:id>', detail, name="detail"),
    path('new/', new, name="new"),
]
```

### 4. home.html

- `home.html`에 `new.html`로 갈 링크를 하나 만들어준다.

#### ✋ 여기서 잠깐 (get vs post) ✋

- GET

  - 데이터를 얻기 위한 요청
  - **데이터가 url에 보임** (주소창에 직접 보이는 이미지 첨부하기)

- POST
  - 데이터를 생성하기 위한 요청
  - **데이터 url 안보임**
  - csrf 공격 방지

#### ✋ 여기서 잠깐 (csrf_token) ✋

- CSRF 공격이란?

  - 사이트간 요청위조라고 불림(또는 크로스 사이트 요청위조 Cross-Site Request Forgery, CSRF or XSRF)
  - 웹사이트 취약점 공격의 하나로, 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위(수정, 삭제, 등록 등)를 특정 웹사이트에 요청하게 하는 공격을 말함.

- CSRF 사용법
  - form 태그 내에서 `method="post"`를 사용할 때, 아래 `{%csrf_token%}`이라는 것을 사용 해 주어야 한다.
  - `{%csrf_token%}`은 어떤 임의의 값을 의미하는데, 이게 보내지게 될 때 이걸 통해 서버는 csrf 공격이 아니라는 것을 인식하여, 공격에 대한 방지를 한다.

---

## 💎 create 함수 만들기

### 1. views.py > create

- (1) 우선, Blog 객체를 하나 생성한다.
- (2) `models.py`에서 생성했던 필드들에 해당하는 부분을 `request.POST[field]`로 받아온다.
  - 이때, pub_date 필드는 따로 `new.html`에서 정보를 기입할 수 있는 부분을 만들지 않았다.
  - 이유는, `django.utils` 모듈 내에 `timezone`이라는 함수를 사용하면 따로 받지않고도 정보를 얻을 수 있기 때문이다.
- (3) 마지막으로 `new_blog.save()`를 통해 가져온 값들을 저장할 수 있도록 하자.

  - To save changes to an object that's already in the database, use save() . This performs an UPDATE SQL statement behind the scenes. Django doesn't hit the database until you explicitly call save() .
  - save()를 통해 database에 저장이 완료된다는 뜻이다.

- (4) return 값에는 여태껏 써왔던 `render`가 들어가는 것이 아닌, `redirect`가 들어간다.
  - `from django.shortcuts import redirect`를 통해 사용가능하다.
  - **render** : 새로운 html을 만들었을 때 그 곳에 보내려고 할 때 쓰인다.
  - **redirect** : 블로그 객체를 생성, 저장 후 **원래 있던** 페이지로 돌아가려고 할 때 쓴다.

```python
from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from .models import Blog

def create(request):
    new_blog = Blog()   # object 생성
    new_blog.title = request.POST['title']          # 필드 값 할당
    new_blog.person = request.POST['writer']        # 필드 값 할당
    new_blog.body = request.POST['body']            # 필드 값 할당
    # pub_date는 장고에서 제공하는 모듈을 쓸 것임.
    new_blog.pub_date = timezone.now()
    new_blog.save()

    # 어떤 화면으로 이동할 것인지 return 정해주기
    # 새로운 html을 만들어서 거기에 보내려고 하는게 아니기 때문에 render는 안쓴다.
    # 블로그 객체를 생성, 저장 후 원래있던 페이지로 돌아가려고 함.
    # 그러기 위해서는 redirect를 쓴다.
    return redirect('detail', new_blog.id)
```

#### form 태그의 action 부분을 채우기위해서는 views에 관련 함수가 필요함

```python
from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from .models import Blog

def create(request):
    new_blog = Blog()   # object 생성
    new_blog.title = request.POST['title']          # 필드 값 할당
    new_blog.person = request.POST['writer']        # 필드 값 할당
    new_blog.body = request.POST['body']            # 필드 값 할당
    # pub_date는 장고에서 제공하는 모듈을 쓸 것임.
    new_blog.pub_date = timezone.now()
    new_blog.save()

    # 어떤 화면으로 이동할 것인지 return 정해주기
    # 새로운 html을 만들어서 거기에 보내려고 하는게 아니기 때문에 render는 안쓴다.
    # 블로그 객체를 생성, 저장 후 원래있던 페이지로 돌아가려고 함.
    # 그러기 위해서는 redirect를 쓴다.
    return redirect('detail', new_blog.id)
```

### urls.py에서 path 정해주기

```python
from django.contrib import admin
from django.urls import path
from blog.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name="home"),
    path('<str:id>', detail, name="detail"),
    path('new/', new, name="new"),
    path('create/', create, name="create"),
]
```

### form의 action 값 넣어주기

```html
<form action="{% url 'create' %}" method="post">
  ` {% csrf_token %}
  <p>제목 : <input type="text" name="title" /></p>
  <p>작성자 : <input type="text" name="writer" /></p>
  <p>본문 : <textarea name="body" id="" cols="30" rows="10"></textarea></p>
  <button type="submit"></button>
</form>
```

### 직접 데이터 넣어보기

#### ✋ 여기서 잠깐 ✋

터미널 창에서도 GET, POST 방식이 확인 가능하다!
이미지 첨부
