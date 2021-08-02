const input = document.querySelector(".todo_txt");
const btn = document.querySelector(".btn_submit");
const todoList = document.querySelector(".todo_list");

const addTodo = (e) => {
  e.preventDefault(); // 기존에 각 개체가 가진 성질을 무시 (버튼 클릭시 새로고침 되는 성질 없애기 위함)
  if (input.value.trim().length < 1) {
    // .trim() 으로 공백을 제거
    return;
  }

  const list = document.createElement("li");

  const btnChk = document.createElement("button");
  btnChk.setAttribute("class", "btn_check");
  btnChk.addEventListener("click", (e) => {
    const chkList = e.target.parentElement; // btnChk의 부모요소는 li 태그이다.
    chkList.classList.toggle("on"); // 처음 누를땐 on이라는 클래스 네임이 생기고, 다시 클릭하면 on이라는 클래스 네임이 사라진다. (add, remove 기능을 모두 포함함)
  });

  const btnDel = document.createElement("button");
  btnDel.setAttribute("class", "btn_del");
  btnDel.addEventListener("click", () => {
    todoList.removeChild(list); // list가 지칭하는 li태그를 지우라는 말
  });

  todoList.appendChild(list);
  list.appendChild(btnChk);
  list.insertAdjacentHTML("beforeend", `${input.value}`);
  list.appendChild(btnDel);
  input.value = "";
};

btn.addEventListener("click", addTodo);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
  return;
});
