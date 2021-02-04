// Date() ger oss ett inbyggt objekt i Javacript med vilket vi kan hantera datum på olika sätt. Du kan behöva det om du exempelvis vill spara tiden för när en order är skickad i en webshop. Eller om vi vill visa hur lång tid det är kvar till en deadline till en uppgift.

// I denna övningen vill jag att du skall skapa en digital klocka.

// Du skall bara visa timmar:minuter:sekunder Välj ut ett typsnitt från google fonts som ser ut som en gammal retro digitalklocka. Du kommer behöva använda Date() samt setInterval() för att slutföra uppgiften.
const main = document.getElementById("main");

let clock = setInterval(() => {
    let getDate = new Date();
    let currentHour = getDate.getHours();
    let currentMinute = getDate.getMinutes();
    let currentSecond = getDate.getSeconds();

    //adding 0 if time less then 2 numbers
    currentSecond = (currentSecond < 10) ? "0" + currentSecond : currentSecond;
    currentMinute = (currentMinute < 10) ? "0" + currentMinute : currentMinute;
    currentHour = (currentHour < 10) ? "0" + currentHour : currentHour;
    
    // console.log(currentTime);
    main.innerHTML=""
    main.insertAdjacentHTML("afterbegin", `<h1>${currentHour} : ${currentMinute} : ${currentSecond}</h1>`)
}, 1000);






