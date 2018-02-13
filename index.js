var uppercase = "HELLO"
var lowercase = 'hello'
<<<<<<< HEAD

=======
var mixedCase = "Hi there"
>>>>>>> fe6b1016a8c14bf935582dec501ffa8b026ecbe0
function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log('HELLO')
}
function logWhisper(string){
  console.log('hello')
}
function sayHiToGrandma(string){
<<<<<<< HEAD
  if (string.toLowerCase() === string) {
  return "I can't hear you!";
  }
  if (string.toUpperCase() === string) {
=======
  if (string.toLowerCase() === lowercase) {
  return "I can't hear you!";
  }
  if (string.toUpperCase() === uppercase) {
>>>>>>> fe6b1016a8c14bf935582dec501ffa8b026ecbe0
  return "YES INDEED!";
  }
  if (string === "I love you, Grandma.") {
  return "I love you, too."
  }
}
