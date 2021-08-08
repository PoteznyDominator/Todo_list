import project_object from "./project";
const new_project = () => {
  const name_input = document.querySelector("#name");
  const description_input = document.querySelector("#description");
  const parrent_node = document.querySelector(".sidebar");
  const popup = document.querySelector(".popup");
  const alert_box = document.querySelector(".alert");

  if(name_input.value !== ""){
    let name = name_input.value;
    let desc = description_input.value;
    let name_class = name.replace(/\s/g, '')
    name_input.value = "";
    description_input.value = "";
    let ciap = new project_object(name,desc);

    const project_item = `
    <button class="section-name ${name_class}">
    <p>${name}</p>
    </button>`;
    parrent_node.insertAdjacentHTML('beforeend',project_item);
    popup.classList.remove('active');
    document.body.style.overflow = "visible";

    const project = document.querySelector(`.${name_class}`);
    project.addEventListener('click', () => {
      let project_list = document.querySelectorAll('.section-name');
      console.log(project_list);
      project_list.forEach(element => {
        element.classList.remove('active');
      });
      project.classList.add('active');
      ciap.show_project();
    });
  }
  else{
    alert_box.classList.add('move');
    alert_box.getElementsByTagName('p')[0].innerHTML = "Name can't be empty";
  }
}

export default new_project;