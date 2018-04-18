import renderScreen from './renderScreen';
import greeting from './templates/greeting';

const addGoBackListener = () => {
  const back = document.querySelector(`.back`);

  if (back) {
    back.addEventListener(`click`, () => renderScreen(greeting));
  }
};

export default addGoBackListener;
