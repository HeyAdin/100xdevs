let counter = 0;
let interval = setInterval(()=>{
    console.log(counter++);
    if(counter == 30){
        clearInterval(interval);
    }
},1000);