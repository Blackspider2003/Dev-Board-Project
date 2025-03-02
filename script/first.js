
// Date Formate
document.getElementById('current-date').innerText;
let currentDate = new Date();
let formatDate = currentDate.toLocaleDateString("en-BD", {
    weekday:"short",
    month:"short",
    day:"numeric",
    year:"numeric"
})

document.getElementById("current-date").innerText = formatDate;


// card section btn-1 
document.getElementById('btn-1').addEventListener('click',function(event){ 
                event.preventDefault();
                disableButton1();
});

function disableButton1() {
                let assignTaskNumber = document.getElementById('task-assign-number');
                let convertedTaskNumber = parseInt(assignTaskNumber.innerText);
                let completeTask = document.getElementById('total-complete-task');
                let convertedCompleteTask = parseInt(completeTask.innerText);
            
                if (confirm("Board Updated Successfully")) {
                                document.getElementById('btn-1').setAttribute("disabled",true);
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
                // else {
                //     document.getElementById('btn-1').setAttribute("disabled",true);
                // }
            }

            // for btn-2
            document.getElementById('btn-2').addEventListener('click',function(event){ 
                event.preventDefault();
                disableButton2();
});

function disableButton2() {
                let assignTaskNumber = document.getElementById('task-assign-number');
                let convertedTaskNumber = parseInt(assignTaskNumber.innerText);
                let completeTask = document.getElementById('total-complete-task');
                let convertedCompleteTask = parseInt(completeTask.innerText);
            
                if (confirm("Board Updated Successfully")) {
                                document.getElementById('btn-2').setAttribute("disabled",true);
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
                // else {
                //     document.getElementById('btn-2').setAttribute("disabled",true);
                // }
            }

            // For Btn-3
            document.getElementById('btn-3').addEventListener('click',function(event){ 
                event.preventDefault();
                disableButton3();
});

function disableButton3() {
                let assignTaskNumber = document.getElementById('task-assign-number');
                let convertedTaskNumber = parseInt(assignTaskNumber.innerText);
                let completeTask = document.getElementById('total-complete-task');
                let convertedCompleteTask = parseInt(completeTask.innerText);
            
                if (confirm("Board Updated Successfully")) {
                                document.getElementById('btn-3').setAttribute("disabled",true);
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
                // else {
                //     document.getElementById('btn-3').setAttribute("disabled",true);
                // }
            }
            // For Btn-4
            document.getElementById('btn-4').addEventListener('click',function(event){ 
                event.preventDefault();
                disableButton4();
});

function disableButton4() {
                let assignTaskNumber = document.getElementById('task-assign-number');
                let convertedTaskNumber = parseInt(assignTaskNumber.innerText);
                let completeTask = document.getElementById('total-complete-task');
                let convertedCompleteTask = parseInt(completeTask.innerText);
            
                if (confirm("Board Updated Successfully")) {
                                document.getElementById('btn-4').setAttribute("disabled",true);
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
                // else {
                //     document.getElementById('btn-4').setAttribute("disabled",true);
                // }
            }
            // For Btn-5
            document.getElementById('btn-5').addEventListener('click',function(event){ 
                event.preventDefault();
                disableButton5();
});

function disableButton5() {
                let assignTaskNumber = document.getElementById('task-assign-number');
                let convertedTaskNumber = parseInt(assignTaskNumber.innerText);
                let completeTask = document.getElementById('total-complete-task');
                let convertedCompleteTask = parseInt(completeTask.innerText);
            
                if (confirm("Board Updated Successfully")) {
                                document.getElementById('btn-5').setAttribute("disabled",true);
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
                // else {
                //     document.getElementById('btn-5').setAttribute("disabled",true);
                // }
            }
            // For Btn-4
            document.getElementById('btn-6').addEventListener('click',function(event){ 
                event.preventDefault();
                disableButton6();
});

function disableButton6() {
                let assignTaskNumber = document.getElementById('task-assign-number');
                let convertedTaskNumber = parseInt(assignTaskNumber.innerText);
                let completeTask = document.getElementById('total-complete-task');
                let convertedCompleteTask = parseInt(completeTask.innerText);
            
                if (confirm("Board Updated Successfully")) {
                    if(confirm('Congrats Vaiya')){
                        document.getElementById('btn-6').setAttribute("disabled",true);
                        convertedTaskNumber--;
                        assignTaskNumber.innerText = convertedTaskNumber;
                        convertedCompleteTask++;
                        completeTask.innerText = convertedCompleteTask;
                        const container = document.getElementById('active')
                        const p =document.createElement('p');
                        p.classList.add("new")
                        const now = new Date();
                        const formattedTime = now.toLocaleTimeString('en-US', { 
                            hour: '2-digit', 
                             minute: '2-digit', 
                             hour12: true 
                        });
                            p.innerText = `You have completed the task Improve Job searching at ${formattedTime}`;
                    container.appendChild(p);
                       
                    }
                }
            }
//                 const container = document.getElementById('active');
// const p = document.createElement('p');
// p.classList.add("new");

// // Get current date and time
// const now = new Date();

// // Format date (e.g., "01 March")
// const options = { day: '2-digit', month: 'long' };
// const formattedDate = now.toLocaleDateString('en-BD', options);

// // Format time (e.g., "5:30 PM")
// const formattedTime = now.toLocaleTimeString('en-BD', { hour: '2-digit', minute: '2-digit', hour12: true });

// p.innerText = `You have completed your first task on ${formattedDate} at ${formattedTime}`;
// container.appendChild(p);
                 
                // else {
                //     document.getElementById('btn-6').setAttribute("disabled",true);
                // }

            
            // Clear History Functionality
            document.getElementById('clear-history').addEventListener('click',function(event){ 
                event.preventDefault();
                let newElements =document.querySelectorAll(".new");
                newElements.forEach(element => {
                    element.style.display = "none";
                })
            })
            
            // Random color by clicking the colorful image
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
                window.location.href="index.html"
            })
            



 