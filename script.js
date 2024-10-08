

const paths = [
    "./assets/slide_1.jpg",
    "./assets/video.mp4",
];

const textPaths = [
    {
        title: "Send and save",
        description: "Huge Savings! Get ready to transform your space with our exclusive 50% off sale."
    }, {
        title: "Upgrade your living room",
        description: "Revamp your living space with our exclusive sale! From plush sofas to elegant coffee tables, discover unbeatable deals on living room furniture."
    }
]

let currentPathIndex = 0;
const mediaPlayer = document.getElementById('mediaPlayer');
const mediaImage = document.getElementById('mediaImage');
const overlayTitle = document.getElementById('overlayTitle');
const overlayParagraph = document.getElementById('overlayParagraph');
const btnDots = document.querySelectorAll('.btn');

btnDots.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentPathIndex = index;
        console.log('currentPathIndex', currentPathIndex);
        updatePath();
    });
});

function updatePath() {
    const path = paths[currentPathIndex];
    if (path.endsWith('.mp4')) {
        mediaPlayer.src = path;
        mediaPlayer.style.display = 'block';
        mediaImage.style.display = 'none';
        mediaPlayer.play();

        console.log('playing video');
    } else if (path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.png')) {
        mediaImage.src = path;
        mediaImage.style.display = 'block';
        mediaPlayer.style.display = 'none';
        console.log('showing image');
    }

    overlayTitle.innerText = textPaths[currentPathIndex].title;
    overlayParagraph.innerText = textPaths[currentPathIndex].description;

    btnDots.forEach((btn, index) => {
        if (index === currentPathIndex) {
            btn.classList.add('btn-active');
        } else {
            btn.classList.remove('btn-active');
        }
    });
    currentPathIndex = (currentPathIndex + 1) % paths.length;
}

updatePath();
let delayTime = 5000
setInterval(updatePath, delayTime);



//Slide + Touch Mobile
function imageSlider(containerSelector, imagesSelector, prevSelector, nextSelector, itemsPerView, scrollStep,) {

    const currentWindowWidth = window.innerWidth;
    if (currentWindowWidth < 480) {
        return;
    }
    console.log(containerSelector, imagesSelector, prevSelector, nextSelector)
    const container = document.querySelector(containerSelector);
    const images = container.querySelectorAll(imagesSelector);

    let currentIndex = 0;

    if (images.length === 0 || itemsPerView >= images.length) {
        return;
    }

    function showImages(startIndex) {
        images.forEach((item, index) => {
            item.style.display = (index >= startIndex && index < startIndex + itemsPerView) ? 'block' : 'none';
        });
    }
    const nextButton = document.querySelector(nextSelector);
    const prevButton = document.querySelector(prevSelector);

    function updateButtonStates() {
        if (currentIndex === 0) {
            prevButton.setAttribute('disabled', 'true');
        } else {
            prevButton.removeAttribute('disabled');
        }

        if (currentIndex >= images.length - itemsPerView) {
            nextButton.setAttribute('disabled', 'true');
        } else {
            nextButton.removeAttribute('disabled');
        }
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex + scrollStep < images.length - itemsPerView + 1) {
            currentIndex += scrollStep;
        } else {
            currentIndex = images.length - itemsPerView;
        }
        showImages(currentIndex);
        updateButtonStates();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex - scrollStep >= 0) {
            currentIndex -= scrollStep;
        } else {
            currentIndex = 0;
        }
        showImages(currentIndex);
        updateButtonStates();
    });

    updateButtonStates();
    showImages(currentIndex);
}
imageSlider('#section-3 .container', '.section-3-item', '.prev', '.next', 6, 1);
imageSlider('.section-6 .container', '.section-6-item', '.prev6', '.next6', 6, 1);
imageSlider('.section-9 .container', '.section-9-item', '.prev9', '.next9', 6, 1);

imageSlider('#section-11 .container', '.section-11-item', '.prev11', '.next11', 6, 1);


imageSlider('#section-10 .container', '.section-10-item', '.prev10', '.next10', 4, 1);

const imageColors = [
    {
        text: 'Natural',
        path: './assets/v1.jpg',
        price: '$299.99',
        sale: '$399.99',
        color: '#f0cb90'
    },
    {
        text: 'Black',
        path: './assets/v2.jpg',
        price: '$279.99',
        sale: '$399.99',
        color: '#000000'
    }
];

function setActiveButton(colorButtons, buttons, srcImage, textImage, imageColors, indexActive) {

    let currentWindowWidth = window.innerWidth;
    colorButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            colorButtons.forEach((btn, i) => {
                if (i === index) {

                    if (currentWindowWidth > 480) {
                        btn.classList.add('active');
                        buttons[i].classList.add('active');
                        buttons[index].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                    } else {
                        btn.classList.add('active');
                        buttons[i].classList.remove('active');
                        buttons[index].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                    }
                } else {
                    btn.classList.remove('active');
                    buttons[i].classList.remove('active');
                }
            });
            document.querySelector('.price').innerText = imageColors[index].price;

            srcImage.src = imageColors[index].path;
            textImage.innerHTML = `
            <label>Color :</label>
            <h2>${imageColors[index].text}</h2>
            ` || ` <label>Color :</label>
            <h2>${imageColors[indexActive].text}</h2>`
        });

    });
}

function setImage(imageColors, elementSelectors, buttonSelectors) {
    if (!Array.isArray(elementSelectors)) {
        elementSelectors = [elementSelectors];
    }


    elementSelectors.forEach(selector => {
        const buttons = document.querySelectorAll(selector);
        const srcImage = document.getElementById('src-image');
        const textImage = document.getElementsByClassName('textImage')[0];
        const optionsColor = document.querySelector('.optionsColor')
        let currentWindowWidth = window.innerWidth;
        optionsColor.innerHTML = imageColors.map((item) => {
            return `<div class="color" style="background-color: ${item.color} ;width: 25px; height: 25px"></div>`;
        }).join('');

        const colorButtons = document.querySelectorAll(buttonSelectors);

        let indexActive = 0

        textImage.innerHTML = `
        <label class="label">Color : </label>
        <h2>${imageColors[indexActive].text}</h2>`;
        colorButtons[indexActive].classList.add('active');


        if (currentWindowWidth > 480) {
            buttons[indexActive].classList.add('active');
        } else {
            buttons[indexActive].classList.remove('active');
        }


        setActiveButton(colorButtons, buttons, srcImage, textImage, imageColors, indexActive);
        setActiveButton(buttons, colorButtons, srcImage, textImage, imageColors, indexActive);


    });
}

setImage(imageColors, ['.img-button'], '.optionsColor .color');
