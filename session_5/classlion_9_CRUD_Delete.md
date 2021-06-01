# CRUD 중 Delete

- **CRUD**

> C : Create
> R : Read
> U : Update
> **D : Delete**

---

# 1. views.py

- 아래와 같이 우선 `views.py`에 delete 함수를 만들어준다.
- 매개변수로는 reqeust와 id가 들어간다.
  - 삭제해 줄 블로그의 id값이 있어야 삭제가 가능하기 때문!

```python
def delete(request, id):
    delete_blog = Blog.objects.get(id=id)
    delete_blog.delete()
    return redirect('home')
```

# 2. urls.py

- delte 함수의 매개변수에 있는 id를 받으려면 무조건 path converter를 해주어야 한다.

```python
path('delete/<str:id>', m.delete, name="delete"),
```

# 3. detail.html

- path converter에 넘겨질 아이디를 정해주어야 함(헷갈리지 말자!!)

```html
<a href="{% url 'delete' blog.id %}">삭제하기</a>
```
