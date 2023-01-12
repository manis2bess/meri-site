console.log("entro")
function toggle(e) {
  console.log(e);
  let button = e.currentTarget;
  let target = button.dataset.target
  target = target.split(",");
  
  target.forEach((t) => {
    document.querySelectorAll(t).forEach((e) => {
      e.classList.toggle("closed");
    });
  });
  
}

function close(e) {
  console.log(e);
  let button = e.currentTarget;
  let target = button.dataset.target

  document.querySelectorAll(target).forEach((e) => {
    e.classList.add("closed");
  });
}

document.addEventListener('DOMContentLoaded', () => {
  //CODIGO INICIAL

  //ACTIVAR COLLAPSE TOGGLES
  document.querySelectorAll(".toggler").forEach((e) => {
    e.addEventListener("click", toggle);
  });

  //ACTIVAR POPUP CLOSE
  document.querySelectorAll(".closer").forEach((e) => {
    e.addEventListener("click", close);
  });
}, false);


