// ASSIGNMENT TWO JAVASCRIPT

// attempting to follow the code-along by adding some js functionality to the submission of the form, in this case on the contact page

const formEl = document.querySelector("form");

formEl.addEventListener("submit", function(event) {
    event.preventDefault();

    const h2El= document.querySelector("h2");
    h2El.innerHTML = "YOU DID ITTTT";

    console.log("thank u for yr comment");
});
