# 2. HTML & CSS

## Chapter12. 박스모델

### 1강. 박스 모델 개념

HTML의 모든 요소는 상자(Box)의 형태를 가진다.
HTML은 태그와 컨텐츠로 이루어져 있음
브라우저에는 태그 없이 컨텐츠만 출력이 된다.

브라우저에서 출력되는 이 컨텐츠가 사각형의 박스 형태로 출력이 된다.
<br/>
<img src="https://images.velog.io/images/nathan29849/post/d7524a77-c269-4b5e-a66d-a098de6ef913/image.png" width="40%">

브라우저 상의 컨텐츠들을 올바르게 배치하기 위해서는
박스 형태에 대한 이해가 반드시 필요하다.
<br/>
<img src="https://images.velog.io/images/nathan29849/post/4821fb4b-271f-40de-8e0c-c02427315f2c/image.png" width="30%">

이 박스 형태는 컨텐츠에서 끝나는게 아님.
컨텐츠를 감싸고 있는 다른 것들이 또 있다.

#### Box Model

- content : 실제 내용을 담고있는 부분(이미지나 텍스트 등)
- border : content를 감싸는 테두리 경계선
- padding : content와 border 사이의 여백
- margin : border 밖의 여백
  <br/>
  <img src="https://images.velog.io/images/nathan29849/post/322df016-73be-4af9-a1fb-1e60df4f0b33/image.png" width="30%">

`box-sizing` 속성을 사용해 이 방식을 바꿀 수 있습니다.

`content-box`는 기본 CSS 박스 크기 결정법을 사용합니다. 요소의 너비를 100 픽셀로 설정하면 콘텐츠 영역이 100 픽셀 너비를 가지고, 테두리와 안쪽 여백은 이에 더해집니다.
`border-box`는 테두리와 안쪽 여백의 크기도 <mark>요소의 크기로 고려합니다.</mark> 너비를 100 픽셀로 설정하고 테두리와 안쪽 여백을 추가하면, 콘텐츠 영역이 줄어들어 총 너비 100 픽셀을 유지합니다. 대부분의 경우 이 편이 크기를 조절할 때 쉽습니다.

### 2강. Content와 Border

#### 2-1. Content

보통 요소의 크기를 정의할 때 height, width를 쓰는데, 이는 content의 크기를 의미한다.

content의 크기를 지정해 놓고, content 내부의 양을 늘리게 되면, 내용이 content를 벗어나게 된다.
<br/>
<img src="https://images.velog.io/images/nathan29849/post/177b08a9-a71d-4420-b81c-7f39f3c6df90/image.png" width="30%">

(참고) :

- overflow: hidden; 이 속성과 값을 이용하면 content 내부의 양이 넘치더라도 넘치는 부분을 안보이게끔 할 수 있다.
- overflow: scroll; 을 사용하면 넘치는 내용을 스크롤을 내려 확인할 수 있게 된다.

#### 2-2. Border

크게 3가지의 Property를 이용해서 사용한다.

- 1. border-style
  - ex. border-style: dashed solid dotted double; (띄어쓰기로 구분 가능. 시계방향으로 12시 방향부터 상, 우, 하, 좌 순으로 돌아가며 적용됨)
- 2. border-width
  - ex. border-width: 2px 8px 3px 7px;
- 3. border-color
  - ex. border-color: red blue yellow green;

위의 속성을 한꺼번에 사용할수도 있다.
ex. border: 4px solid red;
(But 각 속성별로 하나씩만 되는듯 - 실험해봄.)

- 4. border-radius : 크기 값을 이용하여 경계선을 둥글게 표현할 수 있다.(반지름의 크기를 적용시키게 되는 것.)
  - ex. border-radius: 12px;
  - 4 방향으로 나누어 적용도 가능함.
    - border-top-left-radius
    - border-top-right-radius
    - border-bottom-left-radius
    - border-bottom-right-radus
  - 타원형도 적용할 수 있음.
    <br/>
    - <img src="https://images.velog.io/images/nathan29849/post/18a794e5-babe-4a13-8d4a-0c1501a9803f/image.png" width="30%">
  - 한 번에 적용하고 싶을 때는 / 를 이용하여 구분지어주면 된다.
    - ex. border-radius: 100px 50px 0 0 / 0 0 50px 100px; (첫번째 자리는 왼쪽 상단을 의미하며 / 를 통해 타원형의 반지름을 구분한다.)

### 3강. padding과 margin

padding: 24px 12px 33px 12px; 처럼 네 방향을 따로 정할수도 있음.

요소의 배경 색을 지정할 때 padding까지 색이 지정되는 것을 알 수 있다.

##### 마진 상쇄(Margin Collapse)

위 아래의 다른 요소에서 각각 margin을 적용하게 되면, 두 margin이 함께 공존하지 않게 되는 현상

둘 중 더 큰 쪽 margin을 따라가게 된다.
<br/>
<img src="https://images.velog.io/images/nathan29849/post/683cfcfa-ffd0-4c3e-96cf-694b7cb85fa0/image.png" width="30%">

##### Box Sizing

요소에 width와 height를 적용하면 기준은 항상 content의 크기이다.
그렇기 때문에 다른 요소와 배치할 때 종종 크기 값을 어떻게 해야할지 고민이 많다.
여기에 도움을 주는 것이 box-sizing 속성이다.

기본적으로 `box-sizing: content-box;`를 쓴다.
content-box의 크기를 기준으로 한다는 말이다.

- width(height) = content size

`box-sizing: border-box;`는 border의 두께까지 포함된 크기를 전체 크기로 정함.

- width(height) = content size + padding + border

```css
#top {
  width: 200px;
  height: 100px;
  background-color: red;
  box-sizing: border-box;
  padding: 20px;
}
```

이렇게 이미 content의 크기가 200px\*100px일때 padding을 20px주면, 160px\*60px으로 content 크기가 축소된다.
상하좌우로 각각 20px씩 padding값이 늘어났기 때문.
(`box-sizing: content-box;`일때는 content 크기는 변화 없음.)
