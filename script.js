const introScreen = document.getElementById('intro-screen');
const mainContent = document.getElementById('main-content');

setTimeout(() => {
    introScreen.style.display = 'none';
    mainContent.classList.remove('hidden');
}, 4500);

const videoModal = document.getElementById('video-modal');
const mainVideo = document.getElementById('main-video');
const closeBtn = document.getElementById('close-btn');

function openVideo(videoPath) {
    videoModal.classList.remove('hidden');
    mainVideo.src = videoPath;
    mainVideo.play();
}

closeBtn.addEventListener('click', () => {
    videoModal.classList.add('hidden');
    mainVideo.pause();
});
