const KEY_CODES = {
  leftArrow: 37,
  rightArrow: 39
};

const main = document.querySelector(`main.central`);
const templates = document.querySelectorAll(`template`);

let currentScreen = 0;

const setScreen = (num) => {
  main.innerHTML = templates[num].innerHTML;
};

const navigate = (direction) => {
  if (currentScreen > 0 && direction === `prev`) {
    currentScreen--;
  } else if (currentScreen < templates.length - 1 && direction === `next`) {
    currentScreen++;
  } else {
    return;
  }

  setScreen(currentScreen);
};

setScreen(currentScreen);

document.addEventListener(`keydown`, (e) => {
  if (e.altKey && e.keyCode === KEY_CODES.leftArrow) {
    navigate(`prev`);
  }

  if (e.altKey && e.keyCode === KEY_CODES.rightArrow) {
    navigate(`next`);
  }
});
