export function init(){
    const mainh=document.querySelector('#mainh');
    let h3ele=document.createElement("h3");
    h3ele.textContent=new Date().toLocaleDateString("en-us", { weekday: "long", year: "numeric", month:"short", day: "numeric" });
    mainh.append(h3ele);
    const ulelement=document.querySelector("#todo-list");
    const addbtnelement=document.querySelector('#addTask');
    const clrelement=document.querySelector("#clr");
    const taskele=document.querySelector('#taskEntry');
    console.log(taskele.value);
    loadTasks();
    addbtnelement.addEventListener('click',function(e){
        const task=taskele.value;
        if(task!==""){
            localStorage.setItem(task,taskele.value);
            addTask(task);
            taskele.value="";
        }
        else{
            alert("Enter a task");
        }
    });
    function addTask(task){
        let lielement=document.createElement("li");
            lielement.setAttribute("class","list-group-item p-2");
            let inpelement=document.createElement("input");
            inpelement.setAttribute("class","form-check-input me-1");
            inpelement.setAttribute("type","checkbox");
            inpelement.setAttribute("id",task);
            let labelelement=document.createElement("label");
            labelelement.textContent=task;
            labelelement.setAttribute("for",task);
            labelelement.setAttribute("class","form-check-label");
            inpelement.addEventListener('click',function(e){
                if(inpelement.checked){
                    labelelement.classList.add('strike');
                    localStorage.removeItem(task);
                }
                else{
                    labelelement.classList.remove('strike');
                    if(localStorage.getItem!==null){
                        localStorage.setItem(task,task);
                    }
                }
            })
            lielement.append(inpelement);
            lielement.append(labelelement);
            ulelement.append(lielement);
    }
    clrelement.addEventListener('click',function(e){
        ulelement.innerHTML=``;
        localStorage.clear();
    })
    function loadTasks(){
        for(let i=0;i<localStorage.length;i++){
            addTask(localStorage.key(i));
        }
    }
}

