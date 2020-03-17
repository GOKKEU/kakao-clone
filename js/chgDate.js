function boxmouseWheel(e) {
  const wheel = e.wheelDelta;

  if (wheel > 0) {
    console.log("up");

    const node = document.querySelector(".month-list");

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    console.dir(node.children.item(0).innerHTML);

    if (node.children.item(0).innerHTML === "1") {
      li1.innerHTML = 12;
      li2.innerHTML = parseInt(node.children.item(0).innerHTML);
      li3.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
    }

    if (node.children.item(0).innerHTML === "12") {
      //11 12 1
      li1.innerHTML = parseInt(node.children.item(0).innerHTML) - 1;
      li2.innerHTML = parseInt(node.children.item(0).innerHTML);
      li3.innerHTML = 1;
    }
    console.log(li1.innerHTML + "?");
    if (li1.innerHTML === "") {
      li1.innerHTML = parseInt(node.children.item(0).innerHTML) - 1;
      li2.innerHTML = parseInt(node.children.item(0).innerHTML);
      li3.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
    }

    //모두 지우기
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }

    node.appendChild(li1);
    node.appendChild(li2);
    node.appendChild(li3);
  } else {
    const node = document.querySelector(".month-list");

    const pli1 = document.createElement("li");
    const pli2 = document.createElement("li");
    const pli3 = document.createElement("li");

    console.dir(node.children.item(2));
    //  10 11 12 > 11 12 1
    if (node.children.item(0).innerHTML === "10") {
      pli1.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
      pli2.innerHTML = parseInt(node.children.item(0).innerHTML) + 2;
      pli3.innerHTML = 1;
    }
    //11 12 1-> 12 1 2
    if (node.children.item(0).innerHTML === "11") {
      //91011

      pli1.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
      pli2.innerHTML = parseInt(node.children.item(0).innerHTML) - 10;
      pli3.innerHTML = parseInt(node.children.item(0).innerHTML) - 9;
    }

    //12 1 2 > 123
    if (node.children.item(0).innerHTML === "12") {
      pli1.innerHTML = parseInt(node.children.item(0).innerHTML) - 11;
      pli2.innerHTML = parseInt(node.children.item(0).innerHTML) - 10;
      pli3.innerHTML = parseInt(node.children.item(0).innerHTML) - 9;
    }

    console.log(pli1.innerHTML + "?");
    if (pli1.innerHTML === "") {
      pli1.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
      pli2.innerHTML = parseInt(node.children.item(0).innerHTML) + 2;
      pli3.innerHTML = parseInt(node.children.item(0).innerHTML) + 3;
    }

    //모두 지우기
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }

    node.appendChild(pli1);
    node.appendChild(pli2);
    node.appendChild(pli3);
  }
}

function yearBoxmouseWheel(e) {
  const wheelyear = e.wheelDelta;

  if (wheelyear < 0) {
    console.log("down");
    const node = document.querySelector(".year-list");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    if (parseInt(node.children.item(0).innerHTML).toString() === "2028") {
      return;
    }

    li1.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
    li2.innerHTML = parseInt(node.children.item(0).innerHTML) + 2;
    li3.innerHTML = parseInt(node.children.item(0).innerHTML) + 3;

    //모두 지우기
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }

    node.appendChild(li1);
    node.appendChild(li2);
    node.appendChild(li3);
  } else {
    const node = document.querySelector(".year-list");

    const pli1 = document.createElement("li");
    const pli2 = document.createElement("li");
    const pli3 = document.createElement("li");
    if (parseInt(node.children.item(0).innerHTML).toString() === "2000") {
      return;
    }

    pli1.innerHTML = parseInt(node.children.item(0).innerHTML) - 1;
    pli2.innerHTML = parseInt(node.children.item(0).innerHTML);
    pli3.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;

    //모두 지우기
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }

    node.appendChild(pli1);
    node.appendChild(pli2);
    node.appendChild(pli3);
  }
}

function dayBoxmouseWheel(e, lastNum, target) {
  const wheel = e.wheelDelta;
  const node = document.querySelector(target);
  const nodetext = node.children.item(0).innerHTML;

  if (wheel < 0) {
    console.log("down");

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    if (nodetext === (lastNum - 2).toString()) {
      console.log(nodetext + "들어옴");

      li1.innerHTML = parseInt(nodetext) + 1;
      li2.innerHTML = parseInt(nodetext) + 2;
      li3.innerHTML = 1;
    }

    if (nodetext === (lastNum - 1).toString()) {
      //11 12 1
      li1.innerHTML = parseInt(nodetext) + 1;
      li2.innerHTML = 1;
      li3.innerHTML = 2;
    }
    if (nodetext === lastNum.toString()) {
      //11 12 1
      li1.innerHTML = 1;
      li2.innerHTML = 2;
      li3.innerHTML = 3;
    }
    if (li1.innerHTML === "") {
      li1.innerHTML = parseInt(nodetext) + 1;
      li2.innerHTML = parseInt(nodetext) + 2;
      li3.innerHTML = parseInt(nodetext) + 3;
    }

    //모두 지우기
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }

    node.appendChild(li1);
    node.appendChild(li2);
    node.appendChild(li3);
  } else {
    const pli1 = document.createElement("li");
    const pli2 = document.createElement("li");
    const pli3 = document.createElement("li");

    console.dir(node.children.item(2));
    // 123 last 12
    if (node.children.item(0).innerHTML === "1") {
      pli1.innerHTML = lastNum;
      pli2.innerHTML = 1;
      pli3.innerHTML = 2;
    }
    //29 1 2 > 28 29 1
    if (node.children.item(0).innerHTML === lastNum.toString()) {
      pli1.innerHTML = lastNum - 1;
      pli2.innerHTML = lastNum;
      pli3.innerHTML = 1;
    }
    //28 29 1  27 28 29
    if (node.children.item(0).innerHTML === (lastNum - 1).toString()) {
      console.log("들어와?");
      pli1.innerHTML = lastNum - 2;
      pli2.innerHTML = lastNum - 1;
      pli3.innerHTML = lastNum;
    }
    //27 28 29  >26 27 28

    console.log(pli1.innerHTML + "?");
    if (pli1.innerHTML === "") {
      pli1.innerHTML = parseInt(nodetext) - 1;
      pli2.innerHTML = parseInt(nodetext);
      pli3.innerHTML = parseInt(nodetext) + 1;
    }

    //모두 지우기
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }

    node.appendChild(pli1);
    node.appendChild(pli2);
    node.appendChild(pli3);
  }
}

document
  .querySelector(".month-list")
  .addEventListener("mousewheel", function(e) {
    boxmouseWheel(e);
    chgDayList();
  });
document
  .querySelector(".year-list")
  .addEventListener("mousewheel", function(e) {
    yearBoxmouseWheel(e);
  });
document.querySelector(".day-list").addEventListener("mousewheel", function(e) {
  //마지막해값

  const day = getLastDay();
  dayBoxmouseWheel(e, day, ".day-list");
});

//중간의 날짜를 받아서 확인버튼 누르면 input text에 전송
//month box에 변화 ->
//L-2 L-1 마지막날
// L-1 마지막날 L-2
// 마지막날 1 2

function getLastDay() {
  const chekedM = document.querySelector(".month-list").children.item(1)
    .innerText; //선택된달의

  const cheekedMonth = document.querySelector(".month-list").children.item(1)
    .innerText;
  const cheekedYear = document.querySelector(".year-list").children.item(1)
    .innerText;
  const lastDay = new Date(cheekedYear, cheekedMonth, 0).getDate();
  return lastDay;
}

function chgDayList() {
  const day = getLastDay(); //마지막 받아서
  const dayList = document.querySelector(".day-list");

  //itme < day && 28<=day<=31 :28<29 28<30 28<31 29<30 29<31 30<31
  //item > day
  console.dir(dayList);
  for (let i = 0; i < dayList.children.length; i++) {
    const item = dayList.children.item(i).innerText;
    console.dir(day);
    console.dir(parseInt(item) + "," + i);

    if (i === 1) {
      if (parseInt(item) === 1) {
        //모두 지우기
        while (dayList.hasChildNodes()) {
          dayList.removeChild(dayList.firstChild);
        }

        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = day;
        li2.innerText = 1;
        li3.innerText = 2;

        dayList.appendChild(li1);
        dayList.appendChild(li2);
        dayList.appendChild(li3);

        console.log("두번쨍에1" + day);
        console.dir(dayList.children.item(0));
        break;
      }
    }
    if (i === 2) {
      if (parseInt(item) === 1) {
        //모두 지우기
        while (dayList.hasChildNodes()) {
          dayList.removeChild(dayList.firstChild);
        }

        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = day - 1;
        li2.innerText = day;
        li3.innerText = 1;

        dayList.appendChild(li1);
        dayList.appendChild(li2);
        dayList.appendChild(li3);

        break;
      }
    }

    if (day < item) {
      //28<;30  28<31
      console.log(day + "<" + item);
      if (i === 2) {
        while (dayList.hasChildNodes()) {
          dayList.removeChild(dayList.firstChild);
        }

        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = day - 2;
        li2.innerText = day - 1;
        li3.innerText = day;

        dayList.appendChild(li1);
        dayList.appendChild(li2);
        dayList.appendChild(li3);
        break;
      }
    }
  }
}
//확인버튼 클릭시 해당값을 시작 input박스에 보냄
//