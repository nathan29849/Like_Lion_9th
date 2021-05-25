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
