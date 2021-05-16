# MTV pattern

MTV pattern Part 2.의 연장선에 있는 내용으로,
앞부분과 내용이 조금 상이할 수 있으나 전체적인 맥락은 이어진다고 보시면 됩니다.

## Part 3. MTV Pattern에서 URL 연결해보기

- [settings.py](#) -> templates (HTML) -> [views.py](#) -> [urls.py](#)
- 위의 작업 순서에 따라 url을 연결하는 작업을 진행하여 보자.

### 1. input 값을 받을 수 있는 페이지 만들기 (index.html)

#### 🎈 (1) template (app/templates/index.html)

간단하게 input 태그를 포함한 페이지를 우선 app 내의 templates에 만들어 준다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div style="text-align: center">
      <h1>사용자의 이름을 입력해주세요</h1>
      <br />
      <form action="">
        // 나중에 이 action에 들어갈 값은 url로 지정해 줄 것이다. (이 때
        urls에서 정해주었던 name만 적어줘도 그 페이지로 이동할 수 있게 된다.)
        <label for="nameInput">이름 : </label>
        <input id="nameInput" name="name" />
        <input type="submit" value="제출" />
        // type이 submit이면 click시 action에서 정해진 대로 요청된다.
      </form>
    </div>
  </body>
</html>
```

<img src="https://images.velog.io/images/nathan29849/post/4270d9d5-48fc-4b5d-a882-6ff8bb2e14dc/image.png" width="400px;">

- 위왁 같이 페이지가 만들어진다.

#### 🎈 (2) views에 함수 만들기 (app/views.py)

templates에 만든 html을 기반으로 view 함수를 작성한다. (이전 자료와 거의 동일)

```python
def welcome(request):
    return render(request, "index.html")
```

#### 🎈 (3) urls에서 path 지정하기 (project/urls.py)

view함수를 만들었다면, project 폴더 내의 urls를 정해주자.

```python
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.welcome, name="welcome"),
]
```

### 2. input의 값을 넘겨줄 페이지 만들기 (hello.html)

#### 🎈 (1) template (app/templates/hello.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div style="text-align: center">
      <h1>반갑습니다 [여기에는 입력값이 들어갈 예정]님!</h1>
    </div>
  </body>
</html>
```

#### 🎈 (2) views에 함수 만들기 (app/views.py)

templates에 만든 html을 기반으로 view 함수를 작성한다. (이전 자료와 거의 동일)

```python
def hello(request):
    userName = request.GET['name']  # 이러한 방식으로 Input 박스의 값을 가져올 수 있다. & 그것을 userName이라는 변수에 할당
    return render(request, "hello.html", {'userName' : userName})
    # 딕셔너리의 형태{key : value}로 hello.html에 데이터(userName)를 전달한다.
```

#### 🎈 (3) urls에서 path 지정하기 (project/urls.py)

view함수를 만들었다면, project 폴더 내의 urls를 정해주자.

```python
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.welcome, name="welcome"),
    path('hello/', views.hello, name="hello"),
]

```

#### 🎈 (4) templates 수정하기

- (3)-1 index.html : form에서 action 속성 값 정해주기
  - url의 경로를 그대로 적어주어도 되지만, urls의 name 속성을 이용해도 된다!

```html
<form action="hello">
  // 이렇게 urls에서 지정해주었던 name의 값을 넣어준다!
  <label for="nameInput">이름 : </label>
  <input id="nameInput" name="name" />
  <input type="submit" value="제출" />
  // type이 submit이면 click시 hello를 name의 속성 값으로 갖는 url로 이동한다.
  // (name이라는 데이터를 가지고)
</form>
```

- (3)-2 hello.html : 템플릿 언어를 사용하여 아까 view에서 딕셔너리 형태로 정해준 변수를 넣어준다.
  - 템플릿 언어를 사용하는 방법 : 중괄호 두 번으로 묶어준다. `{{내용}}`

```html
<div style="text-align: center">
  <h1>반갑습니다 {{userName}}님!</h1>
</div>
```

#### 데이터(userName)가 `hello.html`에 잘 넘어간 모습을 볼 수 있다.

<img src="https://images.velog.io/images/nathan29849/post/60e8369f-b88c-4bfa-a4c5-7a248493b408/image.png" width="400px;">

---

### 📒 Part 3 내용정리

1. app 내에 input 태그를 포함한 index.html을 만들고 view 함수를 작성한 후 urls에 path를 지정했다.
2. app 내에 input 태그의 정보를 받아올 hello.html을 만들고 view 함수를 작성한 후 urls에 path를 지정했다.
3. 2에서 view함수를 정할 때, 데이터를 어떤 식으로 받아야 하고(userName = request.GET['name']), 어떤 식으로 넘겨줘야하는지(render(request, hello.html, {'username' : userName}))를 배웠다.
4. urls에서 지정해 주었던 name(hello)을 form태그의 action 속성에 대한 속성 값(action="hello")으로 넣어주게 되면 그 url로 이동하게 됨을 알게 되었다.
5. 또한 이 받은 데이터(userName)를 html에서 어떤 방식으로 표현해야 하는지에 대한 템플릿 언어를 배웠다.(중괄호 쓰기 : {{userName}})
