# 모멘텀 클론 공부 정리 노트 (JAVASCRIPT)

### 2.0 Your First JS Project

<pre>
자바스크립트는 css처럼 단독으로 브라우저에서 사용한 것이 아님.
크롬 - 개발자 도구 - 콘솔 을 통해 자바스크립트 입력 가능
자바스크립트는 현재 프론트, 백, ai, 게임 등 여러가지 분야에서 사용 가능.   
자바스트립트는 html 바디 태그 아래에 <script src="ㅁㅁㅁ.js"></script> 이런 식으로 작성한다.
</pre>

### 2.1 Basic Data Types

<pre>
데이터 타입에는 integar(1, 2 등), float(1.1 , 2.5 등), text("hello"),   
string("my name is wowba")등이 있다. 숫자와 문자.
</pre>

### 2.2 Variables

<pre>
 Variables는 자바스크립트를 비롯한 모든 프로그래밍 언어에서 값을 저장하거나 유지하는 역할을 한다.   
 자바스크립트에서 이를 만들기 위해선 const(constant, 상수, 바뀌지 않는 값)를 사용한다.
 const a = 5; 상수의 이름은 공백이 있을 수 없다. 공백일경우 문자를 대문자로 바꾼다   
 const veryLongVariableName = "wowba";
</pre>

### 2.3 const and let

 <pre>
 자바스크립트로 variable은 const 말고 let 으로도 만들 수 있다. let a = 5;
 둘의 차이점은 const는 값이 변경 될 수 없다. 하지만 let은 새로운걸 생성할 수 있다.
 let abc = "wowba"; abc = "king"; 이렇게 하면 값이 바뀐다.   
 대부분 const를 기본으로 사용하고 업데이트 해야할 경우에만 let을 쓴다.
 var은 지금 쓰지 않는다.
 </pre>

### 2.4 Booleans

<pre>
Boolean은 true 아니면 false를 값으로 가지는 데이터 타입이다.
const amISmart = true; const amIUgly = false;   
자바스크립트의 데이터 타입에는 '존재하지 않음', '정의되지 않음' 등을 의미하는 것이 있음   
그중에 하나는 null. 아무것도 없음을 의미. 이 값은 절대 자연적으로 나오지 않는다. 의도적으로 표현하는 것.
undefined는 값이 아예 없는것. null은 null 이라는 값이 있지만, undefined는 값이 아예 없는것이다.
어떤 variable이 존재 하지만, 값은 정해지지 않았을 때 나오는 것.
</pre>
