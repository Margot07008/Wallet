
const MOBILE_WIDTH = 720;
const MOBILE_HEIGHT = 1280;

const SIZE = {
  MOBILE: [MOBILE_WIDTH, MOBILE_HEIGHT],
};


export function fit() {

  let  currentWidth = window.innerWidth;
  let  currentHeight = window.innerHeight;


  const initScale = 10;
  let currentScale = 1;

  const [aspectWidth, aspectHeight] = SIZE.MOBILE ;
  if (currentWidth < aspectWidth) {
    currentScale = currentWidth / aspectWidth;
  }
  if (currentHeight < aspectHeight) {
    currentScale = Math.min(currentScale, currentHeight / aspectHeight);
  }

  currentScale = Math.max(currentScale, 0.5);

  document.documentElement.style.fontSize = `${currentScale * initScale}px`;
}