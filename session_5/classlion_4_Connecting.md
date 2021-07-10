# Conntecting

> - **1 - HTML끼리 연결해보기**
>   - 장고 템플릿 언어
> - **2 - Word Counter 만들기**
>   - 텍스트 데이터를 입력받고 views에서 가공하기
>   - views에서 가공한 데이터를 template에서 받아서 출력하기

<img src="https://images.velog.io/images/nathan29849/post/ff751a50-d859-46f7-8e52-1a9e00d385ad/image.png" width="70%;">

## <1. HTMl끼리 연결해보기>

### HTMl 연결

서버가 없는 상태에선 **\<a href="about.html">ABOUT</a>** 처럼 연결해 주었다. 그런데, 우리는 장고를 이용해 서버가 있는 상태에서 돌릴 예정이기 때문에 저렇게 작성하면 안된다! 그 이유를 알아보자.

### Template 작성

- 1. `index.html`을 다음과 같이 작성한다. (우선 a태그의 href 속성은 다 비워놓는다.)

```html
<h1>Word Count!</h1>
<a href="">ABOUT</a>
<form action="">
  <textarea name="fulltext" cols="40" rows="20"></textarea>
  <br />
  <input type="submit" value="Count!" />
</form>
```

- 2. 만약 새로 파일을 만드는 거라면 views.py에서 함수를 정의 해야하고, urs.py에서 경로를 설정해주어야 한다.

- 3. `index.html`과 연결될 `about.html`을 만들어 준다.

```html
<h1>About</h1>
<p>Hi, this is a page for counting words.</p>
<br />
<a href="">Back to home</a>
```

- 4. 이에 대해서 똑같이 views.py와 urls.py를 작업하여 준다.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
]
```

### 두 페이지 잇기

index에서 about으로 가기위해 href=""의 따옴표 안에 다음 코드를 추가한다.

```html
<a href="{% url 'about' %}">ABOUT</a>
```

`{% %}` : 장고 템플릿 언어 중 하나(장고 명령어를 사용하겠다는 의미 - url 관련 명령어)

- 이 코드는 urls.py에서 설정했던 path를 실행시킨다는 뜻을 지니고 있다. ' '안에는 path에서 설정했던 name이 들어간다.

**경로 이름에 ''(따옴표)가 들어가는 것을 잊지말자.**

## <2. Word Counter 만들기>

### count.html 템플릿 만들고 기본 작업하기

다음과 같이 count.html을 만들고 views.py, urls.py를 작업한다.

- html

```html
<h1>당신이 입력한 텍스트는 <!--총단어수--> 단어로 구성되어 있습니다.</h1>
<a href=""> 다시하기 </a>

<h1>입력한 텍스트: </h1>
<!-- 입력받은 전체 텍스트 -->

<h1>단어 카운트:</h1>
<!-- '단어' - '단어나온 횟수' -->
```

- [views.py](#)

```python
def count(request):
    return render(request, "count.html")
```

- [urls.py](#)

```python
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('count/', views.count, name='count'),
]
```

- 만약 여러개의 앱에서 views를 import 해 온다면 지금과 같은 방법으로는 불가능하다.

  - 따라서 아래의 두 방법 중 하나를 택해 사용하면 된다.
  - `import myapp.views`
  - `from myapp import views as ma(쓰고싶은 이름)`

- `index.html`의 form 태그의 action 속성의 속성 값에 `{% url 'count' %}`를 추가하여 준다.

### count 함수 수정하기([views.py](#))

다음과 같이 count 함수를 수정한다.

```python
def count(request):
    entered_text = request.GET['fulltext']
    word_list = entered_text.split()
    word_dictionary = {}

    for word in word_list:
        if word in word_dictionary:
            word_dictionary[word] += 1
        else:
            word_dictionary[word] = 1
    return render(request, 'count.html', {'alltext' : entered_text, 'total': len(word_list), 'dictionary': word_dictionary.items()})
```

-> `요청(request)이 들어오면 가져와라(GET). ['fulltext']를` 정도로 해석할 수 있다.
(GET, POST 방식에 대해서는 나중에 다루어 보도록 한다.)

-> 여기서 `'fulltext'`는 `index.html`에서 textarea 태그의 name 속성의 값이다.
name 속성이 `'fulltext'`인 데이터를 entered_text라는 변수에 저장하겠다는 의미이다.

-> render 안에 딕셔너리 형으로 자료형이 들어가는데 `key:value`형태로 데이터를 `count.html`에 넘겨주어 사용하겠다는 의미이다.

- 위의 `'alltext'`에 해당하는 key는 template(count.html)에서 사용할 변수
- 위의 `entered_text`에 해당하는 value는 views에서 선언한 변수
- alltext라는 변수에 entered_text의 값을 담아 쓰겠다는 의미이다.

### 사용되는 템플릿 언어

```html
<h1>당신이 입력한 텍스트는 {{total}} 단어로 구성되어 있습니다.</h1>
<a href="{% url 'index' %}"> 다시하기 </a>

<h1>입력한 텍스트: {{alltext}}</h1>
<!-- 입력받은 전체 텍스트 -->

<h1>단어 카운트:</h1>
{% for word, frequency in dictionary %} {{word}} : {{frequency}}
<br />
{% endfor %}
```

- `{{ (변수) }}`같은 문법이 나왔다.
  - 이것은, views에서 넘어온 데이터를 html 파일에서 보여주기 위한 기호이다.
  - 우리는 views.py에서 'alltext'를 넘겨주기로 했었기 때문에, 그 문법에 맞게 alltext를 적어준 것입니다.
  - {% %}와는 다른 문법입니다! (url을 사용할 때 쓰는 템플릿 언어)

### html 내에서 for문 사용하여 views의 데이터 활용하기

`count.html`에 다음의 내용을 추가하여 준다.

```html
<h1>단어 카운트:</h1>
{% for word, frequency in dictionary %}
<br />
{{ word }}: {{ frequency}}
<br />
{% endfor %}
```

처음과 끝에 `{% for ~ in ~ %}`, `{% endfor %}`을 선언해 주어야 한다.
(if 문도 마찬가지로 `{% if ~ %}`, `{% endif %}`로 선언한다.)

### 📒 Part 4 내용정리

우리는 지금까지 사용자가 입력한 텍스트를 그대로 보여주는 기능을 추가했다.
우리가 구현한 **두 가지 핵심 기능**은 다음과 같다:

1.  **총 단어 수를 세어주는 기능 구현**
    - 입력받은 텍스트를 split()한 후, word_list에 담고 len함수를 이용하여 html에 넣었죠!
2.  **각 단어 별로 나온 횟수를 세어주는 기능 구현**
    - word_dictionary를 만들고, for문으로 모든 단어를 하나하나 돌리면서 word_dictionary에 추가해줬습니다.
    - 돌려서 처음 나온 단어면 value값을 1로 하고, 아까 나온 word면 value값을 +1 해줍니다

---

참고 : 장고 템플릿 언어 (URL 표현 방법)

- `{% url "appname:urlname" %}`

- `{{"urlname"}}`
- `"urlname"`
