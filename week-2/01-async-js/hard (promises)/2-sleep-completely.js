/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(function(resolve){
        const initialTime = Date.now();
        for(let i=0;i<1000000000000;i++){
            let a = i;
            if(Date.now()==(initialTime+milliseconds)){
                resolve();
                break;
            }
        }
    })
}

module.exports = sleep;
