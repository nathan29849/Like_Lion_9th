# CRUD 중 Read

- **CRUD**

> C : Create
> **R : Read**
> U : Update
> D : Delete

- 무엇을 CRUD 하나?
  - DataBase의 정보를 쓰고, 읽고, 고치고, 삭제한다.

---

## View & URL 작성하기

- CRUD는 기술 구현쪽이므로 이론이 딱히 없다. 실습의 과정을 보며 익혀보자.

- R은 데이터를 웹페이지 상에서 읽을 수 있도록 한다.
- 따라서, 읽을 수 있는 HTMl이 필요하다.

### 1. HTML 만들기

- blog 앱 내에 templates/home.html 경로로 html 파일을 만든다.
- 그리고 `views.py`, `urls.py`를 연결한다.

#### views.py

- Blog 테이블의 모든 오브젝트를 가져와서 blogs에 저장한다.
- 그 후 blogs라는 변수에 바로 윗줄에서 선언해준 blogs를 `key:value`의 형태로 저장한다.

```python
from django.shortcuts import render
from .models import Blog  # import를 제대로 해와야 Blog를 view 함수 내에서 사용할 수 있다.

def home(request):
  blogs = Blog.objects.all()  # Blog 객체를 "모두" 가져온다. 즉 Blog 테이블의 모든 row를 가져온다.
  return render(request, "home.html", {"blogs": blogs})
```

- 다 작성을 했다면 `urls.py`로 이동한다.

#### urls.py

```python
from django.contrib import admin
from django.urls import path
from blog.views import *  # blog.views에서 선언한 모든 것을 가져온다.

urlpatterns = [
  path('admin/', admin.site.urls),
  path('', home, name="home"),
]
```

---

### 2. Template 작성하기 (home.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BLOG</title>
  </head>
  <body>
    <h1>Blog Project</h1>
    {{ blogs }}
  </body>
</html>
```

- 그리고 나서 서버를 실행하면 아래와 같은 화면이 보이게 된다.
  <img src="https://images.velog.io/images/nathan29849/post/1d530427-bbb0-4900-9dce-689389073983/image.png" width="70%">

#### QuerySet이 무엇일까?

- 쿼리셋은 **전달받은 모델의 객체 목록**을 뜻한다.
- 객체들이 쿼리셋의 형태로 저장되어 있는 것이라고 생각하면 된다.
- 여기서 보이는 Blog object (1) 같은 경우에는 `models.py`에서 `def __str__(self):~` 함수를 통해 다르게 표현할수도 있다.
  - (이전 자료의 `return self.title`을 통해 제목으로 나타냈던 것 처럼)

```html
<body>
  <h1>Blog Project</h1>
  <p>{{blogs}}</p>

  {% for blog in blogs %}
  <h3>{{blog.title}}</h3>
  {{blog.id}}
  <br />
  {{blog.person}}
  <br />
  {{blog.summary}}
  <br />
  <a href="{% url 'detail' blog.id %}">...more</a>
  {% endfor %}
</body>
```

- `home.html`의 body 부분을 다음과 같이 바꾸어 주면 객체 내의 해당 필드들이 출력된다!
  <img src="https://images.velog.io/images/nathan29849/post/51313af7-65f7-4c04-ad71-c9e0d5a18366/image.png" width="70%">

- 객체의 필드에 접근할 때는 `.`을 통해서 표현한다.

#### summary 필드 🧐? 함수 🧐?

- 바로 위의 html 코드를 보게되면 `{{blog.summary}}`라는 코드를 볼 수 있다.
- 우리는 `models.py`에서 summary라는 필드를 만들어 준 적이 없다.
- 사실 summary는 아래와 같은 코드로 구성된다.

```python
    def summary(self):
        return self.body[:100]
```

- 이 코드의 목적은 상당히 긴 본문들의 내용을 잘라서 보여주기 위함이다.
- 😊 이렇게 함수를 통하여서도 필드 자체를 수정하여 return한다면, html 페이지에서 원하는 대로 출력이 가능하다. 😊

---

### 3. Detail 페이지 만들기

- 각 객체들을 하나씩만 보여지게하는 페이지를 만들고자 detail이라는 이름으로 html을 만드려고 한다.
- 이 detail 페이지 구현에 앞서 **Path-converter**라는 개념을 알아보자

#### Path-converter

- 페이지 하나를 만들기 위해서, `urls.py`에 path를 만들어야 하고, 함수를 만들어야 하고, html 페이지를 만들어야 했다.
- 그런데 이 detail 페이지 같은 경우에는 DB 내 데이터 개수만큼 페이지가 하나씩 있어야 한다.
- 만약 DB 내 데이터가 어마무시하게 많다면, 모든 데이터의 path를 `urls.py`에 지정해줘야 한다. 😅

<img src="https://images.velog.io/images/nathan29849/post/316d5e49-1c1b-4cf2-b5ae-524c988a9267/image.png" width="70%">

- 이를 방지하기 위해 **Path-converter**가 필요한 것이다!
- 이 **Path-converter**를 통해 id 값만 적어주면 다르게 보여줄 수 있고, 이것을 `views.py`에 넘겨줄 수도 있게 된다!

> Path-converter를 사용하는 방법 (직접 예시를 통해 익혀보자)
> (1) views.py
> (2) urls.py
> (3) home.html

**(1) views.py**

- 우선 `detail.html` 파일을 blog/templates 내에 생성한 뒤 `views.py`에 함수를 만들어준다.

```python
def detail(request, blog_id):
  blog = Blog.object.get(id = blog_id)
```
