

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

const images = [
    './assets/section-3--1.jpg',
    './assets/section-3-0.jpg',
    './assets/section-3-1.jpg',
    './assets/section-3-2.jpg',
    './assets/section-3-3.jpg',
    './assets/section-3-4.jpg',
    './assets/section-3-5.jpg',
    './assets/section-3-6.jpg',
]

const textImages = [
    {
        name: "Dining Table",
        price: 1699.99,
        stocks: '5 In stock, hurry up',
        isStock: true
    },
    {
        name: "Oval Dining Table",
        price: 899.99,
        currentPrice: 1499.99,
        stocks: '15 In stock',
        isStock: false

    }
    , {
        name: "Leather Dining Chair",
        price: 299.99,
        currentPrice: 399.99,
        stocks: '10 In stock',
        isStock: true
    },
    {
        name: "Dining Table",
        price: 1699.99,
        stocks: '5 In stock, hurry up',
        isStock: true
    },
    {
        name: "Oval Dining Table",
        price: 899.99,
        currentPrice: 1499.99,
        stocks: '15 In stock',
        isStock: true

    }
    , {
        name: "Leather Dining Chair",
        price: 299.99,
        currentPrice: 399.99,
        stocks: '10 In stock'
    },
    {
        name: "Dining Table",
        price: 1699.99,
        stocks: '5 In stock, hurry up',
        isStock: false
    },
    {
        name: "Oval Dining Table",
        price: 899.99,
        currentPrice: 1499.99,
        stocks: '15 In stock',
        isStock: false
    }

]

const btnPrev = document.getElementsByClassName('prev');
const btnNext = document.getElementsByClassName('next');
const container = document.querySelector('#section-3 .container');

let currentIndex = 0;
const itemsPerView = 6;
const scrollStep = 2;


function createImages(images) {
    container.innerHTML = '';


    images.forEach((src, index) => {
        const div = document.createElement('div');
        div.classList.add('section-3-item');
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Image';
        //Cart
        const addToCart = document.createElement('div');
        addToCart.classList.add('addToCart');
        addToCart.innerHTML = `<button>Quick view</button>`
        div.appendChild(img);
        div.appendChild(addToCart);
        container.appendChild(div);
    });


    // const myDiv = document.createElement('div');
    // myDiv.classList.add('section-3-item');
    // myDiv.innerText = "Dac Tam"

    // container.appendChild(myDiv);


}


function showImages(startIndex) {
    const endIndex = startIndex + itemsPerView;
    const visibleImages = images.slice(startIndex, endIndex);
    createImages(visibleImages);
}

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex + scrollStep < images.length - itemsPerView + 1) {
        currentIndex += scrollStep;
    } else {
        currentIndex = images.length - itemsPerView;
    }
    showImages(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex - scrollStep >= 0) {
        currentIndex -= scrollStep;
    } else {
        currentIndex = 0;
    }
    showImages(currentIndex);
});

let startX = 0;
let endX = 0;

container.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

container.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
});

container.addEventListener('touchend', () => {
    const deltaX = startX - endX;


    if (deltaX > 50) {
        document.querySelector('.next').click();
    }

    else if (deltaX < -50) {
        document.querySelector('.prev').click();
    }
});


showImages(currentIndex);

