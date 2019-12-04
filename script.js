// Write your JavaScript code here!

window.addEventListener("load", function(){
   console.log("window loaded");
let form = document.querySelector("form");
 form.addEventListener("submit", function(event) {
         let pilotName = document.querySelector("input[name=pilotName]");
            console.log(pilotName.value)
            console.log(typeof pilotName.value)
            // form.addEventListener("input", function(event) {  // I solved this with inline "required" instead.
               // if(typeof pilotName.value !== 'string'){
            //   if(pilotName.value === "" || typeof pilotName.value !== 'string'){
            //    alert("Please enter a valid name for Pilot.");
            //   }
            // });
            /* then do something with the pilotName.value, like updating the li element pilotStatus */
            // document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`;

         let copilotName = document.querySelector("input[name=copilotName]");
            console.log(copilotName.value)
            document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;

         let fuelLevel = document.querySelector("input[name=fuelLevel]");
            console.log(fuelLevel.value)
               if (isNaN(fuelLevel.value) || fuelLevel.value < 0) {
                  alert("Please enter valid positive number for Fuel Level.");
               } else if (fuelLevel.value < 10000) {
                  console.log("Fuel level is too low to take off.");
                  /* Change faultyItems to visible with an updated fuel status stating tha tthere is not enough fuel for the journey. Text of h2 Element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to ReadableStream. */ 

               } /* If all is good, I think we're done with fuelLevel... or is that something to update in HTML? */

         let cargoMass = document.querySelector("input[name=cargoMass]");
            console.log(cargoMass.value)
            console.log(isNaN(cargoMass.value))
               if(isNaN(cargoMass.value) || cargoMass < 0) {
                  alert("Please enter a valid positive number for Cargo Mass");
               } else if (cargoMass > 10000){
                  console.log("Cargo Mass is too high to take off.");
                  /* Change the list to visible with an updated cargoStatus stating that there is too much mass for the shuttle to take off. Text launchStatus should also change to "Shuttle not ready for launch" and color should change to red. */
               }

    if (pilotName.value === "" || copilotName.value === "" || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         // alert("All fields are required!");
   //   if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value===""){
         // alert("All fields are required!");
     //  if(isNaN(pilotName.value) || isNAN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         console.log("Form not all filled out correctly!")
         alert("All fields are required!");
         event.preventDefault("All fields are required!");        
     } else {
       console.log("We must have everything we need filled out above!")
       /* Change the text of launchStatus to green and display "Shuttle is ready for lauch" */

       let faultyItems = document.getElementById("faultyItems");
       faultyItems.setAttribute("style", "visibility: visible")

     }
   //   document.querySelector("#faultyItems").style["visibility"] = "visible";
     document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`;

 });

});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
  <li>Name: ${}</li>
  <li>Diameter: ${}</li>
  <li>Star: ${}</li>
  <li>Distance from Earth: ${}</li>
  <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
