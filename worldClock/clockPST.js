function TimePST(){
    //initializing Time Variables
    var datePST = new Date();
    var hourPST = datePST.getHours();
    var minutePST = datePST.getMinutes();
    var secondPST = datePST.getSeconds();
    
    //Setting up AM/PM cycle
    var periodPST = "";
    if(hourPST > 12){
        periodPST = "PM";
    }else{
        periodPST = "AM";
    }

    //12 hour format
    if(hourPST == 0){
        hourPST = 12;
    }else{
        if(hourPST > 12){
            hourPST = hourPST - 12;
        }
    }

    //Time update
    hourPST = update(hourPST);
    minutePST = update(minutePST);
    secondPST = update(secondPST);

    //Adding time to Page
    document.getElementById("clockPST").innerText = hourPST + " : " + minutePST + " : " + secondPST + " " + periodPST;
    //set Timer to 1 second
    setTimeout(TimePST, 1000);
}

//Update time lements if less than 10

function update(t){
    if(t < 10){
        return "0" + t;
    }else{
        return t;
    }
}
TimePST();