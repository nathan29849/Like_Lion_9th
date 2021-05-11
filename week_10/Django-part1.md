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

- pip를 이용하여 장고 설치하기

```
$ pip install django    // Django 설치
$ pip freeze            // pip로 설치된 것들의 목록을 보여줌 (with Version)
```

- pip란?
  파이썬으로 작성된 패키지 소프트웨어를 설치 및 관리하는 패키지 관리 시스템이다.

<img src="https://images.velog.io/images/nathan29849/post/83225fed-dbd5-4633-b140-22bf0926ebb4/image.png" width="700px;">

- 장고를 설치하고, pip freeze로 다운로드를 확인한 모습이다.
  <br/><br/>

- 아래의 명령어를 입력하여 장고 프로젝트 생성하기

```
$ django-admin startproject [프로젝트명]
```

<img src="https://images.velog.io/images/nathan29849/post/a414a3dc-9386-44df-81ed-aa8d772bbd48/image.png" width="200px;">

- 다음과 같이 프로젝트 폴더와 함께 하위 파일들이 생성됨을 알 수 있다.

  ⚠️ 장고 프로젝트를 생성하면 동일한 이름의 하위 폴더(myproject)가 하나 더 생김에 주의하자. ⚠️

#### 웹 서버 구동하기

- 서버를 실행시키는 명령어를 통해 서버를 돌린다.

```
$ python manage.py runserver
```

<img src="https://images.velog.io/images/nathan29849/post/5f6524f0-2b8d-4511-b54b-a12ebc9fa669/image.png" width="700px;">

- ⛔️ can't open file \'manage.py\': [Errno 2] No such file or directory
  라는 에러가 뜰 것이다.

- 이는 manage.py가 `Django` 폴더에 있지 않고, 그 안의 `myproject`의 하위폴더에 있기 때문이다.

- 따라서 myproject로 이동 후 다시 runserver를 실행하여 준다.

```
$ cd myproject
$ python manage.py runserver
```

<img src="https://images.velog.io/images/nathan29849/post/0c097437-cf77-480e-a817-92009bf0bd3c/image.png" width="700px;">

- 런서버로 실행시킨 모습이다. 위의 이미지에서 보이는 `http://127.0.0.1:8000`의 url을 타고 들어가면 다음의 이미지를 볼 수 있다.

<img src="https://images.velog.io/images/nathan29849/post/a06bda68-fd42-4181-acb4-ec422a16bd37/image.png" width="450px;">

- 위 이미지처럼 로케트 모양이 보인다면 장고로 웹 서버 구동이 성공한 것이다!

---

### 📒 Part 1 내용정리

1. django 폴더를 만든다.
2. 가상환경을 만들고 실행한다.
3. pip를 통해 django를 설치한다.
4. django-admin을 통해 프로젝트(myproject)를 만든다.
5. 서버를 돌리려는데, manage.py가 없는 경로에서 명령어를 실행시켜 실패했다.
6. cd 명령어를 통하여 터미널 상의 경로를 바꿔주고 서버 구동을 성공했다.
