(function () {

  const loadVideo = () => {
    const container = document.querySelector('.video-container');
    const videoId = container.getAttribute('data-video');
    const iframe = document.createElement('iframe');

    iframe.allowFullscreen = true;
    iframe.frameBorder = '0px';
    iframe.height = '100%';
    iframe.width = '100%';
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    container.appendChild(iframe);
  };

  loadVideo();
})();
