# 2. HTML & CSS

## Chapter 4. 링크 태그

### 1강~2강 링크 태그

- 하이퍼텍스트 : 기존의 텍스트와 달리 링크를 통해 사용자가 원하는 순서로 한 정보에서 다른 정보로 접근할 수 있는 텍스트

- 하이퍼 링크 : 하이퍼 텍스트를 가능케하는 가장 중요한 도구

- 대표적인 하이퍼 링크 태그 : \<a>태그

  - anchor, 닻을 의미함. ~ 연결된 모습이 마치 닻을 내린 모습과 유사

- 속성(Attributes) : 태그에 대해 추가적인 정보 제공 (HTML의 모든 태그는 속성을 가질 수 있음.)

```html
<a> 키 = "값"</a> // 이런식으로 써준다. 여러 속성이 있다면 띄어쓰기를 통해
구분을 지어준다.
```

- a 태그의 속성으로는 링크주소가 들어가는데 이를 `href="https://www.likelion.net"`를 통해 나타낸다.

  - href (hypertext reference) : 연결할 웹 사이트 주소를 담는다.
    하지만 a 태그에서 속성 값으로 `href`만을 쓰지는 않는다.

- target 속성 : 클릭으로 링크를 열 때 어디에 오픈할 것인지 정하는 속성

> target="\_self" // 현재 탭에서 링크를 열기

> target="\_blank" // 새 탭 혹은 새 창에서 링크 열기

### 3강 경로

- 경로(Path) : 목적지까지 가는 모든 길

- **URL(Uniform Resource Locator)** : 주소(Address) + 경로(Path)

  - 인터넷에서 HTML페이지, CSS문서, 이미지 등 자원(Resource)의 위치를 나타낸다.
  - 크게 `절대 URL(Absolute URL)`과 `상대 URL(Relative URL)`로 나뉜다.

> - 절대 URL : 접근하는 최초 시작점부터 경유한 경로를 모두 기록하여 리소스의 위치를 나타냄
> - 상대 URL : 기준점을 기준으로 상대적인 경로를 기록하여 리소스의 위치를 나타냄
