# 2. HTML & CSS

## Chapter 2. HTML 기초

### 1강 HTML 기초 문법 (요소와 태그)

```html
<h1>웹 프로그래밍 강좌</h1>
```

- 태그 : 내용을 나누고 어떤 역할을 하는지 구조를 정의
  - 시작 태그 : 컨텐츠의 시작을 표시
  - 종료 태그 : 컨텐츠의 끝을 표시

### 2강 HTML 문서 구조

HTML 요소만 가지고 있어서 되는 것이 아니라 제대로 된 구조를 갖춰야 웹 브라우저에서 인식을 함.

```html
<!DOCTYPE html>
```

- 문서 형식을 정의
- html 문서에서 가장 처음 와야하고 무조건 있어야 하는 코드
- html 문서라고 브라우저에 알려주는 역할
- 버전마다 선언 방식이 다르지만 html5 버전에서 쓰이는 방식

```html
<html lang="kr">
  ...
</html>
```

- 본격적인 태그의 시작
- 사용하는 주 언어를 정의 (접근성의 문제)
- 딱 한 번만 와야함

### 3강 Head와 Body에 들어갈 요소

```html
<head>
    <meta charset="urf-8">
    <title>멋쟁이 사자처럼<title>
</head>
```

- meta : 문서에 관한 정보를 담음
- charset~ : 쓰이는 한글이 깨지지 않도록 도와주는 역할
- title : 브라우저 탭의 제목을 달아주는 역할

```html
<body>
  ...
</body>
```

- head 태그 바로 뒤에 위치함
- 안에는 웹 페이지를 구성할 내용이 들어감

### 4강 레이아웃과 관련된 기본 태그

#### 레이아웃(Layout)

<img src="https://images.velog.io/images/nathan29849/post/ff1f712a-742e-4615-a8e3-3aacfd914594/image.png" width="40%">

- 이런 요소들이 많이 쓰이다보니 html 5부터는 아예 태그로 만들어 역할을 명확히 구분하였음.
- 이런 태그들을 아울러 시맨틱 태그(Semantic tag)라고 함

  - 의미를 가지고 있는 태그
  - 나눠진 구획의 기능을 태그만 보고도 유추가 가능함

- header : 소개나 제목
- nav : 페이지 이동에 내한 내용이나 메뉴
- section : 기준에 맞게 구간을 나눔
- article : 주 내용
- aside : 주변 내용 (ex. 광고)
- footer : 회사 정보나 추가 정보 제공

**BUT** 태그를 쓴다고 위치가 적용되는 것이 아니라 CSS를 통해 위치를 만들어주어야 한다!!
