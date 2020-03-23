# kakao-clone

---

### 베이스 코드

-   https://github.com/nomadcoders/kakao-clone-v2

---

### 사용 사이트

| 이름             | 설명(URL)                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| W3schools        | https://www.w3schools.com/css/css3_transitions.asp                                                |
| MDN              | https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY                    |
| ColorZilla       | https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en       |
| PageRulerRedux   | https://chrome.google.com/webstore/detail/page-ruler-redux/giejhjebcalaheckengmchjekofhhmal?hl=en |
| Prettier         | https://prettier.io/                                                                              |
| ESLint           | 코드에서 발견 된 문제 패턴을 식별하기위한 정적 코드 분석 도구                                     |
| Emmet            | 에밋은 HTML, XML, XSL 문서 등을 편집할 때 빠른 코딩을 위해 사용하는 플러그인이다.                 |
| Font Awesome     | 무료 아이콘 사이트 (적용예시 https://www.w3schools.com/icons/fontawesome5_intro.asp )             |
| Gogle font       | https://fonts.google.com/                                                                         |
| Reset.css        | https://meyerweb.com/eric/tools/css/reset/​                                                       |
| Uigradients      | https://uigradients.com/#Memariani                                                                |
| Pinterest        | https://www.pinterest.co.kr/                                                                      |
| Dribbble         | https://dribbble.com/                                                                             |
| Flaticon         | https://www.flaticon.com/free-icon/girl_163847?term=profile&page=1&position=57                    |
| PNG->JPG         | https://png2jpg.com ko/                                                                           |
| box-shadow 참고  | https://www.tabmode.com/homepage/box-shadow.html                                                  |
| 개발환경 참고    | https://poiemaweb.com/js-hello-world                                                              |
| open weather api | https://openweathermap.org/api                                                                    |

---

### 개발 내용

-   개발 도구: visualCode
    사용언어:javascript,css,html

1. 노마드코딩의 클론코딩수업으로 기본 틀 만들기

-   html (3/4)
-   css (3/5)
-   animations (3/6)
-   4.개발기간: 3/3 - 3.20

2. 카카오톡 v8.7.8 기능 추가하기

-   친구 페이지: 한글로 변경 [O],실기간 시간[O]
-   채팅 페이지: 로컬스토리지 이용--> 응용해서 채팅 페이지도 적용[]:포폴 만들면서 총정리하면서 추가
-   검색 페이지: 디자인 [O] , 날씨 API [O] ,검색창 애니메이션 [O],채팅 입력 시 입력된 글 box 생성 기능[O],날씨 디자인 변경[O]
-   more페이지 : 디자인 변경(한글/버튼/캘린더 일정버튼) [O]
-   캘린더: 달력기능[O], 피벗슬라이드 [O] , 캘린더 일정 추가 기능 [0] , 왼쪽에서 나타나는 메뉴바 [O] ,시작날짜 입력 룰렛[0]

---

3. 카카오톡 v8.7.8 기능 추가하기 (2차 개발) 3/22 -3/31
   0

-   친구 페이지:
-   채팅 페이지: 채팅 페이지도 입력 box 추가[]
-   검색 페이지: 웹 스크랩하여 로드 하는 방식 []
-   more페이지 :
-   캘린더: 캘린더 일정 추가 기능(이전달/이후달) [O] , 일정별 색상 선택 적용[O],tag 선택시 내용 popup(추가/삭제/수정)[]

---

#### animation 참고

animation-timing-function

-   https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_animation-timing-function2
-   https://www.codingfactory.net/10942

#### 로컬스토리지

작은 자바스크립트 정보를 보관
키,값으로 저장
키 중보되면 나중것으로

사용자를 기억하는 방법
로컬르토리지는 string만
obj -> string 변환
JSON.stringify(toDos)

console.dir(event.target); /_event.tartget의 상세 내용 알수 있다_/
console.log()

#### API

다른 서버로 부터 손쉽게 데이터를 가져올 수 있는 수단

#### 검색 자료

| 메서드 or 기능                      | 설명(URL)                                                                                                                                                                                                                                                                                            |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ChildNode.remove()                  | https://developer.mozilla.org/ko/docs/Web/API/ChildNode/remove                                                                                                                                                                                                                                       |
| querySelector                       | https://javacpro.tistory.com/36                                                                                                                                                                                                                                                                      |
| addEventListent                     | addEventListenr에서 HTML 태그를 참조할 수가 없었기 때문에 null을 참조하게 됐고 에러가 발생 할 수 있음                                                                                                                                                                                                |
| window.onload vs \$(document).ready | https://blog.naver.com/PostView.nhn?blogId=u3478&logNo=60134222468                                                                                                                                                                                                                                   |
| overflow                            | http://webberstudy.com/html-css/css-2/overflow-float-clear/                                                                                                                                                                                                                                          |
| 화면 전체 만들기                    | https://codingbroker.tistory.com/56                                                                                                                                                                                                                                                                  |
| 스크롤-애니메이션(완전좋음)         | https://superkts.com/jquery/@scroll                                                                                                                                                                                                                                                                  |
| 스크롤 예제                         | https://recoveryman.tistory.com/121?category=597401,http://2nusa.blogspot.com/2016/10/jquery-mouse-wheel.html,https://ys87.tistory.com/entry/JQuery-마우스휠을-이용하여-좌우-스크롤하기?category=526517                                                                                              |
| 스크롤 -css                         | https://www.w3schools.com/cssref/tryit.asp?filename=trycss_text_white-space,https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_hor_scroll                                                                                                                                            |
| 모바일 크기조정 예시                | https://codepen.io/team/css-tricks/pen/,https://css-tricks.com/the-trick-to-viewport-units-on-mobile/vapjge                                                                                                                                                                                          |
| 모바일 화면 크기정리 사이트         | https://material.io/resources/devices/                                                                                                                                                                                                                                                               |
| calc                                | https://www.w3schools.com/cssref/tryit.asp?filename=trycss_func_calc ,https://codepen.io/chriscoyier/pen/uoxqs                                                                                                                                                                                       |
| css관해서 잘 정리됨                 | https://css-tricks.com/a-couple-of-use-cases-for-calc/                                                                                                                                                                                                                                               |  |  | https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ |
| input 조정 CSS                      | https://stackoverflow.com/questions/14946091/are-there-any-style-options-for-the-html5-date-picker ,http://jsfiddle.net/plan/V2Q58/ ,https://www.tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls/ ,https://stackoverflow.com/questions/18272497/styling-input-radio-with-css |
| 선택자                              | https://verdana1012.tistory.com/entry/CSS3-nthchildn-%EC%84%A0%ED%83%9D%EC%9E%90-%EA%B0%99%EC%9D%80%EC%A2%85%EB%A5%98%EC%9D%98-%ED%83%9C%EA%B7%B8%EB%A1%9C-%EA%B5%AC%EC%84%B1%EB%90%98%EC%96%B4-%EC%9E%88%EC%9D%84-%EB%95%8C-%EC%82%AC%EC%9A%A9                                                      |
| stop().animation()                  | https://webclub.tistory.com/461                                                                                                                                                                                                                                                                      |
| locatstorage 삭제                   | https://doc.arcgis.com/ko/maps-for-powerbi/get-started/clear-browser-storage.htm                                                                                                                                                                                                                     |
