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

const orderedList = document.getElementById("todo-list")

const populateTodos = () => {

  for (let i = 0; i < arrayOfTodos.length; i++) {
    
    let todoTitle = arrayOfTodos[i].title
    let listItem = document.createElement("li")
    let liText = document.createTextNode(todoTitle)

    listItem.appendChild(liText)
    orderedList.appendChild(listItem)
  }
}


// Add a button that when clicked will:
// and populate it with only todos with the userID that matches the number inputted.
// then stores the currently filtered todos in a variable so that ...

// You can create two more buttons that when clicked:

// removes those todos from the view
// and shows only todos that are either:
// completed
// not completed

const filterTodos = () => {
  orderedList.innerHTML = ""

  let userInput = document.getElementById("userIdInput").value
  
  const filteredList = arrayOfTodos.filter((todo) => {
    return todo.userId == userInput
  })
  console.log("filtered list:", filteredList)

  arrayOfTodos = filteredList
  populateTodos()

  // let completeButton = document.createElement("button")
  // const container = document.getElementById("completeButtonContainer") 
  // completeButton.innerText = "Show Complete"
  // container.appendChild(completeButton)
  // completeButton.addEventListener("click", showComplete())
}

const showComplete = () => {
  orderedList.innerHTML = ""

  const completeList = arrayOfTodos.filter((todo) => {
    return todo.completed === true
  })

  console.log(completeList)

  for (let i = 0; i < completeList.length; i++) {
    
    let todoTitle = completeList[i].title
    let listItem = document.createElement("li")
    let liText = document.createTextNode(todoTitle)

    listItem.appendChild(liText)
    orderedList.appendChild(listItem)
  }
}

const showIncomplete = () => {
  orderedList.innerHTML = ""

  const incompleteList = arrayOfTodos.filter((todo) => {
    return todo.completed === false
  })

  console.log(incompleteList)

  for (let i = 0; i < incompleteList.length; i++) {
    
    let todoTitle = incompleteList[i].title
    let listItem = document.createElement("li")
    let liText = document.createTextNode(todoTitle)

    listItem.appendChild(liText)
    orderedList.appendChild(listItem)
  }
}