let add = document.querySelectorAll("button")[0];
let clear = document.querySelectorAll("button")[1];
let shoppingListInput = document.querySelector("input");
let list = document.getElementById("list");

function push(){
  let shoppingList = document.createElement("li");
  shoppingList.innerHTML = shoppingListInput.value + "&ensp;" + "&ensp;"+ "&ensp;" + "&ensp;"+ "&ensp;"
  + "<input type='checkbox'>Bought" +
  "<input type='checkbox'>Delete"
  list.appendChild(shoppingList);
  shoppingListInput.value = "";
};

function deleteAll(){
  document.getElementById("list").remove();
}
add.addEventListener('click', push);

clear.addEventListener('click', deleteAll);
