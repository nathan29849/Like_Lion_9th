# 2. HTML & CSS

## Chapter 7. 폼 태그

### 1강 form

\<form> 태그

- 폼에 포함되는 다양한 입력 양식 태그들을 감싸줌
- 굳이 따지자면 우리가 사용할 '신청서 종이'라고 생각하면 편함

폼 태그의 속성

- `action` : 데이터에 보낼 URL을 지정
  - 즉 해당 데이터를 처리할 웹 서버 URL을 담고 있는 것.
- `method` : 보내는 방식을 지정
  - method = "get"
  - method = "post"

---

#### GET vs POST (매우 중요🚨)

두 방식 모두 기능은 동일함.
둘 다 브라우저에서 폼에 입력한 데이터를 서버로 보내는 기능을 한다.
하지만 **보내는 방식** 에서 차이를 보임.

먼저 우리가 서버로 데이터를 보낼 때에는 조금 특별한 방식으로 데이터를 보낸다.
그 메시지를 `HTTP Request Message`라고 한다.

<img src="https://images.velog.io/images/nathan29849/post/a2700572-bb54-43f2-88a8-7a553bfa6f38/image.png" width="20%">

이런 식으로 생겼으며, 크게 Header와 Body 두 부분으로 나뉜다.

- Header : 목적지가 되는 URL을 적어서 보냄.
  - `GET` : form에 입력한 데이터를 URL 끝에 붙여 눈에 보이는 형태로 보내게 됨.
    - 엽서카드 같다고 생각하면 됨(주소와 내용이 오픈된 상태)
  - `POST` : `GET` 방식과 달리 URL 끝에 붙이지 않고, 보이지 않도록 메시지의 Body 부분에 숨겨서 보낸다.
    - 편지라고 생각하면 됨(주소는 바깥에, 내용물은 안에 있는 상태)

<br/>

#### GET, POST 둘을 따로 쓰는 이유

`GET`, `POST` 방식은 그 특징 때문에 쓰임과 목적에 차이가 있음.

`GET` : "받다" - 서버에 데이터를 요청하고 받아온다.

- 즉, **데이터 조회**만을 목적으로 할 때 주로 쓰인다.
- ex. 검색 창에 검색 -> 우리가 검색한 결과가 주소창에 그대로 노출이 됨
  - https://search.naver.com/search.naver?query=멋쟁이사자처럼
- 이 점 때문에 우리가 검색한 결과를 다른 사람에게 쉽게 전달 가능하며, 즐겨찾기도 가능함.

`POST` : "게시하다" - 서버에 있는 데이터를 쓰거나, 수정, 삭제할 때 주로 사용한다.

- 만약, 게시물의 작성, 수정, 삭제가 URL 주소에 공개가 된다면, 악용되는 사례가 많아질 것임.
- 따라서 로그인, 게시물 작성 등은 `POST` 방식이 사용됨.

---

### 2강 input

#### \<input> 태그

- 사용자에게 입력을 받기위해 사용되는 태그, 빈 태그 (종료 태그가 없음)

- 다양한 종류의 속성이 존재
  <img src="https://images.velog.io/images/nathan29849/post/625de582-6ebd-4d74-84f6-7de2c5974133/image.png" width="50%">

- 이는 type이라는 속성이 존재하기 때문

  - \<input type="text">
  - \<input>태그의 종류를 결정

- name 속성

  - \<input type="text" name="id">
  - \<input>태그 중 같은 타입과 구분되는 이름을 결정
  - 서버로 데이 터를 전송할 때 입력받은 데이터를 구분하기 위해서 name속성을 key로, 입력받은 데이터를 value로 전송하게 된다.
  - 따라서 name속성은 전송하는 데이터를 구분하여 주는 매우 중요한 역할을 함!

- placeholder = "아이디를 입력하세요" 속성

  - input에 아무 값도 입력되지 않았을 때 나타나는 텍스트

- value="nathan29849" 속성
  - 실제 할당되는 값, 우리가 데이터를 넣으면 이 속성에 들어감.
  - 초기 값처럼 둘 수 있다.
  - input태그에 입력하는 데이터는 사실상 value에 할당하는 데이터 값과 동일한 의미임.

### 3강 \<label> 태그

해당 라벨을 클릭 시 \<input>태그가 활성화 됨

라벨 태그의 for과 input 태그의 id가 일치된다.

```html
<label for="userid">아이디 : </label>
<input type="text" id="userid" name="id" placeholder="비밀번호 적어줘" />
```

<br/>

##### \<div> 태그

태그들을 구분 짓고 나누기 위해 사용되는 태그 (division의 약자, 분할의 뜻)

아무것도 나타내지 않음, 그저 구분 짓기 위한 목적

<img src="https://images.velog.io/images/nathan29849/post/73457479-148f-4a66-bbe8-5bba8f8b72cc/image.png" width="50%">

위의 아래 처럼 \<div>태그는 한 페이지를 차지하게 된다.

<br/>

#### 4강 \<select> 태그

여러 개의 선택지를 제시하고 싶을 때 쓰인다.

- \<select> 태그는 name이라는 속성을 반드시 가져야 하며, \<input>태그의 name 속성과 동일하게 작동한다.

- \<option> 태그는 value라는 속성을 반드시 가져야 하며, \<input>태그의 value 속성과 동일하게 작동한다.

- select 태그의 name과 option 태그의 value가 서로 짝을 이룬다.(key:value)

```html
<div>
  <label for="gender">성별 :</label>
  <select name="gender" id="gender">
    <option value="male">남자</option>
    <option value="female">여자</option>
  </select>
</div>
```

<br/>

##### \<textarea> 태그

한 번에 많은 글을 입력받을 때 사용

```html
<label for="textarea">텍스트 입력: </label>
<textarea name="textarea" id="textarea" cols="30" rows="10">초기 값</textarea>
```

- cols : 가로 텍스트 수
- rows : 줄 수

#### 5강 button

input 태그의 버튼 타입과 동일하게 버튼을 생성함

```html
<button type="submit">제출</button> <br />
<button type="reset">초기화</button>
```
