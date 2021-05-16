# 2. HTML & CSS

## Chapter15. 상속과 우선순위

### 1강. 상속

내가 설정한 적이 없는데, 가끔 HTML에 inline으로 스타일이 입혀져 있는 경우가 있다. 바로 **상속**때문에 일어나는 일이다.

#### 상속이란?

- 조상 요소에 적용된 CSS 프로퍼티를 자식 혹은 후손 요소가 물려받는 것을 말함.

#### But 모든 CSS 프로퍼티가 상속되는 것은 아님.

- width, height, margin, padding, display등 상속이 되지 않는 것도 많다.

- https://www.w3.org/TR/CSS21/propidx

  - 해당 사이트에서 자주 쓰는 프로퍼티의 상속 여부를 파악할 수 있다.

- 상속되지 않는 프로퍼티를 상속받길 원한다면 `:inherit;`을 써준다.
  - ex. margin: inherit;

### 2강. 우선순위

#### Cascading

- CSS 적용 우선순위를 말함

#### 규칙

1. 중요도

- CSS가 어디 선언 되어 있는지에 따라 우선순위가 달라짐
  - \<head> 태그 내의 \<style> 태그
  - \<head> 태그 내의 \<style> 태그 내의 @import문
  - \<link> 태그로 연결된 CSS
  - \<link> 태그로 연결된 CSS 내의 @import문
  - 브라우저 디폴트 스타일시트

2. 명시도

- !important (세미콜론; 을 찍기전에 써주면 최우선 순위를 가짐)
- 인라인 스타일(inline style)
- 아이디 선택자(id selector)
- 타입 + 클래스 선택자를 쓰면 클래스 선택자만 쓰는 것보다 더 높은 순위가 됨
- 클래스, 속성, 가상클래스 선택자(class, attribute, pseudo class selector)
- 태그 선택자(type selector)
- 전체 선택자(universal selector)
- 상속(inherit)

3. 선언순서

- **나중에** 선언된 스타일이 우선 적용
