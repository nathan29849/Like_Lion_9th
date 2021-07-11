<img src= "https://images.velog.io/images/nathan29849/post/72fb428d-9bc6-4ef3-93e7-a385b7132f46/image.png">

위와 같이 캡쳐한 CGV 홈페이지를 보면 똑같은 내브바(navbar)지만 밑에는 다른 내용이 있음을 확인할 수 있다.

내브바는 내비게이션 바의 준말이고 기능/정보에 빨리 접근하기 위해 존재하는 하나의 GUI이다.

Template 상속을 알기전엔 페이지에 내브바를 달기 위해서는 원하는 페이지에 동일한 코드를 복사/붙여넣기하여 매우 귀찮은 상황이었다.
심지어 해당 코드에 수정사항이 생기기라도 하면,, 일일이 수정을 해야하는 문제점이 존재했다.

따라서 우리는 장고가 이런 문제를 해결하기 위해 **템플릿 상속**을 지원하므로 이에 대해 알아보고자 한다.

---

# 템플릿 상속이란?

- 기반이 되는 하나의 template을 만들고, 그것을 기반으로 다른 html을 작성하는 기법이다.

## base.html 만들기

- 지금 만들 base.html은 앞으로 상속받을 모든 html들의 기반이 된다.
- 그 동안 templates 파일을 앱 안에 만들어줬다면, 이번엔 project 폴더 안에 templates라는 폴더를 생성하고 base.html을 작성한다.

<img src="https://images.velog.io/images/nathan29849/post/96231d00-b5ef-4656-9401-99447f29253e/image.png" width="30%">

- 그리고 모든 페이지에 내브바를 설정하기 위해 가져온 아래의 부트스트랩 내브바 코드를 base.html에 작성한다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <title>BLOG</title>
    <style>
      body {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div class="container">{% block content %} {% endblock %}</div>
  </body>
</html>
```

- 이렇게 작성하여 위에 있는 코드들을 모두 상속이 되도록 할 예정이다.

### ❗️주의할 점❗️

- `<div class ="container">` 내부의 `{% block content %}`과 `{% endblock %}` 사이에 페이지마다 필요한 정보가 들어간다고 생각하면 된다!

---

## 장고에게 알려주기

- 이때까지 세션을 진행하면서 무언가를 하면 항상 장고가 자동으로 인식을 못하기 때문에 직접 알려줘야 했는데, 이번에도 직접 장고에게 알려주어야 한다.

- 1️⃣ project 폴더에 있는 `settings.py`에 들어간다.
- 2️⃣ TEMPLATES에서 'DIRS'에 빈 리스트가 있는데, 해당 리스트에 `base.html`의 경로를 넣어준다.
  - 프로젝트 폴더명 / templates 👈 꼭 자신의 프로젝트 폴더명에 맞춰 작성하자!

```python
#setting.py
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            'myproject/templates'
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

---

## home.html

- 상속이 될 수 있도록 `home.html`을 살짝 수정해야 한다.
- 중복된 html태그, header태그, body태그, nav태그를 `base.html`에 추가했기 때문에 해당 코드를 `home.html`에서 삭제하였다.

- 상속을 하고나면 코드의 길이를 엄청나게 줄일 수 있다!

- `{% extends 'base.html' %}`을 통해 `base.html`을 상속받을 수 있다.

- base.html에도 `{% block content %}`와 `{% end block %}`이 있었는데 상속받는 템플릿은 안에 내용을 포함하고 있습니다. base.html에선 해당 공간에 내용이 들어올 것이라고 명시하는 것이고, 상속받는 템플릿은 그 공간에 내용(content)을 담을 것임을 의미합니다.

- 여기서, `{% extends 'base.html' %}` 은 반드시 html 파일의 첫째 줄에 위치해야 합니다. 그렇게 하지 않을 경우 에러를 띄웁니다.

```html
{% extends 'base.html' %}
    {% block content %}
      <header>
        <h1>Blog</h1>
      </header>

      <h4><a href="{% url 'new' %}">새 글 작성하기</a></h4>

      {% for blog in blogs%}
        <h3>{{ blog.title }}</h3>
        {{ blog.writer}}</br>
        {{ blog.summary }}
        <a href="{% url 'detail' blog.id %}">...more</a>
        <a href="{% url 'delete' blog.id%}">Delete Post</a>
      {%endfor %}
    {% endblock %}
```

- 모든 작업이 끝난 후 runserver를 하면 위에 내브바가 생긴 걸 확인할 수 있습니다.

<img src="https://images.velog.io/images/nathan29849/post/6da976c0-54f4-40ee-8fd6-1821f18c2acb/image.png">

---

### 🦁 정리

Template 상속을 통해

- 중복된 코드를 줄일 수 있고
- css를 상속된 템플릿에 모두 적용할 수 있다!
