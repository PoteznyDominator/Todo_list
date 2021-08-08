import './style.css';
import new_project from './js/create_project';
const add_btn = document.querySelector(".add-btn");

add_btn.addEventListener('click',() => {
  document.body.style.overflow = "hidden";
  popup.classList.add('active');
});


/**************************************/
//popup elements
const submit_btn = document.querySelector(".create-project");
const alert_box = document.querySelector(".alert");
const alert_box_close = document.querySelector(".close-alert");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

close.addEventListener('click',()=>{
  popup.classList.remove('active');
  if(alert_box.classList.contains('move')){
    alert_box.classList.remove('move');
  }
  document.body.style.overflow = "visible";
});

alert_box_close.addEventListener('click',() => {
  alert_box.classList.remove('move');
})

//maybe in future make some async from this.
submit_btn.addEventListener('click',() => {
  new_project();
});
/**************************************/

/**************************************/
//sidebar resize

const resizer = document.querySelector(".resize");
const sidebar = document.querySelector(".sidebar");

resizer.addEventListener("mousedown", (event) => {
  document.addEventListener("mousemove", resize, false);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", resize, false);
  }, false);
});

function resize(e) {
  const size = `${e.x}px`;
  sidebar.style.flexBasis = size;
}

/**************************************/

/**************************************/
// toggle button

const toggle = document.querySelector(".toggle");

toggle.addEventListener('click', () =>{
  if(sidebar.classList.contains('hide')){
    sidebar.classList.remove('hide');
    resizer.classList.remove('hide');
  }
  else{
    sidebar.classList.add('hide');
    resizer.classList.add('hide');
  }
})

/**************************************/