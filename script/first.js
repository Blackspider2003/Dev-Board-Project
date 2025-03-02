// Date Formate
document.getElementById('current-date').innerText;
let currentDate = new Date();
let formatDate = currentDate.toLocaleDateString("en-BD", {
    month:"short",
    day:"numeric",
    year:"numeric"
})

document.getElementById("current-date").innerText = formatDate;


// card section btn-1 
document.getElementById('btn-1').addEventListener('click',function(event){ 
                event.preventDefault();
                disableButton();
});

function disableButton() {
                let assignTaskNumber = document.getElementById('task-assign-number');
                let convertedTaskNumber = parseInt(assignTaskNumber.innerText);
                let completeTask = document.getElementById('total-complete-task');
                let convertedCompleteTask = parseInt(completeTask.innerText);
            
                if (confirm("Do you want to proceed?")) {
                                document.getElementById('btn-1').disabled = true;
                    convertedTaskNumber--;
                    assignTaskNumber.innerText = convertedTaskNumber;
                    convertedCompleteTask++;
                    completeTask.innerText = convertedCompleteTask;
                    const container = document.getElementById('active')
                    const p =document.createElement('p');
                    p.classList.add("new")
                   p.innerText = `
                   You have completed your first task 01 March at 5.30pm 
                   `
                   container.appendChild(p);
                } 
                else {
                                document.getElementById('btn-1').disabled = false;
                }
            }

            // for btn-2

//             document.getElementById('btn-2').addEventListener('click',function(event){ 
//                 event.preventDefault();
//                 disableButton();
// });

// function disableButton() {
//                 let assignTaskNumber = document.getElementById('task-assign-number');
//                 let convertedTaskNumber = parseInt(assignTaskNumber.innerText);
//                 let completeTask = document.getElementById('total-complete-task');
//                 let convertedCompleteTask = parseInt(completeTask.innerText);
            
//                 if (confirm("Do you want to proceed?")) {
//                                 document.getElementById('btn-2').disabled = true;
//                     convertedTaskNumber--;
//                     assignTaskNumber.innerText = convertedTaskNumber;
//                     convertedCompleteTask++;
//                     completeTask.innerText = convertedCompleteTask;
//                     const container = document.getElementById('active')
//                     const p =document.createElement('p');
//                     p.classList.add("new")
//                    p.innerText = `
//                    You have completed your first task 01 March at 5.30pm 
//                    `
//                    container.appendChild(p);
//                 } 
//                 else {
//                                 document.getElementById('btn-2').disabled = false;
//                 }
//             }
            document.getElementById('clear-history').addEventListener('click',function(event){ 
                event.preventDefault();
                let newElements =document.querySelectorAll(".new");
                newElements.forEach(element => {
                    element.style.display = "none";
                })
            })

            // Random color by clickin the colorful image
            document.getElementById('color-change').addEventListener('click',function(event){ 
                event.preventDefault();
                let differentColor = `rgb(${Math.floor(Math.random() * 256)}, 
                               ${Math.floor(Math.random() * 256)}, 
                               ${Math.floor(Math.random() * 256)})`;
                document.body.style.background = differentColor;
            })

            // Discover Section Opening a new page
            document.getElementById('discover-btn').addEventListener('click',function(event){ 
                event.preventDefault();
                window.location.href="./blog.html";
            })
            // Back to Dev Section
            document.getElementById('back-btn').addEventListener('click',function(event){ 
                event.preventDefault();
                window.location.href="./index.html"
            })


 