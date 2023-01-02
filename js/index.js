console.log("entro")
function toggle(e) {
  console.log(e);
  let button = e.currentTarget;
  let target = button.dataset.target

  document.querySelectorAll(target).forEach((e) => {
    e.classList.toggle("closed");
  });
}

document.addEventListener('DOMContentLoaded', () => {
  //CODIGO INICIAL

  //ACTIVAR COLLAPSE TOGGLES
  document.querySelectorAll(".toggler").forEach((e) => {
    e.addEventListener("click", toggle);
  });
}, false);
