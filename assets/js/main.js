var userObj = {
firstName: 'Alex',
lastName: 'Proh',
age: 37,
fullName: function() {
  return this.firstName + ' ' + this.lastName;
}
}
console.log(userObj);

console.log(userObj.fullName());

function defUpperStr(str){
  return (str || 'Default text').toUpperCase();
}
console.log(defUpperStr('My text'));
console.log(defUpperStr());

function evenFn(n){
  var mas = []
  for (var i = 1; i <= n; i++) if (i % 2 === 0) mas.push(i);
  return mas
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

function weekFn(n){
  var a = '';
   switch (n) {
    case 1:
      a = 'Понедельник';
      break;
    case 2:
        a = 'Вторник';
        break;
    case 3:
      a = 'Среда';
      break;
    case 4:
        a = 'Четверг';
        break;
    case 5:
      a = 'Пятница';
      break;
    case 6:
      a = 'Суббота';
      break;
    case 7:
      a = 'Воскресенье';
      break;
    default:
      a = null;
    }
    return a;
 }
console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));

function ageClassification(n){
  return n < 0 ? null : n <= 24 ? 'детский возраст' : n <= 44 ? 'молодой возраст' : n <= 65 ? 'средний возраст' : n <= 75 ? 'пожилой возраст' : n <= 90 ? 'старческий возраст' : n <= 122 ? 'долгожители': null;
  }
console.log(ageClassification(-1));
console.log(ageClassification(1));
console.log(ageClassification(24));
console.log(ageClassification(24.01));
console.log(ageClassification(44));
console.log(ageClassification(44.01));
console.log(ageClassification(65));
console.log(ageClassification(65.01));
console.log(ageClassification(75));
console.log(ageClassification(75.01));
console.log(ageClassification(90));
console.log(ageClassification(90.01));
console.log(ageClassification(122));
console.log(ageClassification(122.01));
console.log(ageClassification(150));

function oddFn (n){
  var mas = [];
  var i = 0;
  while (i++ < n) if (i % 2 !== 0) mas.push(i);
  return mas;
}
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

function mainFunc (a, b, cb){
  if (cb && typeof cb === 'function') return cb(a, b);
  return false;
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(a, b){
  return Math.pow(a, b);
}

function cbAdd(a, b) {
  return a + b;
}
console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));