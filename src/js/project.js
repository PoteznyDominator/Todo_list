
const sidebar_node = document.querySelector(".sidebar");
const popup =  document.querySelector(".popup");
const board = document.querySelector(".list-board");

export default class project_object {

  constructor(name,desc) {
    this.name = name;
    this.desc = desc;

    let name_class = this.name.replace(/\s/g, '');
    const project_item = `
    <button class="section-name ${name_class}">
    <p>${this.name}</p>
    </button>`;
    sidebar_node.insertAdjacentHTML('beforeend',project_item);
    popup.classList.remove('active');
    document.body.style.overflow = "visible";
    const project_sideBar = document.querySelector(`.${name_class}`);
    project_sideBar.addEventListener('click', () => {
      let project_list = document.querySelectorAll('.section-name');
      project_list.forEach(element => {
        element.classList.remove('active');
      });
      project_sideBar.classList.add('active');
      this.show_project();
    });
  }

  show_project() {
    board.innerHTML = "";
    const project_wall = `
    <button class="edit-btn"><i class="far fa-edit"></i></button>
    <button class="delete-btn"><i class="fas fa-times"></i></button>
    <h1 class="name">${this.name}</h1>
    <p class="desc">${this.desc}</p>
    <hr>
    <button class="add-ToDo"><i class="fas fa-plus"></i> Create new</button>`;
    board.insertAdjacentHTML("beforeend", project_wall);
  }
}