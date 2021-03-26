# 2. HTML & CSS

(요소의 위치를 정렬하기 위한)

## Chapter14. 위치와 관련된 프로퍼티

기존의 display나 position을 이용한 웹의 레이아웃 구성은 생각할 것이 많고, 한계가 어느정도 존재하기 떄문에 개발하기가 어려웠음.

이를 위해 CSS에서는 flexbox방식이 추가됨.

### 1강. flexbox

크기가 불분명한 요소들에 대해서도 효율적으로 동작하기 때문에 자주 이용된다.

flex box는 부모 요소인 flex container와 자식 요소인 flex item으로 구성되어 있다.

flex box를 사용하고자 한다면, 정렬하려고 하는 부모 요소에 `display: flex;`를 추가하여 준다.
<br/>
<img src="images.velog.io/images/nathan29849/post/753c6d0b-5b96-4ed4-bbb2-a68f9118e09d/image.png" width="50%">

#### ❗️❗️flex box의 핵심❗️❗️

기본적으로 가로 혹은 세로로 **정해둔 방향**을 통해 프로퍼티들을 정렬한다.

`flex Container`와 `flex item`에서 사용할 수 있는 프로퍼티는 각각 다르다.
<br/>
<img src="https://images.velog.io/images/nathan29849/post/181ab78e-52f4-4e6a-98a9-14e1bec7ac8b/image.png" width="40%">

##### 부모 요소 (flex Container)

- flex-direction
  - flex container 안의 item들의 기본 방향을 정함.
  - 따로 속성을 정해주지 않으면 기본값인 `row`가 들어감.(왼쪽->오른쪽 으로 정렬)
    - row, row-reverse, column, column-reverse 가 있다.
      <br/>
      <img src="https://images.velog.io/images/nathan29849/post/26d046e6-42e6-4a14-a93e-b934ef1353a2/image.png" width="30%">
- flex-wrap
  - flex 아이템이 flex 컨테이너를 벗어 났을 때 줄을 바꾸는 속성
  - 만약 속성을 주지 않으면 `flex-wrap: norwrap`으로 적용이 된다.
  - `flex-flow: row wrap;`을 통해 `flex-direction`과 `flex-wrap`을 동시에 사용할 수 있다.(순서대로 써주면 됨)
- justify-content
  - flex-direction으로 정해진 방향을 기준으로 하여 **수평**으로 item을 정렬하는 방법을 정함 (flex-diraction과 동일한 방향이라고 생각하면 됨)
    <br/>
    <img src="https://images.velog.io/images/nathan29849/post/c2935b1d-cbff-47c1-99f2-467d24974497/image.png" width="40%">
    <img src="https://images.velog.io/images/nathan29849/post/2a30e602-8f7a-40a6-ac75-25bfd08ecb00/image.png" width="40%">
    <img src="https://images.velog.io/images/nathan29849/post/424cd105-c4f2-4430-b5d7-72d5d4bc9d61/image.png" width="40%">
    - space-around : 아이템을 기준으로 좌우 간격을 동일하게 맞춤
    - space-between : flex의 시작과 끝에 각각 요소를 먼저 배치하고 남은 자리에 일정 간격으로 나머지 요소를 배치한다고 생각하면 됨
- align-items

  - justify-content와는 조금 다름
  - flex-direction으로 정해진 방향을 기준으로 하여 **수직**으로 item을 정렬하는 방법을 정함
    <br/>
    <img src="https://images.velog.io/images/nathan29849/post/48fa31fb-09d0-467a-ab36-cd85e2259f7d/image.png" width="40%">
    <img src="https://images.velog.io/images/nathan29849/post/eb8380e1-e7f7-4b15-a699-642977b3c4b9/image.png" width="40%">
    <img src="https://images.velog.io/images/nathan29849/post/aed7b23f-14c6-468a-a8d6-966363578163/image.png" width="40%">
    <br/>

    - baseline: item의 안에 있는 글꼴을 기준으로 해서 flex item들을 정렬함.

- align-content
  - flex-direction으로 정해진 방향을 기준으로 수직으로 **여러 줄인** item을 정렬하는 방법을 정함.
    <br/>
    <img src="https://images.velog.io/images/nathan29849/post/39fbd59b-b9f2-4973-9cd8-6c5093755abd/image.png" width="40%">
    <img src="https://images.velog.io/images/nathan29849/post/3222922d-6c8a-4c13-8e31-7fe8cf7d9b98/image.png" width="40%">

##### 자식 요소 (flex item)

- flex-grow
  - flex 아이템의 확장과 관련된 속성, 기본 0 (단위 없는 숫자 값을 사용함.)
  - 원래 크기와는 상관없이 flex 컨테이너를 채우기 위해 해당 값을 적용한 flex item이 커지게 됨(상대적인 크기)
    <br/>
    <img src="https://images.velog.io/images/nathan29849/post/c11f169a-dce4-4593-b844-dbc41fc9e427/image.png" width="40%">
    <img src="https://images.velog.io/images/nathan29849/post/e5c1a471-5257-41e7-9aec-431ea37cfc66/image.png" width="40%">
    <br/>
    - 모든 요소들의 너비를 제외하고 남는 여백의 길이를 grow 수치비만큼 등분하여 나눠갖는다.
      ex. flex-container의 너비가 300\*300이고, 60\*60 너비의 요소가 3개 있다고 치자.
      그리고 각 요소들의 flex-grow 값은 1, 2, 0이라면, 80, 160, 60의 가로길이를 갖는 것이 아니라, 300-(60\*3) = 120을 grow 수치비 만큼으로 등분해서 총 60+40, 60+80, 60+0
      즉, 100, 120, 60의 가로길이를 갖게 되는 것이다.
- flex-shrink
  - flex 아이템의 축소와 관련된 속성, 기본 1 (단위 없는 숫자 값을 사용함.)
  - 만약 속성 값이 0일 경우 flex-container의 크기가 flex-item의 크기보다 작아져도, item의 크기가 줄어들지 않고, 원래 크기를 유지한다.
  - 속성 값이 1 이상일 경우에, container 크기가 작아졌을 때 flex item의 크기가 컨테이너에 맞게 줄어든다.
    <br/>
    <img src="https://images.velog.io/images/nathan29849/post/94c89bd5-114e-4a0b-80f8-b444e67170e8/image.png" width="40%">
  - 두 개의 속성이 있을 때도 마찬가지로 비율에 맞춰 줄어듦  
    <br/>
    <img src="https://images.velog.io/images/nathan29849/post/38ba2082-5ae1-4ac2-8137-dcea24e2926f/image.png" width="40%">
    - 모든 요소들의 너비를 제외하고 남는 여백의 길이를 shrink 수치비만큼 등분하여 나눠 빼준다.
      ex. flex-container의 너비가 150\*150이고, 60\*60 너비의 요소가 3개 있다고 치자.
      그럼 30만큼 item의 길이가 더 길다.
      그리고 각 요소들의 flex-shrink 값은 0, 1, 2이라면, 그 남은 30을 1:2의 비율로 나눠서 각각의 요소에서 빼준다.
      즉, 60, 50(=60-10), 40(60-20)의 가로길이를 갖게 되는 것이다.
- flex-basis

  - flex 아이템의 기본 크기를 결정함, 기본값은 auto. (단위를 반드시 써주어야 한다.)
    <br/>
    <img src="https://images.velog.io/images/nathan29849/post/a79955cd-510c-486b-8ed1-ff4ceece2d01/image.png" width="40%">

- flex

  - flex-grow, flex-shrink, flex-basis의 축약형

    - `flex: 1 0 auto;` : flex-grow가 켜진 상태
    - `flex: 0 1 auto;` : flex-shrink가 켜진 상태

    <br/>

    <img src="https://images.velog.io/images/nathan29849/post/984b8cb2-360e-40de-b5bd-f8d8ff303686/image.png" width="40%">
    위와 같이 개발자 도구에서도 확인이 가능하다.

### 2강. flexbox를 활용한 간단한 레이아웃

    <img src="" width="40%">
