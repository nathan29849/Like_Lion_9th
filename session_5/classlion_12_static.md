- 정적 파일 : static - 이미지나 CSS, JS 파일 처럼 내용이 고정되어 있어, 응답을 할 때 별도의 처리 없이 파일 그대로를 보내주면 되는 파일들 (즉, 미리 저장해두고 필요할 때 불러오는 파일)

- static 파일을 이용해 사진을 첨부해 보자!

---

## static 폴더 만들기

- 앱 폴더 내에 static 폴더를 만들기
- 이미지를 다운 받아서 static 폴더에 해당 이미지를 저장하기

<img src="https://images.velog.io/images/nathan29849/post/73c03b05-2369-4e23-ad87-cb8ee0c9ac7c/image.png" width="30%">

---

## Project 폴더의 settings.py 수정하기

- 해당 사진을 띄우기 위해서는 프로젝트 전체 관리자에게 해당 파일이 어디에 위치해있는지 명시를 해줘야 합니다.

- 그럼 앱 안에 만든 static 폴더를 Django에게 위치를 알려주기 위해 프로젝트 전체를 관장하는 settings.py로 가서 아래의 코드를 추가해줍니다.

```python
#settings.py

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/
# 어떤 식으로 static 파일을 관리하는지 공식 문서로 나와있다

STATIC_URL = '/static/'
```

- static 파일을 활용하기 위해선 **static 파일이 어디에 있는지**와 그리고 **static 파일을 어디에 모을건지** settings.py에 알려줘야 합니다!

- os모듈을 활용해야 하기 때문에 settings.py에서 import os를 해주세요.

```python
#settings.py

#맨 위에 os를 import 해주세요
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

STATIC_URL = '/static/'

STATICFILES_DIRS = [
	os.path.join(BASE_DIR, 'blog', 'static') # BASE_DIR/blog/static
	# os.path.join(BASE_DIR, '앱이름', 'static')
]

# static django에서는 편의를 위해 흩어져있는 static파일을 한곳에 모으는데,
# 그때 파일을 모아줄 위치를 나타냅니다.
STATIC_ROOT = os.path.join(BASE_DIR, 'static') # BASE_DIR/static
```

- static 파일을 모으기 위해 터미널에 `python manage.py collectstatic`이라는 명령어를 작성한다.

- 아래 이미지와 같이 결과가 뜬다면 정상적으로 작동한 것이니 안심하자.

<img src="https://images.velog.io/images/nathan29849/post/3174ce6f-f5a8-4961-97c8-aa2b460e5d9a/image.png">

- 새로 생긴 static 폴더는 settings.py의 STATICFLES_DIRS 경로 안에 있는 모든 static 파일들을 한 곳에 모아줍니다. 이 폴더의 위치는 STATIC_ROOT 에 설정해준 곳에 생깁니다.

<img src="https://images.velog.io/images/nathan29849/post/b8dbc2b7-0eaa-4914-b22a-eeaccc9b2bf4/image.png" width="30%">

---

## Static 파일 활용하기

- template에서 static 폴더에 있는 파일들을 불러오기 위해서 template에 static 파일들을 불러오겠다는 장고 내장 명령어인 `{% load static %}`을 사용해야 합니다.

```html
# 사용하기 위해선 {% load static %} 명령어 사용 {% load static %} # 위 코드를
통해 static 파일에 접근이 가능하다

<img src="{% static '파일이름.확장자' %}" alt="" />
# "{% static '파일이름.확장자' %}"를 통해 static 파일에 안에 있는 것에 접근할 수
있다.
```
