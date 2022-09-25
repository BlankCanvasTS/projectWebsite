function TimeEST(){
    //initializing Time Variables
    var dateEST = new DateEST();
    var hourEST = dateEST.getHours();
    var minuteEST = dateEST.getMinutes();
    var secondEST = dateEST.getSeconds();
    
    //Time conversion
    hourEST = hourEST + 3;
    //Setting up AM/PM cycle
    var periodEST = "";
    if(hourPST > 12){
        periodEST = "PM";
    }else{
        periodEST = "AM";
    }

    //12 hour format
    if(hourEST == 0){
        hourEST = 12;
    }else{
        if(hourEST > 12){
            hourEST = hourEST - 12;
        }
    }

    //Time update
    hourEST = update(hourEST);
    minuteEST = update(minuteEST);
    secondEST = update(secondEST);

    //Adding time to Page
    document.getElementById("clockEST").innerText = hourEST + " : " + minuteEST + " : " + secondEST + " " + periodEST;
    //set Timer to 1 second
    setTimeout(TimeEST, 1000);
}

//Update time lements if less than 10

function update(t){
    if(t < 10){
        return "0" + t;
    }else{
        return t;
    }
}
TimeEST();