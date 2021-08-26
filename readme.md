# 모멘텀 클론 공부 정리 노트 (JAVASCRIPT)

## Welcome To JavaScript

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
 var은 지금 쓰지 않는다.</pre>

### 2.4 Booleans

<pre>
Boolean은 true 아니면 false를 값으로 가지는 데이터 타입이다.
const amISmart = true; const amIUgly = false;   
자바스크립트의 데이터 타입에는 '존재하지 않음', '정의되지 않음' 등을 의미하는 것이 있음   
그중에 하나는 null. 아무것도 없음을 의미. 이 값은 절대 자연적으로 나오지 않는다. 의도적으로 표현하는 것.
undefined는 값이 아예 없는것. null은 null 이라는 값이 있지만, undefined는 값이 아예 없는것이다.
어떤 variable이 존재 하지만, 값은 정해지지 않았을 때 나오는 것.
</pre>

### 2.5 Arrays

<pre>
array는 가장 기초적인 데이터 구조.
const abcde = [1, 2, 3, "a", "b", "c"] [] 안에 데이터들을 나열하면 된다.
array 안에 ㅁ번째 값을 가져오려면 abcde[ㅁ-1] 을 입력하면 된다. (컴퓨터는 0부터 샘!)
항목 하나를 array에 추가하려면 abcde.push()를 활용하여 넣는다.
</pre>

### 2.6 Objects

<pre>
array와 달리 object는 property를 가진 데이터를 정리해준다
const me = { name: "lee", height = "180" };
특정 데이터를 가리키려면 me.height 등으로 표시 / 다른 방법으로 me["height"]
내부 데이터를 업데이트 하려면 me.height = "280"; 을 하면 된다. 다른 property 추가도 동일하게 가능.
const 자체를 바꾸는건 안되지만, 내부 값을 바꾸는건 가능.
</pre>

### 2.7 Function Part One

<pre>
자바스크립트에서 Function은 계속해서 반복 사용할 수 있는 코드조각.   
function functionName(){code~} 이렇게 작성한다.
코드 실행은 functionName(); 로 실행한다.
function을 실행하는 동안 내부에 정보를 보내는 방법은 argumenmt이다.(괄호 안에 데이터를 넣는것!)
</pre>

### 2.8 Function part two

<pre>
함수에 데이터를 넣으러면   
function functionName(personName){console.log(personName);} 
functionName(lee); 이렇게 작성하면 lee 라는 데이터가 함수 안에 들어가게 되는 것이다.
데이터가 들어가면 PersonName이라는 variable 이름을 가지게 되는것.   
function functionName(personName, age) 처럼 argument는 여러개가 들어갈 수 있다.

object 안에 function을 만드려면    
const objectName = { functionName: function(){code~} } 이렇게 작성해야 한다.</pre>

### 2.11 Returns

<pre>
함수는 주어진 데이타를 코드에 입력해 수행하고 그 결과값을 알려주는 것
return을 함수 내부에서 이용하지 않고 console.log 만 사용하게 되면 콘솔창에서만 함수의 결과값 확인 가능.
결국 return값을 통해 함수의 결과값을 외부로 내보낼 수 있게 되는것!
또한 return 아래에 적힌 코드들은 작동하지 않는다. return값을 가지게 되면 함수는 거기서 종료됨.
</pre>

### 2.13 Conditionals

<pre>
조건문은 true 혹은 fasle 인지 알려주는 역할을 한다!   
parseInt()는 string 을 number로 바꿔준다. 물론 string 안에 있는게 숫자로만 이루어져야 한다.
이를 통해 콘솔창에서 숫자인지 아닌지(NaN) 확인할 수 있다
</pre>

### 2.14~15 Conditionals part Two, Three

<pre>
if(){} / 소괄호() 안에는 boolean 값이 들어가고, 중괄호{} 안에는 해당 값일때 작동할 코드를 적어놓는다.
여러번 적용할 경우 else if(){} 를 사용한다.   
else if(a < b){} / else if(a < b && a < c){}   
소괄호에서 조건 사이에 && 가 들어가면 and, ||가 들어가면 or 이다.
a === b a와 b가 같을경우 / a !== b a와 b가 같지 않을경우
<= / >= 등도 조건에서 활용한다.
</pre>

## JavaScript On The Browser

### 3.0 The Document Object

<pre>
자바스크립트는 Html을 자동적으로 읽어온다. 또한 변경도 가능하다.
ex) 콘솔창에서 document.title , document.location 등을 통해 정보를 가져올 수 있음.
</pre>

### 3.1 HTML in JavaScript

<pre>
자바스크립트로 정보를 가져오려면 document 객체와 element를 가져오는 함수를 이용할 수 있다.
getElementById 라는 함수를 이용해 특정 id를 가진 태그를 불러온다.
자바스크립트를 통해 Html과의 다양한 상호작용이 가능해진다!!
</pre>

### 3.2 Searching For Elements

<pre>
querySelector는 element를 css 선택자 방식으로 검색할 수 있다. 좀 더 정확하게 검색 가능!
querySelectorAll 은 array 형태로 조건에 부합하는 모든 element를 가져온다.
</pre>

### 3.3 Events

<pre>
브라우저에서 사용자의 행동은 자바스크립트에서 event로 받아들인다. 클릭, 마우스 이동 등등..
addEventListener 를 통해 event를 listen 하고 원하는 function을 argument로 넣어 실행시킬 수 있다.
</pre>

### 3.5 More Events

 <pre>
event를 사용하는 방법에는 2가지가 있음. 하나는 addEventListnener을 사용한 것,   
나머지는 onclick, onmouseenter 등을 이용한 것이 있다. 하지만 전자가 깔끔한듯.
 </pre>

### 3.7 CSS in JavaScript

<pre>
 자바스크립트 에선 class에 오타가 생길경우 찾기가 힘드니 
 미리 const 를 사용하여 class값을 정의 한 다음 입력하면 오타가 나도 찾기 쉬워진다.
</pre>

### 3.8 Toggle

<pre>

</pre>
