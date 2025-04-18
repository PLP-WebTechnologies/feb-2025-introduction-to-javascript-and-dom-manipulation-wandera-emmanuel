document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("text").textContent = "new updates!";
});
document.getElementById("changeTextBtn").addEventListener("click", function() {
    let textElement = document.getElementById("text");
    textElement.textContent = "Text changed!";
    textElement.style.color = "blue"; 
    textElement.style.fontSize = "20px"; 
});
document.getElementById("changeTextBtn").addEventListener("click", function() {
    let newElement = document.createElement("p");
    newElement.textContent = "A new paragraph was added!";
    document.body.appendChild(newElement);
});
