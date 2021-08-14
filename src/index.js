import './style.css';
import project_object from './js/project';
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

//adding element to projects sidebar
const name_input = document.querySelector("#name");
const description_input = document.querySelector("#description");
let projects_array = [];
//maybe in future make some async from this.
submit_btn.addEventListener('click',()=>{
  createSection();
});
name_input.addEventListener('keypress', (e) => {
  if(e.key === "Enter") {
    createSection();
  }
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

function createSection() {
  let name = name_input.value;
  let desc = description_input.value;
  if(name !== "" && !projects_array.some(project => project.name === name)){
    name_input.value = "";
    description_input.value = "";
    let project = new project_object(name, desc);
    projects_array.push(project);
  } else if(projects_array.some(project => project.name === name)) {
    alert_box.classList.add('move');
    alert_box.getElementsByTagName('p')[0].innerHTML = "This project already exist.";
  } else {
    alert_box.classList.add('move');
    alert_box.getElementsByTagName('p')[0].innerHTML = "Name can't be empty";
  }
}