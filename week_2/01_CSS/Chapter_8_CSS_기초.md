# 2. HTML & CSS

일자 : `2021.03.22(월) ~ 2021.03.28(일)`

## Chapter8. CSS 기초

### 1강. CSS 기초 문법

간단히 말해서 Style Sheets.
우리가 web에 적용하는 스타일들을 명세해둔 명세서느낌

#### 선택자(Selector)

- 스타일을 적용하고자 하는 HTML 요소를 선택하는 역할.

#### 속성(Property)

- 지정할 스타일의 속성명에 해당.
- `속성: 값;`이 한 단위이다.
- ;(세미콜론)을 이용하여 구분

#### 값(Value)

- 키워드나 특정 단위를 이용하여 원하는 스타일을 적용.
- 속성(Property)와 짝을 이루며, 각 속성마다 허용되는 값의 종류가 다를 수 있음(이 부분은 항상 찾아보기!)

<img src="https://images.velog.io/images/nathan29849/post/162689a8-ac33-468e-bd99-1e0bcfa88558/image.png">

++ 선택자 뒤의 한 블럭 단위를 `선언 블록(Declaration block)`이라고 한다.
+++ `선언블록`은 중괄호로 구분짓는다.
<img src="https://images.velog.io/images/nathan29849/post/21015b3d-04d5-416e-b1a6-de744318a5ba/image.png">

- 여기서 속성과 값 한 쌍을 가리켜서 `선언(Declaration)`이라고 부른다.
- 선언 블록 내부에서 세미콜론으로 다른 선언들과 구분 짓는다.
- 이런 특성 때문에 한 줄로 쓰기도 하지만, 가독성을 위해 속성별로 한줄씩 쓰는 것을 권장함.

### 2강. HTML에 CSS를 적용하는 방법

CSS는 혼자 쓸 수 없음. 빈 종이에 스타일을 입힐 수 없는 것과 같다.

CSS는 반드시 HTML에 적용시켜야 사용이 가능함

적용시키는 방법에는 크게 3가지가 있다.

- **Link style**
  - HTML 내부에 있는 CSS 파일을 불러옴 (가장 일반적)
  - `<link rel="stylesheet" href="연결할 문서의 URL">`이런 식으로 head 태그에 써준다.
  - rel은 relation을 의미하며 현재 문서와의 관계를 의미한다.
- **Embedding style**
  - HTML의 head 태그에 \<style> 태그를 이용하여 CSS를 작성한다.
- **Inline style**
  - HTMl 요소에 직접 style 속성(Attributes)을 이용하여 CSS를 작성.
  - 각 요소에 CSS를 적용시키는 것이기 때문에 선택자를 따로 적을 필요가 없음
  - ex. \<h1 style="color: red">제목\<\h1>
