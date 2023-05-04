
// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((res)=>res.json())
// .then((joke=> console.log(joke[0].setup,joke[0].punchline)))
// .catch((err)=> console.log(err))

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))