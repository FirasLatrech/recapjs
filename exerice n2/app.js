 
function delayeMessage(){
  
  setTimeout(function(){
    console.log("Task 1: Delayed task 1")
    console.log("[wait for 2 seconds]")

  },2000)
  setTimeout(function(){
    console.log("Task 2: Delayed task 2")
    console.log("[wait for 3 seconds]")
  },5000)
  setTimeout(function(){
    console.log("Task 3: Delayed task 3")
    
  },8000)
}
delayeMessage()