// YouTube API will call this function when the API is ready
function onYouTubeIframeAPIReady() {
  // Create the player
  const player = new YT.Player('youtube-player', {
    videoId: 'A6WNV4apkUo',
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'showinfo': 0,
      'rel': 0,
      'iv_load_policy': 3,
      'fs': 0,
      'modestbranding': 1,
      'disablekb': 1,
      'loop': 1,
      'playlist': 'A6WNV4apkUo',
      'mute': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// When the player is ready
function onPlayerReady(event) {
  event.target.playVideo();
  // Set quality to highest available
  event.target.setPlaybackQuality('hd1080');
}

// When the player state changes
function onPlayerStateChange(event) {
  // If the video ends (state = 0), we'll restart it immediately to create a smoother loop
  if (event.data === YT.PlayerState.ENDED) {
    event.target.seekTo(0);
    event.target.playVideo();
  }
  
  // If the video is playing, monitor the progress to create a crossfade loop
  if (event.data === YT.PlayerState.PLAYING) {
    checkForLoop(event.target);
  }
}

// Monitor video progress and create a smooth crossfade at the end
function checkForLoop(player) {
  // Clear any existing interval
  if (window.loopInterval) {
    clearInterval(window.loopInterval);
  }
  
  // Set up an interval to check the current time
  window.loopInterval = setInterval(() => {
    const duration = player.getDuration();
    const currentTime = player.getCurrentTime();
    
    // When we're near the end (5 seconds before end), prepare for crossfade
    if (duration - currentTime < 5) {
      // Create crossfade effect by slowly decreasing opacity
      const videoContainer = document.getElementById('youtube-background');
      videoContainer.style.opacity = (duration - currentTime) / 5;
      
      // If we're very close to the end (less than 0.5 seconds)
      if (duration - currentTime < 0.5) {
        // Reset to beginning with crossfade
        player.seekTo(0);
        // Restore opacity
        setTimeout(() => {
          videoContainer.style.opacity = 1;
        }, 100);
      }
    }
  }, 100);
}