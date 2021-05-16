# 2. HTML & CSS

## Chapter16. 부트스트랩

### 1강. 소개 및 시작

버튼을 예로, 웹 개발을 하다보면 유사한 디자인이나 모양이 다른 버튼을 만들 때가 있다.
이러한 버튼 뿐만 아니라, 다양한 웹 요소들을 비슷한 모양과 형태로 만들어야할 때가 종종 있다.
이를 CSS 코드로 작성할 경우 중복되어 작성되는 경우가 많다.
이러한 경우 **부트스트랩**을 이용하면 편리하다.

#### 부트스트랩이란?

- 간단하고 빠르게 웹을 생성할 수 있도록 도와주는 오픈소스 프론트엔드 프레임워크이다.

- 한국어 버전도 있으나, 업데이트가 느린편이기 때문에, 영문 버전을 쓰는 것을 권장한다.

- CSS 부분은 \<head> 태그에 넣어주면 되고, JS 부분은 \<body> 태그에 넣어주면 된다.

### 2강. 폼과 버튼

부트스트랩에서 정해둔 클래스 이름을 적기만 하면, 자동으로 CSS가 적용이 된다.

클래스 이름만 바꾸어 주어도 스타일이 바뀐다.

사이트 왼쪽 배너에 Components에서 본인이 필요하다고 생각되는 부분을 쉽게 적용해서 사용할 수 있다.

### 3강. 그리드 시스템

- flex box가 줄을 세워서 웹 레이아웃을 완성하는 것이었다면, 그리드라는 것은 웹을 가로, 세로로 나눠서 바둑판에 두듯 배치할 수 있다.

- 그리드를 쓰기 위해서는 container와 row가 반드시 필요하다.

  - .container : 각 내용을 담기 위한 하나의 그릇
  - .row : container 안에서 공간을 나눔
  - .col : row 안에서 공간을 나눔
    <br/>
    <img src="https://images.velog.io/images/nathan29849/post/55ed86d6-e161-429a-82d1-665e8c485147/image.png" width="40%">

- 부트스트랩 페이지에서 `Grid`를 검색하여 사용한다.

- 부트스트랩은 클래스 기반이기 때문에, 원하는 CSS를 적용하고 싶다면, id 선택자를 쓰거나 태그 선택자에 클래스를 붙여 사용하거나 !important로 바꿔주어야 충돌 없이 사용할 수 있다.
  - !important
  - \# id
  - div.class

#### 본격적인 Grid System

- 화면을 총 12개로 분할한다.
  <br/>
  <img src="https://images.velog.io/images/nathan29849/post/17526f1e-5457-4245-9ccc-1bc648c356d8/image.png" width="40%">
  <br/>
  12개 중 하나는 `.col-1`에 해당한다. (1개 만큼의 넓이)
  - col-4 : 4/12 만큼의 크기
  - col-5 : 5/12 만큼의 크기

##### 반응형 웹

모바일, 태블릿, PC 등에서 각각 다른 모양으로 웹을 비춰줌
<br/>
<img src="https://images.velog.io/images/nathan29849/post/9def9603-fbfa-4ca9-86f6-6077c1100faa/image.png" width="40%">
<br/>
화면 사이즈는 화면에 따라 다음과 같이 구분된다.
<br/>
<img src="https://images.velog.io/images/nathan29849/post/fd5e6d85-586d-41bd-9c28-3f565782a17b/image.png" width="60%">
