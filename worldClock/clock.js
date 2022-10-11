const clockPST = document.querySelector('#clockPST');
const clockEST = document.querySelector('#clockEST');
const clockMST = document.querySelector('#clockMST')
const clockCST = document.querySelector('#clockCST')

function clockChange(timeZone, element){
    //Current Date
    const date1 = new Date();

    //Local time config
    const foo = date1.toLocaleString('en-US', {
    timeZone: timeZone,
    month: "long",
    year: "numeric",
    day: "numeric",
    hour: 'numeric',
    minute:'numeric',
    second:'numeric'
    });

    //Formatting
    let format = foo.split('at');
    let [date, time] = format;
    element.innerHTML = `
        <div class="h5">${date.trim()}</div>
        <div>${time}</div>
    `;
}

clockChange('America/Los_Angeles', clockPST);
clockChange('America/New_York', clockEST);
clockChange('America/Denver', clockMST);
clockChange('America/Chicago', clockCST);




