const changeColor = () => {
  document.querySelector('.header').addEventListener('click', () => {
    document.body.classList.add('bg');
  });
};

changeColor();