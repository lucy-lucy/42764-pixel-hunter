const main = document.querySelector(`main.central`);

const renderScreen = (block) => {
  main.innerHTML = ``;
  main.appendChild(block);
};

export default renderScreen;
