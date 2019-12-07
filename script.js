let info = []; // For TESTING 

window.addEventListener("load", function(){
   console.log("window loaded");

    fetch("https://handlers.education.launchcode.org/static/planets.json")
      .then(function(response){
         response.json()
         .then(function(json){
            console.log(json)

            let i = Math.floor(Math.random()*json.length); //Bonus

            const missionTarget = document.querySelector("#missionTarget");
                  let planet =`
                  <h2>Mission Destination</h2>
                  <ol>
                  <li>Name: ${json[i].name}</li>
                  <li>Diameter: ${json[i].diameter}</li>
                  <li>Star: ${json[i].star}</li>
                  <li>Distance from Earth: ${json[i].distance}</li>
                  <li>Number of Moons: ${json[i].moons}</li>
                  </ol>
                  <img src="${json[i].image}">
                  `;
                  
                  missionTarget.innerHTML = planet;
         });   
      });

let form = document.querySelector("form");
 form.addEventListener("submit", function(event) {
    let faultyItems = document.getElementById("faultyItems");

         let pilotName = document.querySelector("input[name=pilotName]");
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`;

         let copilotName = document.querySelector("input[name=copilotName]");
            document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;

         let fuelLevel = document.querySelector("input[name=fuelLevel]");
               if (isNaN(fuelLevel.value) || fuelLevel.value < 0) {
                  alert("Please enter valid positive number for Fuel Level.");
               } 
               if (Number(fuelLevel.value) < 10000) {
                  faultyItems.setAttribute("style", "visibility: visible");
                  document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey!";
                  document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";  
                  document.getElementById("launchStatus").style["color"] = "red";
                  event.preventDefault();
               } else {
                  document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
               }

         let cargoMass = document.querySelector("input[name=cargoMass]");
               if(isNaN(cargoMass.value) || cargoMass < 0) {
                  alert("Please enter a valid positive number for Cargo Mass");
               } 
               if (Number(cargoMass.value) > 10000){
                  document.querySelector("#faultyItems").style["visibility"] = "visible";
                  document.getElementById("cargoStatus").innerHTML = "Too much mass for shuttle to take off!";
                  document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
                  document.getElementById("launchStatus").style["color"] = "red";
                  event.preventDefault();
               } else {
                  document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";                 
               }

    if (pilotName.value !== "" && copilotName.value !== "" && fuelLevel.value > 10000 && cargoMass.value < 10000) {  
       document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!";
       document.getElementById("launchStatus").style["color"] = "green";    
       document.querySelector("#faultyItems").style["visibility"] = "hidden";
       event.preventDefault();
     }   
     
     info = [pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value];
     console.log(info)
     return info;
 });
});
