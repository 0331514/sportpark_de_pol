function scrollPage() {
  const scrollHeight = document.body.scrollHeight;
  const duration = 2000;
  const step = 10; 

  let currentPosition = 0;

  function scrollStep() {
    currentPosition += step;
    window.scrollTo(0, currentPosition);

    if (currentPosition < scrollHeight) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

setTimeout(scrollPage, 12000); 

