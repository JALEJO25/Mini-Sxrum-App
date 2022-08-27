const API_URL="https://my-json-server.typicode.com/JALEJO25/Mini-Sxrum-App/tasks"

axios.get(API_URL)
    .then( resp => fillTasks(resp.data))    
    .catch(err=>console.log(err))
    
    function fillTasks(data){
        data.map(d=> {
            let newTask=document.createElement("article")
            let taskTitle=document.createElement("h3")
            taskTitle.innerText=d.title

            let taskPerson=document.createElement("p")
            taskPerson.innerHTML=`<span>Responsable:</span> ${d.person}`

            let taskDeadline=document.createElement("p")
            taskDeadline.innerHTML=`<span>Plazo:</span> ${unixDate(d.deadline)}`


            newTask.appendChild(taskTitle)
            newTask.appendChild(taskPerson)
            newTask.appendChild(taskDeadline)

            let columnTodo=document.getElementById("todoTasks")
            let columnInprogress=document.getElementById("inProgressTasks")
            let columnDone=document.getElementById("doneTasks")

            if(d.state=="to-do"){
                columnTodo.appendChild(newTask) 
            }
            if(d.state=="in-progress"){
                columnInprogress.appendChild(newTask) 
            }
            if(d.state=="done"){
                columnDone.appendChild(newTask) 
            }

        });
    }

