# 2. HTML & CSS

## Chapter11. 텍스트와 관련된 Property

### 1강. 폰트와 관련된 프로퍼티

- font-size
- font-family : 우리가 원하는 폰트의 종류를 정할 수 있음
  - ex. font-family: 'Cute Font', Arial, cursive; (한 단어 이내의 폰트명은 따옴표를 적지 않아도 됨.)
  - 폰트를 지정할 땐, 보통 여러 개를 동시에 지정함.
    - 모든 이용자의 기기에 동일한 폰트가 없을 수 있기 때문임.
    - 앞에서부터 차례로 적용된다. (첫 번째 폰트가 없으면, 두 번째 폰트가 적용되는 방식)
    - OS와 기본 브라우저에 설치된 일반 글꼴을 맨 마지막에 두어, 문제 없이 실행하게 한다.
      - serif, sans-serif, cursive, fantasy, monospace 등이 대표적 일반 폰트이다.
    - 내 컴퓨터에 쓰는 폰트 파일만 사용가능한 것이 아닌, 폰트 파일을 함께 업로드하여 경로를 활용할 수도 있음. (ex. 웹 폰트 ~ 링크를 통해 폰트를 불러옴.)
      - `standard` : link 태그를 이용
      - `@import 방식` : font-family를 이용
- font-style
  - normal
  - italic
  - oblique(무조건 글자를 기울여 표현)
- font-weight : 폰트 굵기를 지정
  - bold
  - 100 ~ 900 까지의 숫자로도 사용가능 (400 : normal, 700 : bold)

##### 위의 내용들을 font Property 하나 만으로도 충분히 표현할 수 있음(띄어쓰기로 구분함)

```css
#main {
  font: oblique 900 35px "Noto Sans KR", monospace;
}
```

### 2강. 텍스트 정렬과 관련된 속성

- text-align : 텍스트를 좌, 우, 중앙 정렬해 줌
  - ex. h1{text-align: center;}
  - `본인 요소 기준` 자체로 정렬이 됨
- line-height : 문장 사이의 간격을 조정함 (행간 조절)
  - 값으로는 단위가 있거나 없는 숫자 값을 넣어준다.
    - ex_1. h1{line-height: 24px;}
    - ex_2. h1{line-height: 2;} -> 32px : 해당 요소의 폰트 사이즈를 기준으로 n배 해준다.

실제 CSS에서 line-height가 작동하는 원리

- <img src="https://images.velog.io/images/nathan29849/post/87f4cb6c-3452-45fd-8389-c96d5c0f2005/image.png" width="30%">

- latter-spacing : 글자와 글자 사이의 간격을 조정함 (자간 조절)
  - ex. h1{latter-spacing: 2px;}
- text-indent : 문장 시작 부의 들여쓰기를 지정
  - ex. h1{text-indent: 5px;}
