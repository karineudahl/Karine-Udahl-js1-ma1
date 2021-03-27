


// QUESTION 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}


// QUESTION 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";



// QUESTION 3
heading.style.fontSize = "2em";



// QUESTION 4
function addClass() {
    heading.className += "subheading";
}

addClass();

 

// QUESTION 5
const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    
    paragraphs[i].style.color = "red";
    
}



// QUESTION 6 
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";




const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// QUESTION 7 
function listContainer(list) {

    for(let i = 0; i < list.length; i++) {
        console.log(cats[i].name);
    }
}

listContainer(cats);




// QUESTION 8 


function createCats(cats) {

    let html = "";

    for(let i = 0; i < cats.length; i++) {

        let ageMissing = "Age unknown";

        if(cats[i].age) {
            ageMissing = cats[i].age;
        }

        html += `<div class="cat-container">
                    <h5>${cats[i].name}</h5>
                    <p>Age: ${ageMissing}</p>
                </div>`;
    }

    return html;
}

const resultsCats = createCats(cats);
const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = resultsCats; 






















