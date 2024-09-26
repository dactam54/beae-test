

const paths = [
    "./assets/slide_1.jpg",
    "./assets/video.mp4",
];

let currentPathIndex = 0;
const mediaPlayer = document.getElementById('mediaPlayer');
const mediaImage = document.getElementById('mediaImage');

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

    currentPathIndex = (currentPathIndex + 1) % paths.length;
}

updatePath();
let delayTime = 5000
setInterval(updatePath, delayTime);
