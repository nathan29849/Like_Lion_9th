# 2. HTML & CSS

## Chapter9. Selector(선택자)

### 1강. 선택자 기초

h1, p, span, div, a ... 등 종류가 다양함.

```css
h1 {
  color: red;
}
p {
  color: red;
}
```

- 이렇게 중복된 코드를 쓰는 것은 낭비다.
- 따라서 다음과 같이 바꿔줄 수 있다.

```css
h1,
p {
  color: red;
}
```

- 여러 개의 선택자를 ,(콤마)를 이용하여 스타일을 한 번에 지정할 수 있다.

### 2강. 단순 선택자

단순 선택자는 다음과 같다.

> 타입(Type)
> 아이디(Id)
> 클래스(Class)
> 전체(Universal)
> 속성(Attribute)

- 타입 선택자
  - 해당 태그를 가지는 모든 요소에 스타일을 적용
  - `p {color:red;}` 와 같이 사용함
- 아이디 선택자
  - Id로 스타일을 적용
  - 해당 Id 하나에 적용(Id는 단 하나)
  - 즉, HTMl 문서 내에서 동일한 아이디는 존재할 수 없음(다른 요소와 구분되는 점을 만들어 줌)
  - `#main {color:red;}` 와 같이 사용함
- 클래스 선택자
  - Class : 비슷한 특징을 갖는 요소를 지정하여 묶을 수 있음(여러 번 사용이 가능)
  - 클래스 이름으로 스타일을 적용한다.(같은 클래스 이름이면 모두 적용된다.)
  - `.main {color:red;} ` 와 같이 사용함
- 전체 선택자
  - 모든 요소에 스타일을 적용
  - 모든 요소에 적용하기 때문에 속도 저하 가능성이 있음(쓰지 않는 것을 권장함.)
  - `*{color:red;}` 와 같이 사용함
- 속성 선택자
  - 특정 속성을 소유하는 모든 요소에 스타일을 적용
  - `선택자[속성명="속성값"]{color:red;}` 와 같이 사용함
  - 앞에 선택자라고 말했지만 꼭 태그만 가리키는 것은 아님
  - ex. `#main[target="_blank"]{color:red;}` 라고 쓸 수도 있다.

### 3강. 복합 선택자

<img src="https://images.velog.io/images/nathan29849/post/7b3a4308-e369-4230-b65c-4b8024206336/image.png" width="40%">

- 자식 선택자(Child Selector)

  - 선택자A의 모든 **자식** 중 선택자B와 일치하는 요소를 선택
  - `선택자A > 선택자B{color:red;}` 와 같이 사용함
  - ex. `artice > p{color:red;}`
  - 밑의 초록색 p 태그들은 자식 태그가 아닌 후손 태그이기 떄문에 CSS 적용이 안됨.
  - <img src="https://images.velog.io/images/nathan29849/post/6d78270e-13ff-48d9-9045-5333ab6e31ab/image.png" width="40%">

- 후손 선택자(Descendant Selector)
  - 선택자A의 모든 **후손** 중 선택자B와 일치하는 요소를 선택
  - `선택자A 선택자B{color:blue;}` 와 같이 사용함 (중간에 띄어쓰기를 해줌)
  - ex. `artice p{color:blue;}`
  - 후손은 자식도 포함하므로 모든 p 태그가 CSS 적용이 된 모습을 볼 수 있다.
  - <img src="https://images.velog.io/images/nathan29849/post/732005ac-1683-4b0f-9904-44dcf6e6231a/image.png" width="40%">

### 4강. Pseudo 클래스

요소의 특별한 상태를 지정할 때 씀
"가상의 클래스"라는 의미
진짜 클래스는 아니지만, 가상의 클래스를 이용하여 스타일을 지정할 수 있다.

- `선택자:pseudo-class{속성:속성 값;}` 와 같이 사용함
- ex. `#main:active{color:red;}`
- :active, :hover, :focus, :visited, :focus-within, :focus-visible, :target 등이 있으며, 웹 브라우저의 개발자 도구에서 해당 요소를 선택하면 볼 수 있다.

- :link (방문하지 않은 링크의 경우)
  - `a:link{color: yellow;}` 와 같이 사용함
- :visited (방문한 링크의 경우)
  - `a:visited{color: yellow;}` 와 같이 사용함
- :hover (요소에 마우스가 올라와 있을 경우)

  - `a:hover{color: yellow;}` 와 같이 사용함

- 더 궁금하다면 pseudo class selector를 검색하여 찾아보면 된다!
