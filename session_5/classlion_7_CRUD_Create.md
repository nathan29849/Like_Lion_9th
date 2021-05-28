# CRUD 중 Create

- **CRUD**

> C : Create
> **R : Read**
> U : Update
> D : Delete

---

오늘 배울 함수

- new: new.html을 보여줌
- create: new.html에서 받은 정보를 데이터베이스에 저장

## new 함수 만들기

### 1. views.py

### 2. templates > new.html

### 3. urls.py

### 4. home.html & new.html 보완

#### 여기서 잠깐 (get vs post)

- GET

  - 데이터를 얻기 위한 요청
  - **데이터가 url에 보임** (주소창에 직접 보이는 이미지 첨부하기)

- POST
  - 데이터를 생성하기 위한 요청
  - **데이터 url 안보임**
  - csrf 공격 방지

#### 여기서 잠깐 (csrf_token)

- CSRF 공격이란?

  - 사이트간 요청위조라고 불림(또는 크로스 사이트 요청위조 Cross-Site Request Forgery, CSRF or XSRF)
  - 웹사이트 취약점 공격의 하나로, 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위(수정, 삭제, 등록 등)를 특정 웹사이트에 요청하게 하는 공격을 말함.

- CSRF 사용법
  - form 태그 내에서 `method="post"`를 사용할 때, 아래 `{%csrf_token%}`이라는 것을 사용 해 주어야 한다.
