import swal from 'sweetalert';

const initSweetalert = (selector, options = {}, callback = () => {}) =>
 {
  const swalButton = document.querySelectorAll(selector);
  if (swalButton.length) {
    swalButton.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        swal(options).then(callback);
      });
    })
  }
};

export { initSweetalert };
