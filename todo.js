// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }
]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  
  const list = document.getElementById("todo-list")

  for (let i = 0; i < arrayOfTodos.length; i++) {
    
    let todoTitle = arrayOfTodos[i].title
    let listItem = document.createElement("li")
    let liText = document.createTextNode(todoTitle)

    listItem.appendChild(liText)
    list.appendChild(listItem)
  }
}

// After you've been able to access and console the properties on any object in the array your next step is to insert that data into an li element and insert the li into the ol.

// Start with getting just the first item and its title property.

// Then capture the ol item into a variable (getElementById)
// createElement to make a new LI
// createTextNode inside the li using the title property.
// Now append the text to the new element
// Then append the element to the ol element.
// Put all of that inside your populateTodos function.
// git status, add, commit, push

// Now that you have one element created and showing up on the screen, put the same code inside a for loop and iterate over the length of the array. But now just change out [0] for [i]! (Refer back to your for loop lesson if needed)