// This script creates a YouTube player with seamless looping using two synchronized players

// Define variables for our players and settings
let player1, player2;
let currentPlayer = 1;
let otherPlayer = 2;
const videoId = 'A6WNV4apkUo';
const loopStartTime = 5; // Starting at 5 seconds to avoid intro
const loopEndTime = 58;  // End before any abrupt transitions
const bufferTime = 2;    // Start buffering the next player this many seconds before loop end
const playerReady = { 1: false, 2: false };
let checkInterval;

// Function to load the YouTube IFrame API
function loadYouTubeAPI() {
  // Create script element
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  
  // Insert the script before the first script tag in the document
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Create a container for our two players
function setupPlayerContainer() {
  const container = document.getElementById('youtube-background');
  if (!container) return;
  
  // Create two player divs
  const player1Div = document.createElement('div');
  player1Div.id = 'youtube-player-1';
  player1Div.className = 'absolute inset-0 w-full h-full transition-opacity duration-500';
  player1Div.style.opacity = '1';
  
  const player2Div = document.createElement('div');
  player2Div.id = 'youtube-player-2';
  player2Div.className = 'absolute inset-0 w-full h-full transition-opacity duration-500';
  player2Div.style.opacity = '0';
  
  container.appendChild(player1Div);
  container.appendChild(player2Div);
}

// Function called by the YouTube API when it's ready
window.onYouTubeIframeAPIReady = function() {
  setupPlayerContainer();
  
  // Create the first player
  player1 = new YT.Player('youtube-player-1', {
    videoId: videoId,
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'showinfo': 0,
      'modestbranding': 1,
      'loop': 0,
      'rel': 0,
      'start': loopStartTime,
      'mute': 1,
      'playsinline': 1,
      'disablekb': 1
    },
    events: {
      'onReady': (event) => onPlayerReady(event, 1),
      'onStateChange': (event) => onPlayerStateChange(event, 1)
    }
  });
  
  // Create the second player
  player2 = new YT.Player('youtube-player-2', {
    videoId: videoId,
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'showinfo': 0,
      'modestbranding': 1,
      'loop': 0,
      'rel': 0,
      'start': loopStartTime,
      'mute': 1,
      'playsinline': 1,
      'disablekb': 1
    },
    events: {
      'onReady': (event) => onPlayerReady(event, 2),
      'onStateChange': (event) => onPlayerStateChange(event, 2)
    }
  });
}

// Function called when a player is ready
function onPlayerReady(event, playerNum) {
  playerReady[playerNum] = true;
  
  // Start playing if this is player 1
  if (playerNum === 1) {
    event.target.playVideo();
    
    // Start monitoring playback
    if (!checkInterval) {
      checkInterval = setInterval(checkPlaybackTime, 100);
    }
  }
}

// Function called when a player's state changes
function onPlayerStateChange(event, playerNum) {
  // If the active player ended, swap to the other player
  if (playerNum === currentPlayer && event.data === YT.PlayerState.ENDED) {
    swapPlayers();
  }
}

// Switch between the two players for seamless playback
function swapPlayers() {
  // Determine which player is the current and which is the next
  const currentPlayerObj = currentPlayer === 1 ? player1 : player2;
  const nextPlayerObj = currentPlayer === 1 ? player2 : player1;
  
  // Get the player DOM elements
  const currentPlayerElem = document.getElementById(`youtube-player-${currentPlayer}`);
  const nextPlayerElem = document.getElementById(`youtube-player-${otherPlayer}`);
  
  if (!currentPlayerElem || !nextPlayerElem) return;
  
  // Fade out current player and fade in next player
  currentPlayerElem.style.opacity = '0';
  nextPlayerElem.style.opacity = '1';
  
  // Swap the player indicators
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  otherPlayer = otherPlayer === 1 ? 2 : 1;
  
  // Start the new current player from the beginning
  currentPlayerObj.seekTo(loopStartTime);
  currentPlayerObj.playVideo();
}

// Check the playback time and prepare the next player when needed
function checkPlaybackTime() {
  // Get the current player
  const player = currentPlayer === 1 ? player1 : player2;
  const otherPlayerObj = currentPlayer === 1 ? player2 : player1;
  
  if (!player || !player.getCurrentTime || !playerReady[currentPlayer] || !playerReady[otherPlayer]) {
    return;
  }
  
  const currentTime = player.getCurrentTime();
  
  // When we're close to the end, prepare the next player
  if (currentTime >= loopEndTime - bufferTime && currentTime < loopEndTime) {
    // Prepare the other player to take over
    otherPlayerObj.seekTo(loopStartTime);
    otherPlayerObj.playVideo();
    otherPlayerObj.mute();
  }
  
  // If we've reached the end time, swap players
  if (currentTime >= loopEndTime) {
    swapPlayers();
  }
}

// Initialize our player when the DOM is ready
document.addEventListener('DOMContentLoaded', loadYouTubeAPI);