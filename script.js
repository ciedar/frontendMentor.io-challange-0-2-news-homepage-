"use strict";

// INFO
const navBarElements = ["Home", "New", "Popular", "Trending", "Categories"];

const mainSectionObject = {
    img: "./assets/images/image-web-3-desktop.jpg",
    tittle: "The Bright Future of Web 3.0?",
    text: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of thepeople.But is it really fulfilling its promise?",
    button: "Read more"
};

const asideObject = [
    {
        tittle: "Hydrogen VS Electric Cars",
        text: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
        tittle: "The Downsides of AI Artistry",
        text: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        tittle: "Is VC Funding Drying Up?",
        text: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
]



const figureOne = {
    num: "01",
    tittle: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
    img: "./assets/images/image-retro-pcs.jpg"
}
const figureTwo = {
    num: "02",
    tittle: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
    img: "./assets/images/image-top-laptops.jpg"
}

const figureThree = {
    num: "03",
    tittle: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
    img: "./assets/images/image-gaming-growth.jpg"
}


const figures = [figureOne, figureTwo, figureThree];


// nav
const navBarDiv = document.querySelector(".nav-bar-div");
const navBar = document.querySelector(".nav-bar");
// main section
const articleDiv = document.querySelector(".main-section-div");
const asideDiv = document.querySelector(".main-aside-div");
const figure = document.querySelector(".main-figure-div");

// FUNCTIONS



const figureRender = function (object) {
    figure.innerHTML = "";
    object.forEach(function (a) {
        const html = `<div class="figure-div figure-div-${a.num}">
                    <img class="figure-img${a.num}" src="${a.img}" alt="image">
                    <div class="figure-div-text">
                    <h2 class="figure-num figure-num-${a.num}">${a.num}</h2>
                    <h4 class="figure-tittle figure-tittle-${a.num}"> <a href="#">${a.tittle}</a></h4>
                    <p class=" figure-text figure-text-${a.num}"> ${a.text}</p>
                    </div>
                    </div>`


        figure.insertAdjacentHTML("beforeend", html)
    })
}


const navBarListRender = function () {

    for (const value of navBarElements) {
        const html = document.createElement("ul")
        html.innerHTML = `<li class="nav-bar-list-item"><a href="#"> ${value}</a> </li>`;
        navBarDiv.appendChild(html);
    }

    const html = document.createElement("div");
    html.classList.add("nav-bar-div-w");
    html.innerHTML = `<p class="w">W.</p>`;
    navBar.append(html)
}


const mainSectionRender = function (object) {
    articleDiv.innerHTML = "";
    const html = `<img class="main-section-img" src="${object.img}" alt="img">
    <div class="main-section-tittle-div">
    <h2 class="tittle-main">${object.tittle}</h2>
    </div>
    <div class="main-section-text-div">
    <p class="text-main">${object.text}
    </p>
    <button class="text-btn"> ${object.button} </button>
    </div>`;

    articleDiv.insertAdjacentHTML("afterbegin", html);
}
const asideRender = function (object) {
    asideDiv.innerHTML = "";
    for (let i = 0; i < object.length; i++) {
        const html = `<div class="aside-div aside-div-${i}">
        <h2 class="tittle tittle-${i}"> <a href="#" class="tittle"> ${object[i].tittle}</a></h2>
        <p class="text text-${i}"> ${object[i].text} </p>
        </div>`

        asideDiv.insertAdjacentHTML("beforeend", html);
    }
}






// CODE
asideRender(asideObject)
navBarListRender();
mainSectionRender(mainSectionObject);
figureRender(figures);
