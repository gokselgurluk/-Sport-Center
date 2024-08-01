// HEADER
// to change the background of the header when scrolling:
window.addEventListener("scroll", (event) => {
    const header = document.querySelector(".header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { 
        header.style.backgroundColor = "#355592";
    } else {
        header.style.backgroundColor = "";
    }
});
// C) CLASSES SECTION
// C1) OUR CLASSES ARTICLE
//Access the relevant section:
const classContent = document.querySelector(".class-content");

//Preparing the contents of the buttons and adding them to HTML:
const yogaFunc = () => {
    classContent.innerHTML = `<div class="class-text">
    <h4>Why yoga?</h4> 
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem totam reprehenderit atque quod labore ad autem harum, aliquam quidem similique assumenda? Laboriosam similique quo dolores laborum at nulla dignissimos corrupti.</p>
    <h4>When comes yoga your time?</h4> 
    <p>Saturday-Sunday: 8:00am-10:00am</p>
    <p>Monday-Tuesday: 10:00am-12:00am</p>
    <p>Wednesday-Friday: 3:00am-6:00am</p>
    </div>

    <img class="class-img" src="./images/yoga.jpg" alt="">`
};
const groupFunc = () => {
    classContent.innerHTML = `
    <img class="class-img" src="./images/group.webp" alt="">
    <div class="class-text">
    <h4>Group classes</h4> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam dolores, vitae dicta in harum molestias vel, dolor asperiores veritatis assumenda at accusamus neque repudiandae deserunt corporis incidunt, cupiditate a nemo perspiciatis exercitationem impedit aliquid veniam. Fuga sequi voluptas, quasi explicabo reprehenderit provident quo excepturi sapiente ex quae labore dolorem.</p>
    </div>`
};
const soloFunc = () => {
    classContent.innerHTML = `<div class="class-text">
    <h4>Solo lessons</h4> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    <p>Velit, ducimus sint hic corporis ipsam nobis.</p>
    <p>Eum ipsa possimus cum aspernatur vel ad.</p>
    <p>Quasi cupiditate, amet libero necessitatibus accusantium ex.</p>
    </div>

    <img class="class-img" src="./images/solo.jpg" alt="">`
};
const stretchingFunc = () => {
    classContent.innerHTML =  `
    <img class="class-img" src="./images/stret.webp" alt="">
    <div class="class-text">
    <h4>Benefits of stretching exercises</h4> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam!</p>
    <p>Ullam reiciendis debitis,  sint molestias praesentium earum odit?</p>
    <h4>Before and after exercise</h4> 
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas mollitia cumque illo saepe minima laborum recusandae porro obcaecati delectus amet!</p>
    </div>`
};
// To enter the class where the buttons are located and listen for the click event:
let classBtn = document.querySelector(".class-btn");
classBtn.addEventListener("click", selectBtn);

// Selecting a button and changing the content of the selected button:
function selectBtn(event) {
    const selectedBtn = event.target;
    const btns = document.querySelectorAll(".class-btn button");

    // To change the style of the selected button:
    btns.forEach(button => {
        button.classList.remove("selected"); // remove 'selected' class from all buttons
    });

    selectedBtn.classList.add("selected"); // add 'selected' class to the clicked button

    // selected button functions:
    if (selectedBtn.id === "yoga") {
        yogaFunc();
    } else if (selectedBtn.id === "group") {
        groupFunc();
    } else if (selectedBtn.id === "solo") {
        soloFunc();
    } else if (selectedBtn.id === "stretching") {
        stretchingFunc();
    }
}



// C) CLASSES SECTION
// C2) .bmi-calculator
// definitions and variable assignments:
const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");
const indicator = document.querySelector(".indicator");

//adding event listeners:
inputHeight.addEventListener("keypress", (event) => {
    const key = event.key;
    if (key === "Enter") {
        calculator();
    }
});

inputWeight.addEventListener("keypress", (event) => {
    const key = event.key;
    if (key === "Enter") {
        calculator();
    }
});

//creating a calculator function:
function calculator() {
    //Convert string values to type number:
    let weight = parseInt(inputWeight.value);
    let height = parseInt(inputHeight.value);

    //conditions and processes:
    if (weight && height && weight > 0 && height > 0) {
        // bmi calculation method:
        let result = weight / ((height / 100) ** 2);

        //If there are weight and height values and these values are greater than zero, do this; otherwise, give an alert:
        if (result <= 18.5) {
            indicator.style.left = "16%";
        } else if (result > 18.5 && result <= 24.9) {
            indicator.style.left = "29%";
        } else if (result > 25 && result <= 29.9) {
            indicator.style.left = "47%";
        } else if (result > 30 && result <= 34.9) {
            indicator.style.left = "62%";
        } else if (result > 35 && result <= 39.9) {
            indicator.style.left = "78%";
        } else if (result > 39.9) {
            indicator.style.left = "85%";
        }
    } else {
        alert("Please enter a valid value.");
    }
}
// D) TRAINER SECTION
//D1) .trainers
//trainer img background hover:
const trainerImg = document.querySelectorAll(".trainers-gallery img");
const trainerBg = document.querySelectorAll('.trainer-bg');
const trainerTexts = document.querySelectorAll(".trainer-text");

trainerImg.forEach(img => {
    img.addEventListener('mouseenter', () => {

        const bg = img.closest('.trainer-1, .trainer-2, .trainer-3').querySelector('.trainer-bg');
        bg.style.clipPath = "polygon(0% 30%, 30% 30%, 30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%)";
        bg.style.width = "106%";
        bg.style.height = "106%";
    });

    img.addEventListener('mouseleave', () => {

        const bg = img.closest('.trainer-1, .trainer-2, .trainer-3').querySelector('.trainer-bg');
        bg.style.clipPath = "";
        bg.style.width = "";
        bg.style.height = "";
    });
});

//trainer img text hover:
trainerImg.forEach((img, index) => {
    img.addEventListener("mouseenter", () => {
        trainerTexts[index].style.opacity = "1";
    });

    img.addEventListener("mouseleave", () => {
        trainerTexts[index].style.opacity = "0";
    });
});

