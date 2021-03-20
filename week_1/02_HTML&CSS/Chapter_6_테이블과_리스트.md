# 2. HTML & CSS

### Chapter 5. 테이블과 리스트

#### 1강 테이블의 구성

이전 태그들과는 달리 일정한 형식대로 맞춰 만들어야 쓸 수 있음.

- \<table> : 표 전체를 감싸는 태그
- \<th> : table heading / 표의 행 내부에 제목 셀을 담는 태그
- \<td> : table data / 표의 행 내부에 데이터 셀을 담는 태그
- \<tr> : table row / 표에서 행을 구분

<img src="https://images.velog.io/images/nathan29849/post/02b80f82-6179-481b-a7bb-ba91d8d90a2a/image.png" width="50%">

이런 식으로 테이블을 구성하면 된다.

```html
<table>
  <tr>
    <th>성별</th>
    <th>학년</th>
    <th>이름</th>
  </tr>
  <tr>
    <td>남</td>
    <td>3</td>
    <td>nathan</td>
  </tr>
  <tr>
    <td>여</td>
    <td>3</td>
    <td>jenny</td>
  </tr>
</table>
```

table 속성

- `rowspan="숫자"`: "숫자"만큼 셀이 행을 점유
- `colspan="숫자"` : "숫자"만큼 셀이 열을 점유

<hr/>

#### 2강 목록(List)

1. 순서 없는 목록(Unordered List)
   - \<ul> : unordered list
   - \<li> : list item
2. 순서 있는 목록(Ordered List)
   - \<ol> : ordered list
   - \<li> : list item

<img src="https://images.velog.io/images/nathan29849/post/ce31574d-be8d-4fd7-b0e2-e3a67f879ac3/image.png" width="30%">

```html
<h3>장보기 목록</h3>
<ul>
  <li>우유</li>
  <li>세제</li>
  <li>바지</li>
</ul>

<h3>To-Do 리스트</h3>
<ol>
  <li>롤 실버 탈출</li>
  <li>맛집 탐방</li>
  <li>축구 10골 넣기</li>
</ol>
```

- 리스트 내에 리스트를 중첩시킬수도 있다!

#### 3강 목록과 관련 있는 속성

`<ol>`태그와 관련 있는 속성

- start="숫자" : 리스트가 시작하는 숫자를 정함
- type="문자" : 순서를 시작하는 문자를 정함(abc, 로마자)
- reversed : 순서를 반대로 시작, 다른 속성과 달리 키(Key)만 써서 사용

`<li>` 태그와 관련 있는 속성

- value="숫자" : 해당 리스트 아이템의 번호를 지정
  - 다음 li태그가 value +1 부터 시작하게 됨.
