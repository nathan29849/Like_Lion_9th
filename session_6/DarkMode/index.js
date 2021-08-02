const linkSetColor = (color) => {
  const alist = document.querySelectorAll("a");
  for (let i = 0; i < alist.length; i++) alist[i].style.color = color;
};

// linkSetColor("white");

// body 글자색 바꾸기
const bodySetColor = (color) => {
  document.querySelector("body").style.color = color;
};

// body 배경색 바꾸기
const bodySetBackgroundColor = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};

const day_night_handler = (self) => {
  if (self.value == "야간모드로 바꾸기") {
    bodySetBackgroundColor("RGB(26,36,54)");
    bodySetColor("white");
    linkSetColor("powderblue");
    self.value = "주간모드로 바꾸기";
  } else {
    bodySetBackgroundColor("white");
    bodySetColor("black");
    linkSetColor("blue");
    self.value = "야간모드로 바꾸기";
  }
};
