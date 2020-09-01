document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField() {
  //cloneNode() clona o elemento HTML
  let fields = document.querySelector(".schedule-item").cloneNode(true);
  document.querySelector("#schedule-items").appendChild(fields);
}