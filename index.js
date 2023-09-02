var presentime=prompt("Set the timer: ","mm:ss");
var timearray=presentime.split(/[:]+/);
document.getElementById("countdown").innerHTML=timearray[0]+": "+timearray[1];

var flag=1;

var audio=new Audio("./asset/playSound.mp3");
function playAudio()
{
    audio.play();
    audio.loop="true";
    startTimer();
}

document.getElementById("start").addEventListener("click",function(){
    this.style.display="none";
    document.getElementById("pause").style.display="inline";
    flag=1;
    playAudio();

})

document.getElementById("pause").addEventListener("click",function(){
    this.style.display="none";
    document.getElementById("start").style.display="inline";
    audio.pause();
    flag=0;

})




function startTimer(){

    var presentime=document.getElementById("countdown").innerHTML;
    var timearray=presentime.split(/[:]+/);
    var m=timearray[0];
    var s=timearray[1];
    if(s<=0 && m<=0)
    {
        audio.pause();
        alert("Time Reached");
    }

    else if(m>=0 && s==0)
    {
        s=59;
        m--;
    }
    else
        s--;
    
    if(s<10)
        document.getElementById("countdown").innerHTML=m+": 0"+s;
    else
    document.getElementById("countdown").innerHTML=m+": "+s;
    if(flag==1)
        setTimeout(startTimer,1000);

};