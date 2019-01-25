function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

<<<<<<< HEAD
var string = "HELLO"
var lowercase = string.toLowerCase()
var uppercase = string
function sayHiToGrandma(string){
  if (string === lowercase ) {
  return "I can\'t hear you!"
} else if (string === uppercase ) {
  return ("YES INDEED!")
} else {
  return "I love you, too."
=======
/*var string = "hello"*/
var uppercase = string.toUpperCase()
function sayHiToGrandma(string){
  if (string.toUpperCase === uppercase ) {
  console.log("I can\'t hear you!")
>>>>>>> d8f4631649824353cd3fc5d530f0cb4779ab4a48
}
}