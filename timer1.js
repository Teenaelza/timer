const timer = process.argv.slice(2).sort((a,b)=> a-b);
//check the number of arguments
if (timer.length < 1) {
  process.exit();
}
const callInterval = (time)=>{
   setTimeout(function () { 
     process.stdout.write('\x07')
    }, time*1000);
}

for (time of timer){
    if(!(isNaN(time) ) && (time > 1)) {
      callInterval(time);
  }
}

