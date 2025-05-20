// This script creates a YouTube player with custom loop points for a smoother transition

// Define variables to store the player and loop points
let player;
const loopStartTime = 2; // Start at 2 seconds
const loopEndTime = 58; // End at 58 seconds (adjust as needed)
const videoId = 'A6WNV4apkUo';

// Function to load the YouTube IFrame API
function loadYouTubeAPI() {
  // Create script element
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  
  // Insert the script before the first script tag in the document
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Function called by the YouTube API when it's ready
window.onYouTubeIframeAPIReady = function() {
  // Create the player
  player = new YT.Player('youtube-background', {
    videoId: videoId,
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'showinfo': 0,
      'modestbranding': 1,
      'loop': 0, // We'll handle looping ourselves
      'rel': 0,
      'autohide': 1,
      'mute': 1,
      'start': loopStartTime,
      'disablekb': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// Function called when the player is ready
function onPlayerReady(event) {
  // Start playing the video
  event.target.playVideo();
  
  // Check video position every 200ms
  setInterval(checkTime, 200);
}

// Function called when the player's state changes
function onPlayerStateChange(event) {
  // If the video ended, restart it from the loop start point
  if (event.data === YT.PlayerState.ENDED) {
    player.seekTo(loopStartTime);
    player.playVideo();
  }
}

// Function to check the current play time and reset if needed
function checkTime() {
  if (player && player.getCurrentTime) {
    const currentTime = player.getCurrentTime();
    
    // If the video reached our end point, go back to the start point
    if (currentTime >= loopEndTime) {
      player.seekTo(loopStartTime);
    }
  }
}

// Load the API when the document is ready
document.addEventListener('DOMContentLoaded', loadYouTubeAPI);