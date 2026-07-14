const buttom = document.querySelector(".add-button");
const inputs = document.querySelectorAll(".input")
const wordlist = document.querySelector(".word-list")

// localStorage 시작 
let savedWords = JSON.parse(localStorage.getItem("words"));

if (savedWords === null) {
    savedWords = [];
}

savedWords.forEach(function (word) {

    const deletebutton = document.createElement("button");

    deletebutton.textContent = "X";

    const div = document.createElement("div");

    div.classList.add("word");

    div.innerHTML = `<span>${word.deutsch}</span>
                     <span>${word.englisch}</span>`;

    div.appendChild(deletebutton);
    wordlist.appendChild(div);

    deletebutton.addEventListener("click", function () {
        div.remove()
        saveWords();
    })

})
// localStorage 끝

buttom.addEventListener("click", function () {
    const deutsch = inputs[0].value;
    const englisch = inputs[1].value;

    if (deutsch === "" || englisch === "") {
        alert("Both fields are required.");
        return;
        
    }
    
    const deletebutton = document.createElement("button");

    deletebutton.textContent = "X";
   

    const div = document.createElement("div");

    div.classList.add("word");

    div.innerHTML  =`<span>${deutsch}</span>
                     <span>${englisch}</span>`;
                     
    div.appendChild(deletebutton);
    wordlist.appendChild(div);

    deletebutton.addEventListener("click", function () {
    div.remove()
    })
    
       // ===== localStorage 추가 =====
    saveWords();

    deletebutton.addEventListener("click", function () {
        div.remove()

        // ===== localStorage 추가 =====
        saveWords();
    })

    inputs[0].value = "";
    inputs[1].value = "";
})

// localStorage 시작 
function saveWords() {

    const words = [];

    document.querySelectorAll(".word").forEach(function (word) {

        const spans = word.querySelectorAll("span");

        words.push({
            deutsch: spans[0].textContent,
            englisch: spans[1].textContent
        });
    });

    localStorage.setItem("words", JSON.stringify(words));

}
// localStorage 끝 

 
    
 