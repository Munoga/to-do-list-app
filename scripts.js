const input = document.getElementById("input")
const addBtn = document.getElementById("add")

const check= document.getElementById("checked")
const del = document.getElementById("deleteBtn")
const todo = document.getElementById("to-do")
const todoList = document.querySelector(".todo-lists")

const TODOS = []
const index = TODOS.length + 1

function getInput (){
    input.value
    if(input.value.trim() === "") return

    TODOS.push(input.value)
    input.value = ""
    const ele = TODOS.map((toDo) => `
        <div class="to-do">
            <input
              type="checkbox"
              class="checked"
              id="checked"
              placeholder=""
            />
            <p class="activity" id="to-do">${toDo}</p>
            <button class="deleteBtn" id="deleteBtn">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>`).join("")
    todoList.innerHTML = ele

     todoList.addEventListener("change", (event) => {
         if(event.target.classList.contains("checked")){
            const todoDiv = event.target.closest(".to-do")
            todoDiv.classList.toggle("done")
 }
     })
}

function deleteTodo(){
    console.log("deleted")
}


input.addEventListener("keydown", (event)=>{
    if(event.key == "Enter"){
        getInput()
    } else{
        return
    }
})

addBtn.addEventListener("click", ()=> {
    getInput()
})

