# Django

일자 : `2021.05.10(월) ~`

## Part 1. Django로 웹 서버 실행시키기

목차

> - 가상환경 생성 및 실행
> - 웹 서버 구동

### 1. 기본 세팅

작업을 원하는 곳에서 `Django` 이름의 폴더 만들기

```
$ mkdir Django
```

#### 가상환경 생성 및 실행

##### 가상환경이란?

> - 개발을 하는 데 필요한 소프트웨어의 버전과 종류가 다르기 때문에 각종 충돌이 일어나는데, 각각의 독립된 개발 환경을 만들어 모듈과 패키지들을 관리함으로써 보호하는 가상적인 공간을 <strong>\"가상환경\"</strong> 이라고 한다.
> - 장고로 프로젝트를 진행할 때는 반드시 <strong>\"가상환경\"</strong>을 켜주고 작업을 해야한다는 점을 명심하자.

- 아래의 명령어를 입력하여 가상환경을 `생성`한다.

```
$ python -m venv [가상환경명]       // Windows
$ python3 -m venv [가상환경명]      // MacOS
```

- 아래의 명령어를 통하여 가상환경을 `실행`한다.

```
$ source [가상환경명]/scripts/activate  // Windows
$ source [가상환경명]/bin/activate      // MacOS
```

<img src="https://images.velog.io/images/nathan29849/post/6ce38f4c-be3b-4fc1-be23-2ac23697bb54/image.png" width="700px;">

- 위의 노란색 부분과 같이 가상환경이 실행되면 알 수 있게끔 창에 뜬다.

### 2. Django를 이용한 웹 서버 구동

#### 장고 설치 및 프로젝트 생성

```
$ pip install django    // Django 설치
$ pip freeze            // pip로 설치된 것들의 목록을 보여줌 (with Version)
```

- pip란?
  파이썬으로 작성된 패키지 소프트웨어를 설치 및 관리하는 패키지 관리 시스템이다.

<img src="https://images.velog.io/images/nathan29849/post/83225fed-dbd5-4633-b140-22bf0926ebb4/image.png" width="700px;">
