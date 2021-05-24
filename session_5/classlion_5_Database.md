# Django와 DataBase

데이터베이스를 이용하여 웹페이지에 입력한 정보들을 저장해보자.

> - ORM
> - 필드 종류와 옵션
> - makemigrations와 migrate
> - DB 적용 확인하기

---

## 🍎 ORM (Object Relation Mapping)

- 데이터베이스에 명령을 내리지 않아도 파이썬의 객체지향적인 방법으로 DB의 데이터들을 생성, 수정, 삭제 등을 할 수 있다.

- 오로지 파이썬만으로 웹 어플리케이션을 만들 수 있는 것이다.

- ORM을 쓰기위해 드디어 `models.py`를 건드리게 될 것이다.

### DataBase

ex. Blog 테이블 (행 : row, 열 : column)

| ID  | 제목     | 본문      | 생성날짜   | 글쓴이      |
| --- | -------- | --------- | ---------- | ----------- |
| 1   | 글 제목1 | 글 본문 1 | 작성 날짜1 | 글 쓴 사람1 |
| 2   | 글 제목2 | 글 본문 2 | 작성 날짜2 | 글 쓴 사람2 |
| ... | ...      | ...       | ...        | ...         |

- 위와 같은 형식을 유지하면서 데이터가 기록된다.

### Python 객체지향

- class : 정보를 저장하는 형식의 틀 (DB의 table과 유사함)
- instance : 클래스를 통해 표현되는 개별 객체

### python class로 DB 표현하기

```python
class Blog:
    ID = 숫자
    제목 = 문자
    본문 = 문자
    생성날짜 = 날짜
    글쓴이 = 문자
```

```python
from django.db import models

# Create your models here.
# 데이터베이스에 만들 테이블의 이름과 같아야 함
class Blog(models.Model):   # models의 Model 클래스를 상속받을 것임
    # 테이블의 column 만들기
    title = models.CharField(max_length=200)
    writer = models.CharField(max_length=100)
    pub_date = models.DateTimeField()
    body = models.TextField()   # 제한이 없는 textfield

    def __str__(self):  # 객체가 호출이 됐을 때 나오는 이름표 같은 녀석
        return self.title
```

- 위와 같이 각각의 형식이 어떤 데이터 타입을 갖는지 나타내주어야 한다.
- 이 클래스를 통해 객체를 하나하나 찍어내면서 데이터베이스에 정보를 기록할 것임.
- 이렇게 저장된 데이터들을 싹다 가져와서 아래와 같이 표현할 것임.

<img src="https://images.velog.io/images/nathan29849/post/d730cf52-d225-4f21-ac33-4de1e78fac3b/image.png" width = "70%">

- 또는 아래와 같이 하나만 가져와서 디테일 페이지를 구현할 것인지 선택하면 된다.

  <img src="https://images.velog.io/images/nathan29849/post/d22b2a63-ef09-41c8-a267-df386f551ec6/image.png" width = "70%">

---

## 🍎 필드 종류와 필드 옵션

### 필드 종류

<img src="https://images.velog.io/images/nathan29849/post/0aa3625e-f261-4eb6-9ee8-9c8965cce207/image.png" width="80%">

### 필드 옵션

- blank : validation시에 empty를 허용하는지 여부
- null : null 값을 허용하는지 여부
- db_index : 인덱스 필드인지 여부
- default : 디폴트 값이나 함수를 지정하여 준다.
- unique : 현재 테이블 내 유일한 값인지 여부
  ... 등 엄청 많은 필드옵션이 존재한다.

#### 필드 종류와 필드 옵션은 그 종류가 다양하고 쓰임에 따라 다르므로 그때 그때 찾아보자!

---

## 🍎 makemigrations와 migrate

### 🐌 makemigrations

- `models.py`에 클래스가 만들어졌다고 해서 바로 데이터베이스에 테이블이 생성되지 않음
  -> 명령어를 통해 만들어주어야 함.

  ```pseudo
  python manage.py makemigrations
  ```

- `makemigrations` : 앱 내의 migration 폴더를 만들어서 `models.py`의 변경사항을 저장
  -> 쉽게 생각해보면 데이터베이스에 테이블을 만들어준다고 생각할 수 있겠다.

- `makemigrations` 명령어 이후 아래와 같이 나온다면 성공!
  ```pseudo
  Migrations for 'blog':
  blog/migrations/0001_initial.py
   - Create model Blog
  ```

### 🐌 migrate

- 아래 명령어를 통해 변경 사항들을 **DB에 바로 적용**

  ```pseudo
  python manage.py migrate
  ```

- `migrate` : migration 폴더를 실행시켜 데이터베이스에 적용
- `migrate` 명령어 이후 아래와 같이 나온다면 성공!
  ```pseudo
  Operations to perform:
  Apply all migrations: admin, auth, blog, contenttypes, sessions
  Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying blog.0001_initial... OK
  Applying sessions.0001_initial... OK
  ```

---

### ✋ 여기서 잠깐! ✋

**ID 칼럼을 지정해주지 않는 이유는??**

- 상속받은 `models.Model`에 **ID 값이 이미 정의**가 되어있기 때문이다.
- 상속은 상속받을 부모 클래스에 있는 모든 메소드들과 속성들을 쓸 수 있다.

---

## 🍎 DB 적용 확인하기!

(어떻게 DB에 적용되어있는지 알 수 있나?)

-> Django는 **admin 패널**을 제공해주기 때문에 타 웹 프레임워크 보다 더 쉽게 DB를 들여다 볼 수 있음.

#### admin (super user 생성하기)

```pseudo
python manage.py createsuperuser
```

#### 당장은 admin page에서 보이지 않음 -> why? 등록을 하지 않았기 때문임

-> app내의 admin.py에 들어간다.
-> 우리가 models.py에 `Blog`를 등록했다는 사실을 알려주어야 한다.

```python
from .models import Blog
admin.site.register(Blog)
```

-> blog 생성 완료 -> Server를 켠 후 127.~~/admin에 들어가기
-> superuser login 하기 -> `ADD BLOG +` 버튼 클릭

### ✋ 여기서 잠깐! ✋

DateTimeField에서 시간을 설정해 줄 때, now를 클릭하더라도 지금 현재시간과 약 9시간 정도가 차이가 나는 모습을 볼 수 있다.

<img src="https://images.velog.io/images/nathan29849/post/47460ff0-f93b-4e3f-a4bb-25a6d0e6e9fc/image.png" width="60%">

이것을 현재시각과 맞춰주기 위해서는 project 폴더내의 settings.py에 들어가서
다음과 같이 `TIME_ZONE`에 대한 내용을 `'UTC'`에서 `'Asia/Seoul'`바꿔주면 된다!

```pseudo
TIME_ZONE = 'Asia/Seoul'
```

#### admin page에서 추가한 내용의 제목을 바꾸는 방법

admin 패널을 보게 되면 데이터를 저장할 때마다 `blog object(1)`이라고 되어있는 걸 볼 수 있다.

이를 제목으로 바꿔주기 위해서는 `models.py`에서 해당 클래스 내부에 아래의 코드를 작성하여 주면 된다.

```python
from django.db import models

# Create your models here.
# 데이터베이스에 만들 테이블의 이름과 같아야 함
class Blog(models.Model):   # models의 Model 클래스를 상속받을 것임
    # 테이블의 column 만들기
    title = models.CharField(max_length=200)
    writer = models.CharField(max_length=100)
    pub_date = models.DateTimeField()
    body = models.TextField()   # 제한이 없는 textfield

    def __str__(self):  # 객체가 호출이 됐을 때 나오는 이름표 같은 녀석
        return self.title

```
