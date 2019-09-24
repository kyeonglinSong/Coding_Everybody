// array
var members = ['egoing', 'kyeonglin', 'lynn']
console.log(members[1]);
var i = 0;
while(i < members.length){
  console.log(members[i]);
  i+=1;

}

// 객체
var roles = {
  'programmer': 'egoing',
  'designer': 'kyeonglin',
  'manager': 'lynn'
}
console.log(roles.designer);
console.log('--------------');

// key 가 출력되는 for문
for(var name in roles){
  console.log(name);
}

console.log('--------------');

// value 가 출력되는 for문
for(var name in roles){
  console.log(roles[name]);
}
