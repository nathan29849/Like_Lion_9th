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

### 2. templates > new.html

### 3. urls.py

### 4. home.html & new.html 보완

#### 여기서 잠깐 (get vs post)

- GET

  - 데이터를 얻기 위한 요청
  - **데이터가 url에 보임** (주소창에 직접 보이는 이미지 첨부하기)

- POST
  - 데이터를 생성하기 위한 요청
  - **데이터 url 안보임**
  - csrf 공격 방지

#### 여기서 잠깐 (csrf_token)

- CSRF 공격이란?

  - 사이트간 요청위조라고 불림(또는 크로스 사이트 요청위조 Cross-Site Request Forgery, CSRF or XSRF)
  - 웹사이트 취약점 공격의 하나로, 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위(수정, 삭제, 등록 등)를 특정 웹사이트에 요청하게 하는 공격을 말함.

- CSRF 사용법
  - form 태그 내에서 `method="post"`를 사용할 때, 아래 `{%csrf_token%}`이라는 것을 사용 해 주어야 한다.
  - `{%csrf_token%}`은 어떤 임의의 값을 의미하는데, 이게 보내지게 될 때 이걸 통해 서버는 csrf 공격이 아니라는 것을 인식하여, 공격에 대한 방지를 한다.

## 💎 create 함수 만들기

### 1. views.py > create

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

#### 여기서 잠깐

터미널 창에서도 GET, POST 방식이 확인 가능하다!
이미지 첨부
