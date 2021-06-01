# CRUD 중 Update

- **CRUD**

> C : Create
> R : Read
> **U : Update**
> D : Delete

---

오늘 배울 함수

> - edit : edit.html을 보여줌
> - update : 데이터베이스에 변경사항을 적용

---

## 🍯 1. Create와 Update의 차이점

- Update는 수정할 데이터의 id값을 받아야 한다.
- path converter를 이용하여 특정 글의 id값을 받고 데이터베이스에서 그 데이터를 가져오라고 요청할 것임
  - path converter : `urls.py`에서 url을 지정할 때, `"<str:id>"`로 했던 것을 기억하기!

## 🍯 2. Edit 함수 만들기

### 🎯 views.py

```python
def edit(request, id):  # create와 다른점. (id 값을 받아야 함.)
    edit_blog = Blog.objects.get(id = id)
    # edit_blog = get_object_or_404(Blog, pk = id)  둘 중 어떤 방법을 사용해도 상관이 없다.
    return render(request, 'edit.html', {"blog" : edit_blog})
```

### 🎯 Edit.html 만들기

```html
<body>
  <h2>Update Your Blog</h2>
  <form action="" method="post">
    {%csrf_token%}
    <p>제목 : <input type="text" name="title" value="{{blog.title}}" /></p>
    <p>작성자 : <input type="text" name="writer" value="{{blog.writer}}" /></p>
    본문 :
    <textarea name="body" id="" cols="30" rows="10">
     {{blog.body}}
    </textarea>
    <br />
    <input type="submit" value="submit" />
  </form>
</body>
```

- `Create`와 마찬가지로 `method="post"`로 해준다.
  - 받은 데이터를 수정하여 다시 넘겨줄 것이기 때문이다.
- 폼 안의 input 태그에 value 값으로 데이터 받아온 것을 넣도록 하자.
  - textarea 태그는 value 값으로 넣는 것이 아닌, 태그 사이에 값을 넣으면 된다.
- action 부분은 `Update` 함수를 만들고 나서 넣을 예정이다.

<img src="https://images.velog.io/images/nathan29849/post/6b60ca49-f18e-4b68-9619-435696581357/image.png" width="40%">
- 이렇게 value 값으로 넣어준 Blog의 내용들이 그대로 들어가 있다.

### 🎯 urls.py

```python
path('edit/<str:id>', edit, name="edit"),
```

---

## 🍯 3. Update 함수 만들기

### 🎯 views.py

**create 함수**

```python
def create(request):
    new_blog = Blog()
    new_blog.title = request.POST['title']
    new_blog.writer = request.POST['writer']
    new_blog.body = request.POST['body']
    new_blog.pub_date = timezone.now()
    new_blog.save()

    return redirect('detail', new_blog.id)
```

**update 함수**

```python
def update(request, id): # 수정을 해야할 id 값을 받아야 한다. (Create와의 차이점!)
    update_blog = Blog.objects.get(id=id) # 이 id 값에 해당하는 객체의 컬럼을 edit에서 온 정보들로 덮어씌워야 함.
    update_blog.title = request.POST['title']
    update_blog.writer = request.POST['writer']
    update_blog.body = request.POST['body']
    update_blog.pub_date = timezone.now()
    update_blog.save()

    return redirect('detail', update_blog.id)
```

- update 함수에서는 create 함수와는 달리 id 값을 받아야 한다.
  - 이 id 값에 해당하는 객체의 컬럼을 **edit에서 온 정보들**로 덮어씌워야 하기 때문이다.
  - 나머지는 거의 비슷하게 작성하면 된다.
- `detail.html`로 수정한 데이터를 넘겨주어야 하기 때문에 redirect를 통해 `update_blog.id`를 넘겨준다.

### 🎯 edit.html

```html
<body>
  <h2>Update Your Blog</h2>
  <form action="{% url 'update' blog.id %}" method="post">
    {%csrf_token%}
    <p>제목 : <input type="text" name="title" value="{{blog.title}}" /></p>
    <p>작성자 : <input type="text" name="writer" value="{{blog.writer}}" /></p>
    본문 :
    <textarea name="body" id="" cols="30" rows="10">
     {{blog.body}}
    </textarea>
    <br />
    <input type="submit" value="submit" />
  </form>
</body>
```

✋ 여기서 잠깐 !✋
**path converter를 사용할 때 주의할 점!**

- html 내부에서 a 태그로 url을 넘겨줄 때, 꼭 id값을 같이 넣어주자!

  - ex. "{% url 'update' blog.id %}"

- 그래야 url에서 지정해주었던 곳에 id값이 들어갈 수 있다.
  - ex. path('update/\<str:id\>', update, name="update"),

### 🎯 urls.py

```python
path('update/<str:id>', update, name="update"),
```

- update 함수가 id 값을 매개변수로 받으므로 `path converter`를 써주어야 한다.

---

## 🎰 오늘의 핵심

**update를 만들어 줄 때 create와 달리 id 값을 불러오는 것을 잊지말자.**
