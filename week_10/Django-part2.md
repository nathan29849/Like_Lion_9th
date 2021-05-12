# Django

일자 : `2021.05.10(월) ~`

## Part 2. MTV Pattern 적용해보기

### 1. MTV Pattern

- MVC 패턴을 기반으로 한 Model - View - Template 패턴

  - `Model` : View에서 주고 받는 데이터 형식을 정의, DataBase(DB)

    the Model contains the logical file structure of the project and is the middleware & data handler between database and view.
    <br/>

  - `View` : 데이터를 처리하는 영역, MTV 중 핵심역할

    the View in this MTV architecture is formatting the data via the model.
    In turn, it communicates to the database and that data which transfer to the template for viewing.
    <br/>

  - `Template` : 사용자에게 보여지는 영역 (HTML, CSS, JS, 템플릿 언어 등이 이에 해당)

    the Template is making the life of a frontend developer easy that's for sure. It also provides more development speed then the traditional MVC architecture would
    <br/>

#### MTV 패턴과 관련된 이미지

<img src="https://images.velog.io/images/nathan29849/post/04a7b7b9-4fc0-41b1-8e5c-b49ca2d212a9/image.png" width="400px;">

<img src="https://images.velog.io/images/nathan29849/post/b35298d4-49ac-4946-9244-993c0d676da0/image.png" width="400px;">

<img src="https://images.velog.io/images/nathan29849/post/862d9bab-ca34-4d4e-a78a-07f9f4005d36/image.png" width="400px;">

<img src="https://images.velog.io/images/nathan29849/post/dbd44828-eb30-4d9a-9d35-e0072cd6fddf/image.png" width="400px;">

### 2. "Hello World" 띄워보기

- 프로젝트, 그리고 앱(app)

  - 앱은 하나의 장고 프로젝트를 기능별로 나눈 것이며, 이를 통해 유지/보수가 용이해진다.
  - 쉽게 말해 앱이 모여 프로젝트가 된다.
  - Project가 App들을 총괄.

    <img src="https://images.velog.io/images/nathan29849/post/aaa1fea2-1207-49a6-9000-d3c81f042f2f/image.png" width="400px;">

#### app 만들기

- 다음과 같은 명령어를 통해 `app1`이라는 앱을 하나 만들자

```
$ python manage.py startapp [앱이름]
```

- 주의 : 가상환경을 실행한 상태여야 하며, manage.py를 실행시킬 수 있는 경로여야 한다.

    <img src="https://images.velog.io/images/nathan29849/post/ecc71f17-fdb2-4557-91da-55d15268a914/image.png" width="200px;">

- 이런 식으로 앱 이름의 폴더가 생성되었음을 알 수 있다.
  <img src="https://images.velog.io/images/nathan29849/post/6c9e449a-6778-48a2-9eba-e240cdcbb6fe/image.png" width="700px;">

#### app 연결시키기

- 단순히 app을 만들었다고 자동으로 project로 연결되지 않는다.
- 따라서 project에 app을 만들었다고 알려주어야 한다.
- myproject/settings.py에 들어가서 INSTALLED_APPS에 생성한 앱의 이름을 추가하여 준다.

  <img src="https://images.velog.io/images/nathan29849/post/99c5661d-5033-4a05-8044-c78d668ced63/image.png" width="500px;">

#### 본격 코드 작성하기

- 우선 장고로 만든 웹서버가 사용자의 요청을 받아 처리하는 과정은 다음과 같다

  > 1.  사용자(클라이언트)가 `url`을 통해 서버에게 요청을 보낸다.
  > 2.  서버의 view는 model에게 요청에 필요한 데이터를 받는다.
  > 3.  view는 받은 데이터를 적절하게 처리하여 template으로 넘긴다.
  > 4.  template은 받은 정보를 사용자에게 보여준다.

- 이 과정을 역순으로 코드로 작성해 본다. (template(HTML) → views → url)

##### (1) Template - 만드는 방법

- app1 폴더 아래에 `templates`라는 폴더를 만들고 그 아래에 `index.html`을 만든다. - myproject/app1/templates/index.html
- 방금 만든 html에 텍스트가 나올 수 있도록 아래의 코드를 작성해준다.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      Hello, World!
    </body>
  </html>
  ```

- 🐌 vscode에서 `! → Tab`을 해주면 HTML 기본 골격이 자동완성 된다.

##### (2) View

- templates의 html 화면 띄우기
  - app1/views.py에 들어가서 다음과 같이 함수를 작성하여 준다.

```python
def index(request):
    return render(request, "index.html") # index.html을 랜더링
```

- index함수의 의미 : 웹서버 즉 Model에서 request가 오면, 그것을 매개변수로 받아 intdex.html을 띄워주라는 말(랜더링)

##### (3) URL

- URL 요청을 views에 연결 : 위에서 작성한 view 함수를 사용하기 위해서는 연결 작업을 해야한다.
- myproject/urls.py 에서 views를 import하고, urlpatterns 리스트에 아래와 같은 함수를 추가한다.

```python
path('', views.index, name="index"),
```

- `''` : 도메인 뒤에 붙는 path 부분(현재는 비워둔다.)
  - ex) google.com/login
- `views.index` : app1의 views.py에서 정의내린 index 함수를 실행하라.
- `name=index` : 이 path의 이름을 'index'라고 한다. (가급적 함수의 이름과 name을 일치시키자.)

```python
from django.contrib import admin
from django.urls import path
from app1 import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="index")
]
```

##### (4) 서버 돌리기

- 터미널 창에 `python manage.py runserver`를 입력하여 서버를 실행시킨다.

  <img src="https://images.velog.io/images/nathan29849/post/1a1aaffa-27ba-4e52-98a5-c83bb4e45b4d/image.png" width="200px;">

- 다음과 같이 잘 출력된다면 성공!
- 그 다음 `Ctrl` + `C`를 눌러 서버를 종료 시킨 후 아래의 코드를 터미널 창에 입력하여 가상환경도 종료한다.

```
$ deactivate
```

---

### 📒 Part 2 내용정리

1. app을 만들고 project에 연결하기 위해 settings.py에 추가하였다.
2. app 안에 templates라는 폴더를 만들고, templates 안에 우리가 띄워줄 html 파일을 추가하였다.
3. views.py에서 html을 불러올 함수를 정의했다.
4. urls.py에서 정의한 view 함수를 연결했다.

작업 순서는 다음과 같다.

- [settings.py](#) -> templates (HTML) -> [views.py](#) -> [urls.py](#)
