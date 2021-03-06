# 1주차

일자 : `2021.03.15(월) ~ 2021.03.21(일)`

## 1. 웹 기초

> 우리는 웹 서비스로부터 원하는 것을 얻는다.

여기서 부터 웹 서비스의 기본적인 개념이 시작.

#### 웹 서비스는 클라이언트들의 요청에 응답하는 서버이다. [서버와 클라이언트 관계]

클라이언트(client)는 서버에 **request(요청)** 을 하고,
서버(server)는 클라이언트에게 **response(응답)** 을 한다.

즉, 웹 서비스를 만든다는 것의 의미는 **\"클라이언트들의 요청에 응답할 수 있는 서버로써 작동할 수 있는 프로그램을 만든다\"** 는 것이다.

<br/>

##### < Request의 종류 >

1. GET (= 갖다 줘)
2. POST (= 처리해 줘)

> ex)
> 나는 네이버를 켜고, = GET(네이버 갖다줘)
> 웹툰을 본 다음, = GET(웹툰 갖다줘)
> 재밌다고 댓글을 달았다. = POST(댓글 처리해(달아) 줘)

<br/>
서버 컴퓨터란?

- 신경써야할 것만 **확실히** 신경쓰는 컴퓨터!

<br/>

- 어떤 부분에 신경을..?

  - 1. 빠른 컴퓨팅 능력(빠른 연산 속도) 필요
  - 2. 24시간 켜져있어야 함
  - 3. 발열 냉각 장치
  - 4. 클라이언트 수 고려
  - 5. 보안 중요

<br/>

- 서버가 되기 위한 두 가지 방법
  1. 내 컴퓨터 = 서버 컴퓨터화 시키기
  2. 이 세상 어딘가의 서버 컴퓨터 빌리기 (웹 호스팅 방법)
  - 웹 서버 소프트웨어 예시 : Apache, MS-IIS 등
    - 로컬 환경 세팅
      - 설치가 까다로움
      - 추가적 지식이 요구됨
      - 한 번 익히면 자유로운 개발이 가능함
  - 웹 호스팅 업체 예시 : AWS Cloud9, Github 등
    - 웹 호스팅 업체 이용
      - 설치와 조작이 단순
      - 과금이 발생
      - 개발에 있어 제약이 존재함
      - 클라이언트의 수를 고려하지 않아도 됨

멋사에서는 Github을 이용하여 웹 서비스를 구현할 예정이다.

---
