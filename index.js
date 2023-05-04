
fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>res.json())
.then((joke=> console.log(joke[0].setup,joke[0].punchline)))
