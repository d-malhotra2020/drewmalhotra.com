document.addEventListener('DOMContentLoaded', function() {
    var videoPlayer = document.getElementById('videoPlayer');
    var videos = ['VideoFiles/rocket_launch.mp4', 'VideoFiles/satellite.mp4', 'VideoFiles/CIA.mp4',
        'VideoFiles/hubble_telescope.mp4', 'VideoFiles/codingprogramming.mp4', 'VideoFiles/coding.mp4', 'VideoFiles/algorithm.mp4'];
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