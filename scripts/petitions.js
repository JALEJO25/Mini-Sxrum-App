// const API_URL="https://my-json-server.typicode.com/JALEJO25/Mini-Sxrum-App/db"

const API_URL="https://my-json-server.typicode.com/betoquiroga/simplescrum/tasks"

axios.get(API_URL)
    .then( resp => fillTasks(resp.data))    
    .catch(err=>console.log(err))
    
    function fillTasks(data){
        data.map(d=> {
            let newTask=document.createElement("article")
            let taskTitle=document.createElement("h3")
            taskTitle.innerText=d.title
            newTask.appendChild(taskTitle)

            let column=document.getElementById("doneTasks")
            column.appendChild(newTask)            
        });
    }

