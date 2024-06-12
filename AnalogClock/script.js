setInterval(()=>{
     date = new Date();
     hTime = date.getHours();
     mTime = date.getMinutes();
     sTime = date.getSeconds();
     hRotation= 30*hTime + mTime/2+sTime/120;
     mRotation= mTime*6+sTime/10;
     sRotation=sTime*6;

     hours.style.transform = `rotate(${hRotation}deg)`
     minutes.style.transform = `rotate(${mRotation}deg)`
     seconds.style.transform = `rotate(${sRotation}deg)`
},1000);