(function dragndrop() {
  let xpos = '';
  let ypos = '';
  let decoSticker = '';

  function resetZ() {
    const imgEl = document.querySelectorAll('#sticker-container .deco-stickers');
    for (let i = imgEl.length - 1; i >= 0; i--) {
      imgEl[i].style.zIndex = 5;
    }
  }
  
  function moveStart(e) {
    decoSticker = e.target;
    xpos = e.offsetX === undefined ? e.layerX : e.offsetX;
    ypos = e.offsetY === undefined ? e.layerY : e.offsetY;
    decoSticker.style.zIndex = 10;
  }

  function moveDragOver(e) {
    e.preventDefault();
  }

  function moveDrop(e) {
    e.preventDefault();
    decoSticker.style.left = e.pageX - xpos + 'px';
    decoSticker.style.top = e.pageY - ypos + 'px';
  }
  
  function touchStart(e) {
    e.preventDefault();
    const decoSticker = e.target;
    const touch = e.touches[0];
    let moveOffsetX = decoSticker.offsetLeft - touch.pageX;
    let moveOffsetY = decoSticker.offsetTop - touch.pageY;
    resetZ();
    decoSticker.style.zIndex = 10;

    decoSticker.addEventListener('touchmove', function() {
      let posX = touch.pageX + moveOffsetX;
      let posY = touch.pageY + moveOffsetY;
      decoSticker.style.left = posX + 'px';
      decoSticker.style.top = posY + 'px';
    }, false);
  }

  document.querySelector('.container').addEventListener('dragstart', moveStart, false);
  document.querySelector('.container').addEventListener('dragover', moveDragOver, false);
  document.querySelector('.container').addEventListener('drop', moveDrop, false);
  document.querySelector('.container').addEventListener('touchstart', touchStart, false);

})();