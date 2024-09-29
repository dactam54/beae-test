

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

const imagesPath = [
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


const container = document.querySelector('#section-3 .container');
const images = container.querySelectorAll('.section-3-item');
let currentIndex = 0;
const itemsPerView = 6;
const scrollStep = 2;

function showImages(startIndex) {
    images.forEach((item, index) => {
        item.style.display = (index >= startIndex && index < startIndex + itemsPerView) ? 'block' : 'none';
    });
}

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function updateButtonStates() {
    if (currentIndex === 0) {
        prevButton.setAttribute('disabled', 'true');
    } else {
        prevButton.removeAttribute('disabled');
    }

    // Disable next button if we are at the last image
    if (currentIndex >= images.length - itemsPerView) {
        nextButton.setAttribute('disabled', 'true');
    } else {
        nextButton.removeAttribute('disabled');
    }
}

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex + scrollStep < images.length - itemsPerView + 1) {
        currentIndex += scrollStep;
    } else {
        currentIndex = images.length - itemsPerView;
    }
    showImages(currentIndex);
    updateButtonStates();
});

document.querySelector('.prev').addEventListener('click', () => {
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





// let isDragging = false;
// let startPosition = 0;
// let scrollLeft = 0;

// // Sự kiện cho máy tính (click và kéo)
// container.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     startPosition = e.pageX - container.offsetLeft;  // Lưu vị trí ban đầu của chuột
//     scrollLeft = container.scrollLeft;               // Lưu vị trí scroll hiện tại của container
//     container.classList.add('grabbing');             // Thêm hiệu ứng khi kéo
// });

// container.addEventListener('mouseleave', () => {
//     isDragging = false;
//     container.classList.remove('grabbing');          // Bỏ hiệu ứng khi ra khỏi container
// });

// container.addEventListener('mouseup', () => {
//     isDragging = false;
//     container.classList.remove('grabbing');          // Bỏ hiệu ứng khi thả chuột
// });

// container.addEventListener('mousemove', (e) => {
//     if (!isDragging) return; // Chỉ thực hiện khi đang kéo
//     e.preventDefault();      // Ngăn chặn hành vi mặc định của trình duyệt khi kéo
//     const x = e.pageX - container.offsetLeft; // Lấy vị trí hiện tại của chuột
//     const walk = (x - startPosition) * 1.5;   // Khoảng cách di chuyển (nhân với 1.5 để tăng tốc độ)
//     container.scrollLeft = scrollLeft - walk; // Cập nhật vị trí scroll của container
// });








