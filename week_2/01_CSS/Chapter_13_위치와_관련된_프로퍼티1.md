# 2. HTML & CSS

(요소의 위치를 정렬하기 위한)

## Chapter13. 위치와 관련된 프로퍼티

### 1강. display

display : 요소가 보여지는 방식을 지정

HTML 요소

- block element
  - display: block;
- inline element
  - display: inline;

##### display: block;

- width: 100% 를 기본으로 가진다.
- 자주 쓰이는 block element
  - \<div>
  - \<h1> ~ \<h6>
  - \<p>
  - \<header>
  - \<section>
  - ...etc
- 가질 수 있는 프로퍼티
  - width, height, margin, padding이 가능

##### display: inline;

- block과 달리 새로운 줄에서 시작하지 않으며, 필요한 만큼의 너비(width)만 가진다.
  - 즉, 요소(content)의 크기 만큼만 너비를 갖게 됨
- 자주 쓰이는 inline element
  - \<a>
  - \<span>
  - \<img>
  - ...etc
- 가질 수 있는 프로퍼티
  - width, height, margin-top, margin-bottom이 **지정 불가능**
    - 이러한 특징 때문에 inline 요소를 쓰기엔 불편함이 존재함.

이를 해결하기 위해..

##### display:inline-block;

block과 inline 요소의 특징을 모두 가지고 있음
기본적인 쓰임은 inline과 동일하지만, inline에서 불가능했던 프로퍼티들을 사용할 수 있게 됨

- width, height, margin-top, margin-bottom 가능

(참고) display: none;을 하게 되면 아예 보이지 않음.(출력이 안됨)

### 2강. position

position : 요소의 위치를 정의

이 프로퍼티를 사용하여 요소의 위치를 옮길 수 있음.

position 프로퍼티 종류

- static : 기본 값, 좌표 프로퍼티를 쓸 수 없음
  - position: static;
- relative : 상대위치, 기본 위치(**원래 static일 때 있어야 할 위치**)를 기준으로 좌표를 사용함.
  - position: relative;
- absolute : 부모나 조상 중 relative, absolute, fixed가 선언된 곳을 기준으로 좌표 프로퍼티를 적용.
  - 만약 부모나 조상 중 위 내용이 선언 된 곳이 없다면 최상단의 body태그를 기준으로 삼음
  - position: absolute;
  - 만약 content에 내용이 있고, width가 따로 정해지지 않았다면, absolute를 적용했을 때 `inline`처럼 된다.(but 다른 점은 width가 적용이 안되는건 아니라는 것.)
    <br/>
    <img src="https://images.velog.io/images/nathan29849/post/22639102-1e3b-48de-954c-2c4a8a2bd2e5/image.png" width="20%">
- fixed : 보이는 화면을 기준으로 좌표 프로퍼티를 이용하여 위치를 고정(스크롤 할 때 마다 따라다니는 메뉴 생각하기.)

  - position: fixed;

- `z-index`: 숫자 값이 클수록 화면 전면부에 출몰하게 됨(원하는 숫자를 지정해서 요소별로 우선순위를 줄 수 있는 것) ~ 과격하게 큰 쓸 필요는 없음
