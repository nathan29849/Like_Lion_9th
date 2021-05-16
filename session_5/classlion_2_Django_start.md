# Django Framework

수업 목표

> 1.  Django에 대해 알기
> 2.  Django 프로젝트 생성

## 프레임워크란?

- 개발을 하는 데에 있어 자주 사용하고 반복적으로 사용하는 기능들을 미리 만들어 놓아 개발하기 편하게 만들어 놓은 것
- 프레임워크 = 라이브러리?
  - 프레임워크는 라이브러리들로 이루어진 라이브러리
  - 프레임워크는 라이브러리에 비해 구조가 잡혀있어 작업 속도가 빠름
  - 개발 현장에선 한 프로젝트에 여러 라이브러리와 프레임워크를 동시에 사용한다.

## 가상환경

- 프로젝트 여러 개를 진행할 때를 대비해서 설정하는 것

```
$python -m venv [가상환경명]
$source [가상환경명]/bin/activate
$pip install django
$django-admin startproject [프로젝트 이름]
$python manage.py runserver
```
