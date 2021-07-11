이전 글에서는 서버에서 준비된 정적 파일을 내보내는 **static(개발자가 준비하는 파일)** 에 대해서 알아보았다.

이번 글에서는 사용자가 파일을 보내고 웹에 띄울 수 있는 **media(이용자들이 올리는 파일)** 을 배워보자.

<img src="https://images.velog.io/images/nathan29849/post/aaa51b14-8c2f-4a2c-92d1-9171d6c7e81e/image.png">

<img src="https://images.velog.io/images/nathan29849/post/7cb55bdf-79df-4f89-83bd-da3b95f36344/image.png">

---

## settings.py에 media 설정하기

- 이전 글에서 작성했던 STATIC_ROOT, STATIC_URL을 그대로 복사/붙여넣기 한다.

- 그리고 static을 전부 media로 바꿔준다.

```python
#settings.py

#맨 위에 os를 import 해주세요
import os

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/
# 어떤 식으로 static 파일을 관리하는지 공식 문서로 나와있다

STATIC_URL = '/static/'

STATICFILES_DIRS = [
	os.path.join(BASE_DIR, 'blog', 'static')
	# os.path.join(BASE_DIR, '앱이름', 'static')
]
# 현재 static 파일들이 어디에 있는지

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

# static django에서는 편의를 위해 흩어져있는 static파일을 한곳에 모으는데,
# 그때 파일을 모아줄 위치를 나타냅니다.

# Django 3.1 이상부터는
# MEDIA_ROOT = Path(BASE_DIR, 'media')


MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
# 이용자가 업로드한 파일을 모아두는 곳
MEDIA_URL = '/media/'
```

---

## urls.py에 media 설정하기

```python
# 기존 코드
from django.contrib import admin
from django.urls import path, include
import blog.views
# 아래 코드 추가!!
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [...] # 기존 코드

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # 코드 추가!
```

- 앞서 기본적인 웹 통신에 관하여 설명했을 때, 서버와 클라이언트는 기본적으로 **URL** 을 통하여 통신한다는 사실이 기억날 것이다.
- media와 static 역시 이를 기반으로 작동한다는 것을 인지하고 있으면 된다.

- 따라서 `urls.py`의 내용을 위와 같이 추가한다.
- `settings`와 `static` 관련 내용을 `import`하고 맨 마지막에 static 관련한 한 줄을 추가한다. 그냥 이렇게 해야 이미지를 읽어올 수 있다고 생각하면 된다. (자세한 작동원리는 공식 문서를 참고하자.)

- 주의할 점! : 여기서 `urls.py` 는 앱 내의 파일을 의미하는 것이 아니라 프로젝트 내의 `urls.py`를 의미한다! 명심하자!

---

## models.py 작성하기

- 그럼 이제 사용자가 올린 파일을 저장할 DB를 작성하자.

```python
# models.py

from django.db import models

# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=200)
    writer = models.CharField(max_length=10)
    pub_date = models.DateTimeField()
    body = models.TextField()
    image = models.ImageField(upload_to="blog/", blank=True, null=True)

    def __str__(self):
        return self.title

    def summary(self):
        return self.body[:100]
```

- `image`를 살펴보면 `upload_to='blog/'`라는 내용이 있는데 이 부분이 업로드 된 이미지들을 media 폴더 안의 blog 폴더 안에 넣으라는 의미이다.

  - (MEDIA_ROOT 부분과 이어지는 부분이라고 생각해주면 된다.)
  - 폴더는 자동으로 생성된다.

<img src="https://images.velog.io/images/nathan29849/post/9398a2fc-57b4-4bf4-8ee6-a5e86a6685d3/image.png">

- 다음과 같은 경고창이 뜨면서 Pillow가 설치 안됐다고 나오면, 먼저 설치하자

```
pip install Pillow
```

- Pillow란?

  - 파이썬 이미징 라이브러리로서 여러 이미지 파일 포맷을 지원하고, 이미지 내부 데이터를 엑세스할 수 있게 하며, 다양한 이미지 처리 기능을 제공.

  - DB에 이미지를 저장하기 위해서는 Pillow를 설치하여 내부적으로 이미지를 DB에 저장할 수 있는 데이터 형식으로 변환이 필요하기에 Pillow가 필요.

- 이미 blog 테이블에 row가 존재한다면?

  - 현재 저희가 Blog 테이블에 image라는 필드(컬럼)를 추가해줬습니다.

  - 하지만 이전에 저희가 이미 데이터(row)를 집어 넣었었죠 ?

  - 그러면 이미 넣었던 데이터(row)들은 image 컬럼에는 아무것도 들어있지 않아서 오류가 발생 할 수 있습니다

  - 따라서 이 설정을 해줍니다

    - `image = models.ImageField(upload_to="blog/", blank=True, null=True)`

  - 그리고 다른 방법으로는 migrations 초기화, db 삭제 하고 다시 마이그레이션을 해주시면 오류 없이 진행이 가능합니다

- 그 다음에 migration을 해주자.
  - `python manage.py makemigrations`
  - `python manage.py migrate`

---

## new.html을 통한 이미지 업로드

```html
# new.html {% extends 'base.html' %} {% block content %}
<h1>New Blog Entry</h1>
<form
  action="{% url 'blog:create'%}"
  method="post"
  enctype="multipart/form-data"
>
  {%csrf_token%}
  <p>제목: <input type="text" name="title" /></p>
  <p>작성자: <input type="text" name="writer" /></p>
  <p>사진: <input type="file" name="image" /></p>
  본문: <br /><textarea name="body" id="" cols="30" rows="10"></textarea><br />
  <button type="submit">작성하기</button>
</form>
{% endblock %}
```

- input 태그를 활용하여 포스트를 생성하는 request(create)를 보낼 때 이미지도 함께 보내준다. 태그들의 속성들은 구글링을 통해 알아보시는 것을 권장한다.
- 또한 form 태그에서 위의 코드처럼 `enctype` 속성을 지정하지 않는다면, views에서 request를 처리할 때 에러가 발생하니 꼭 작성하여주자!

- request를 보냈으니 이제 views.py 에서도 해당 이미지를 넣도록 수정하여 주자.

```python
#views.py

def create(request):
    new_blog = Blog()
    new_blog.title = request.POST['title']
    new_blog.writer = request.POST['writer']
    new_blog.body = request.POST['body']
    new_blog.image = request.FILES['image']
    new_blog.pub_date = timezone.now()
    new_blog.save()
    return redirect('blog:detail', new_blog.id)
```

---

## detail.html 수정하기

- 이렇게 되면 이제 image를 업로드 하고 db에 저장 하는 것 까지 완료 했습니다.

```html
{% extends 'base.html' %} {% block content %}
<h1>{{blog.title}}</h1>
<div>
  작성자: {{blog.writer}}
  <br />
  날짜: {{blog.pub_date}}
</div>
<hr />
<p>{{blog.body}}</p>
{% if blog.image %}
<p><img src="{{blog.image.url}}" alt="" /></p>
{% endif %}
<a href="{% url 'blog:update' blog.id %}">수정하기</a>
<a href="{% url 'blog:delete' blog.id %}">삭제하기</a>
<a href="{% url 'home' %}">돌아가기</a>
{% endblock %}
```

---

## 정리

- 1. **settings.py에 media파일이 어떤 url을 타고 프로젝트로 들어올지, 어디로 모아줄지 정의합니다.**
- 2. **urls.py에 이미지가 타고 들어올 url을 설계해줍니다.**
- 3. **업로드 하고싶은 데이터 class를 models.py에 정의해줍니다.**
- 4. **이미지 업로드를 위한 pillow 모듈설치 후 DB가 알아들을 수 있도록 migration,migrate해줍니다.**
- 5. **views.py에서 모든 객체를 받아 HTML로 넘겨줍니다.**
- 6. **HTML에 우리의 사진이 짠하고 보여지게 됩니다.**
