const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");

function randomquote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading quote";
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
        .then(response => response.json())
        .then(json => {
            if (json.type === "single") {
                quoteText.innerHTML = json.joke;
            } else {
                quoteText.innerHTML = `${json.setup}<br>${json.delivery}`;
            }
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "New Quote";
        });
}

quoteBtn.addEventListener("click", randomquote);

