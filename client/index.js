const herd = document.getElementById("herd");

function createGoatCard(goat){

    //create a card
    const card = document.createElement("div");

    // add a relevant class
    card.classList.add("goat");

    // attach it to the container
    const header = document.createElement("h2");
    header.textContent= goat["name"];
    card.appendChild(header);

    card.classList.add( goat["age"] > 20 ? "young" : "old");
    
    //attach it to the container
    herd.appendChild(card);

}

async function callTheHerd(){

    // requesta all the goats from the API
    const res = await fetch("http://localhost:3000/goats");

    //extract the json data from the response 
    const data = await res.json();

    // Log them
    data.forEach(g => createGoatCard(g));
};

callTheHerd();
