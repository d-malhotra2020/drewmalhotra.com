document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');

    // Example: Pause video on click
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
