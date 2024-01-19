document.addEventListener('DOMContentLoaded', function() {
    var videoPlayer = document.getElementById('videoPlayer');
    var videos = ['rocket_launch.mp4', 'satellite.mp4', 'CIA.mp4', 'hubble_telescope.mp4', 'codingprogramming.mp4', 'coding.mp4', 'algorithm.mp4'];
    var currentVideoIndex = 0;

    videoPlayer.src = videos[currentVideoIndex]; // Set initial source
    videoPlayer.play(); // Play the first video

    videoPlayer.addEventListener('ended', function() {
        currentVideoIndex++; // Move to the next video
        if (currentVideoIndex >= videos.length) {
            currentVideoIndex = 0; // Reset to first video if at the end of the array
        }
        videoPlayer.src = videos[currentVideoIndex]; // Change the video source
        videoPlayer.play(); // Play the video
    });
});