const clockPST = document.querySelector('#clockPST');
const clockEST = document.querySelector('#clockEST');


function clockChange(timeZone, element){
    const date1 = new Date();

    const foo = date1.toLocaleString('en-US', {
    timeZone: timeZone,
    month: "long",
    year: "numeric",
    day: "numeric",
    hour: 'numeric',
    minute:'numeric',
    second:'numeric'


    });
    
    let format = foo.split('at');
    let [date, time] = format;
    element.innerHTML = `
        <div class="h5">${date.trim()}</div>
        <div>${time}</div>
    `;
}

clockChange('America/New_York', clockEST);

clockChange('America/Los_Angeles', clockPST);



