document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField() {
  //cloneNode() clona o elemento HTML
  document.querySelector(".schedule-item").cloneNode(true);

}