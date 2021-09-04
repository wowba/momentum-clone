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
toggle은 해당 class를 없으면 생성하고 있으면 없애주는 기능을 한다.
</pre>

### 4.0 Input Values

<pre>
console.dir(constName) 를 활용하여 콘솔창에서 어떤 property를 찾아야 하는지 알 수 있다.
</pre>

### 4.1 Form Submisson

<pre>
form 내부에서 input으로 제출하게 되면 html은 페이지를 새로고침 해버린다! 이걸 해결해야 함.
</pre>

### 4.2 Events

<pre>
form의 기본 동작은 submit, submit에 의해 웹페이지는 refresh 된다.
하지만 js에서 이를 preventDefault()를 통해 방지할 수 있다.
</pre>

### 4.3 Events part Two

<pre>
EventListener의 함수는 항상 특정 정보를 argument로 받는데,
이는 방금 그 함수가 실행되었을때 가지고 있는 데이터값을 가지고 있다.
해당 함수에서 해당 object값을 확인할 수 있으며 (console.log)
이는 보통 event 를 argument 위치에 넣어 표시한다.
</pre>

## CLOCK

### 5.0 Intervals

<pre>
interval은 매번 일어나야 하는 무언가를 의미. ex) 매 2초, 매 1초
setInterval() 함수를 통해 사용 가능하다. 2개의 argument, 함수와 시간초를 받는다.
setInterval(functionName, time)
</pre>

### 5.1 Timeout and Dates

<pre>
setTimeout()은 함수, 시간을 입력하며 일정 시간 뒤 함수가 시작하게 만든다.
자바스크립트에서 현재 시간,날짜,년도에 대한 정보를 가져오려면 new Date() 를 const로 불러낸다.
const date = new Date(); 로 불러내어 date.getHours, date.getMinutes 둥의 기능을 통해 값을 가져올 수 있다.
또한 Date는 1970년 1월 1일 이후 지금까지 흐른 시간을 미리세컨으로 값을 가진다!!! 매우 중요!!!

console에

typeof Date;

를 입력해보시면 function 이라고 알려줍니다.
JavaScript에는 생성자 함수라는 것이 있는데요.
new 를 선두에 쓰고 생성자 함수를 호출하면 instance object를 반환합니다.
이는 생성자 함수로 객체를 생성할 때 하기로 한 약속(문법)입니다.
생성자 함수는 arguments를 받을 수 있습니다.
console 에

const date = new Date();

를 입력하여 date 변수를 선언하시고,

typeof date;

를 입력해보시면 object를 반환하는 것을 볼 수 있습니다.
이렇게 생성한 date 객체를 우리는 이전시간에 배웠던대로
object.property 와 같은 형식으로 사용할 수 있습니다.
(강의 내용 중 #2.6 참고)

이는 Python의 Class와 유사하며,
더 궁금한 것이 있으시다면 구글에
생성자 함수 (with JavaScript)에 대해 검색해보시기 바랍니다.
</pre>

### 5.2 PadStart

<pre>
PadStart() 함수는 문자열의 길이(character)를 재서 특정 길이 이하일경우
나머지 길이를 특정 문자로 채우는 기능이다.
"king".padStart(10,"x") 라고 하면 king은 4글자이므로 앞 6자를 x 로 채우게된다.
padEnd()는 방향만 반대이다.
</pre>

## 6 QUOTES AND BACKGROUND

### 6.0 Quotes

<pre>
Math.random() 는 0부터 1사이의 무작의 숫자를 준다.
Math.round() 는 해당 숫자를 반올림한다
Math.ceil() 는 해당 숫자를 올림한다
Math.floor() 는 해당 숫자를 내림한다
</pre>

### 6.1 Background

<pre>
document.createElement() 를 통해 자바스크립트에서 element를 만들 수 있다.
document.body.appendChild() 를 이용하면 html의 body태그 맨 아래쪽에 만든것을 보낼 수 있다.
</pre>

## 7 TO DO LIST

### 7.1 Adding To Do

<pre>
const li = document.createElement("li");
const span = document.createElement("span");
li.appendChild(span);
이 방법을 통해 자바스크립트로 태그 안에 태그를 넣을 수 있다.</pre>

### 7.2 Deleting To Do

<pre>
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
함수에 들어온 event속 정보인 target.parentElement를 이용해 target이 속한 부모를 알아낼 수 있다.
이를 이용해 event.target.element를 지정, .remove()를 이용해 삭제할 수 있다.
</pre>

### 7.3 Saving To Do

<pre>
localStorage.setItem("todos", toDos); 를 이용하여 정보를 저장할 수 있다.
하지만 localStorage는 array는 못들어가고 단순 텍스트만 들어갈 수 있으며, 이를 저장하기 위해선
JSON.stringify() 를 사용하여 string으로 바꿔주어야 한다.
localStorage.setItem("todos", JSON.stringify(toDos));
</pre>

### 7.4 Loading To Do

<pre>
JSON.stringify()를 사용하여 stirng으로 만들 수 있다면
JSON.parse()를 사용하여 다시 살아있는 array로 만들 수 있다.
JSON.stringify([1,2,3,4]) >> "[1,2,3.4]"
JSON.parse("[1,2,3,4]") >> [1,2,3,4]

array는 각각의 item에 대해 함수를 실행시킬 수 있는데,이는 forEach()라는 함수로 가능하다.
function f(item) {
  console.log("shit", item);
}
arrayName.forEach(f); 
은 각각의 item에 f 이라는 함수를 실행시킨다.

또한 화살표 함수로 표현할 수 있는데
arrayName.forEach((item) => console.log("shit", item)); 이렇게도 사용 가능하다. 
이때는 함수 명이 필요없다. 왜냐하면 바로 동작해야할 내용을 실행하기 때문이다.
</pre>

### 7.6 Deleting To Do

<pre>
.filter() 함수는 argument 로 함수를 받으며, 모든 item에 대해 argument를 실행한다. (forEach와 유사)
그 함수는 true일경우 값을 유지, false 일경우 그 값을 배제한다.
const array = [1,2,3,4,5];
function filter(number){ return number !== 3};
array.filter(function) >> array = [1,2,4,5] 이다.
</pre>
