// javascript
// function

var f = function(){
  console.log(1+1);
  console.log(1+2);
}
console.log(f);

f();

var a = [f];
a[0](); // 배열의 원소값으로써 함수가 존재할 수 있음.

var o = {
  func: f
}
o.func();

// var i = if(true){console.log(1)};
