// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


const videoEl = document.querySelector('.video-container'),
      hidePreloaderEl = document.querySelector('.preloader'),
      videoBtnEl = document.querySelector('.switch-btn');

// using the loadeddata event to see when the video has loaded in the DOM
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadeddata_event

videoEl.addEventListener('loadeddata', () => {
  console.log('video has loaded')
  // When the video is ready set a timeout delay of 1.5 seconds before removing the pre-loader
  setTimeout(() => {
    hidePreloaderEl.classList.add('hide-preloader');
  }, "1500")
}, false);

// Wire up the Pause/Play button
// Add Click Event Listener
videoBtnEl.addEventListener('click', () => {
  console.log('clicked');
  // Toggle the slide class
  videoBtnEl.classList.toggle('slide');
  // Check if slide class is applied
  if (videoBtnEl.classList.contains('slide')) {
    videoEl.pause();
  } else {
    videoEl.play();
  };
});