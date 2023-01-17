const herd = document.getElementById("herd");

function createGoatCard(goat) {

    //create a card
    const card = document.createElement("div");

    // add a relevant class
    card.classList.add("goat");

    // attach it to the container
    const header = document.createElement("h2");
    header.textContent = goat["name"];
    card.appendChild(header);

    card.classList.add(goat["age"] > 20 ? "young" : "old");

    //attach it to the container
    herd.appendChild(card);

}

async function callTheHerd() {

    // requesta all the goats from the API
    const res = await fetch("http://localhost:3000/goats");

    //extract the json data from the response 
    const data = await res.json();

    // Log them
    data.forEach(g => createGoatCard(g));
};

document.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault(); // stop form from interfering

    const goat = {
        name: e.target.name.value,
        age: e.target.age.value,
        sex: e.target.sex.value,
        favouriteColour: e.target.colour.value
    }

    const options = {
        method: "POST",
        body: JSON.stringify(goat),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }


    console.log(goat);


    fetch("http://localhost:3000/goats", options)
        .then(res =>res.json())
        .then(data => createGoatCard(data))
        .catch(err => { 
            console.log(err);
            alert("Something went wrong!");
        })
        
})



callTheHerd();

