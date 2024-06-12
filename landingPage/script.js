var countDownDate = new Date("July 14, 2024 15:37:25").getTime();

var x= setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance/(1000*60*60*24))
    var hours= Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    var minutes= Math.floor((distance%(1000*60*60))/(1000*60))
    var seconds=Math.floor((distance%(1000*60))/1000)

    document.getElementById('demo').innerHTML = days + "d "+ hours+"h "+ minutes+"m "+seconds+"s ";
    if(distance<0){
        clearInterval(x);
        document.getElementById('demo').innerHTML = "EXPRIED";
    }
}, 1000);