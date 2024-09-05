let setup = document.getElementById("setup");
let punchline = document.getElementById("punchline");
let punchlineBtn = document.getElementById("punchlineBtn");
let resetBtn = document.getElementById("resetBtn");



const tellAJoke = () =>{
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => 
        (setup.innerHTML = (data.setup), 
        (joke = data.punchline),
        (punchlineBtn.style.display = "inline",
         punchline.innerHTML = "",
        resetBtn.style.display = "none"
        )
    )
)
    .catch(e => console.log(e))
}

const completeJoke  = () =>{
    punchline.innerHTML = joke;
    if (punchline != ""){
        resetBtn.style.display = "inline";

    }

}

const reset = () => {
    setup.innerHTML = ""; // Clear the setup text
    punchline.innerHTML = ""; // Clear the punchline text
    punchlineBtn.style.display = "none"; // Hide punchline button
    resetBtn.style.display = "none"; 
}