const menuDiv = document.querySelector(".menu-button");
const askUserDiv = document.querySelector(".ask-user");
const formDiv = document.querySelector(".form");
const submitButton = document.querySelector("#submitButton");
let menuHeader;
let menuItems = [];


const createMenu = function(){
    const newMenuDiv = document.createElement("div");
    newMenuDiv.classList.add("menu");
    const menuHeaderDiv = document.createElement("div");
    menuHeaderDiv.classList.add("menu-header");
    menuHeaderDiv.textContent = menuHeader;
    newMenuDiv.appendChild(menuHeaderDiv);
    for(let i=0;i<menuItems.length;i+=1){
        const menuItemDiv =  document.createElement("div");
        menuItemDiv.classList.add("menu-item");
        menuItemDiv.textContent = menuItems[i];
        newMenuDiv.appendChild(menuItemDiv);
    }
    const menuContainer = document.querySelector(".menu-container");
    menuContainer.appendChild(newMenuDiv);
}
const dropDownMenuHandler = function () {
  openForm();
};

const openForm = function (askUserData = "header") {
  if (formDiv.classList.contains("hidden")) {
    formDiv.classList.remove("hidden");
  }
  askUserDiv.textContent = `enter menu ${askUserData}`;
};

const formSubmitHandler = function (event) {
  event.preventDefault();
  if (!formDiv.classList.contains("hidden")) {
    formDiv.classList.add("hidden");
  }
  const form = document.forms.createMenu;
  const formData = new FormData(form);
  console.log(formData.get("item"));
  if (askUserDiv.textContent === "enter menu header") {
    menuHeader = formData.get("data");
  } else if (askUserDiv.textContent === "enter menu item") {
    menuItems.push(formData.get("data"));
  }
  if (formData.get("data") !== "***") {
    form.reset();
    openForm("item");
  }else{
    createMenu();
  }
  form.reset();
  
};

menuDiv.addEventListener("click", dropDownMenuHandler);
submitButton.addEventListener("click", formSubmitHandler);
