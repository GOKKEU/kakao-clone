//저장버튼
//시작과 종료의 inpu 데이터를 빋고
//저장을 누르면
//시작: 종료: 내용: obj 만들고
//localstroge에 저장해 놓고
//화면이 로딩될때 년도/월을 확인해서 localstorge에 arr에 오브젝트에 저장되어 있는지 확인
//값이 있다면 1차 배경색 바꾸기
let dateLs = [];
function addSchedule(nodes, position, content) {
  console.log(position + "," + content);
  //span 태그 생성 디자인 추가
  let count = 0;
  for (let i = 0; i < nodes.length; i++) {
    const number = parseInt(nodes.item(i).innerHTML);

    if (number === 1) {
      count++;
    }
    console.log(count);
    console.log(position);
    if (count === 1 && position === number) {
      console.log(position + "," + number);
      const span = document.createElement("span");
      span.innerText = content;
      nodes.item(i).appendChild(span);
      //해당같이
    }
  }
  //2개의 위치를 찾고

  /*저장시 이전화면으로 돌아가기 위해 넓이를 0으로*/
  $(".addToDoList").css("position", "static");
  document.querySelector(".addToDoList").style.width = "0";
}
function printSchedule() {
  dateLs.forEach(function(dateitem) {
    //날짜간의 차이
    //데이터를 -단위로 잘라 저장
    const startArr = dateitem.start.split("-");
    const endArr = dateitem.end.split("-");

    const content = dateitem.text;
    console.log("시작" + startArr + "종료" + endArr);

    const startDate = new Date(
      startArr[0],
      Number(startArr[1]) - 1,
      startArr[2]
    );
    const endDate = new Date(endArr[0], Number(endArr[1]) - 1, endArr[2]);

    const beteeenDay =
      (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;

    if (beteeenDay < 0) {
      alert("날짜를 다시 입력하세요.");
      return;
    }

    //현재 생성된달력 날짜 비교
    const boxList = document.querySelector(".boxwrap").childNodes;
    //year값 비교
    if (startArr[0] !== document.getElementById("year").innerHTML) {
      alert("해당년도 없음");
      return;
    }

    for (let i = 0; i < boxList.length; i++) {
      if (Number(startArr[1]) === Number(boxList.item(i).id)) {
        // addSchedule(startArr,endArr,date);
        alert(Number(startArr[1]) + "해당달에 일정있음");
        const nodes = boxList.item(i).querySelectorAll("li");
        //nodes를 돌면서 일치하는데이터 화면에 디자인
        addSchedule(nodes, Number(startArr[2]), content);
      }
    }
  });
}
function checkLocalStorage() {
  const SETDATE = "setDate";

  localStorage.setItem(SETDATE, JSON.stringify(dateLs));

  printSchedule();
}
document.querySelector(".saveToDoList").addEventListener("click", function() {
  //날짜밑에 span추가
  document.body.style.backgroundColor = "red";
  const startT = document.querySelector(".startTime").querySelector("input");
  const endT = document.querySelector(".endTime").querySelector("input");
  const test = document.querySelector(".text-content");

  const timeObj = {
    start: startT.value,
    end: endT.value,
    text: test.innerHTML
  };

  dateLs.push(timeObj);
  //localstroge
  checkLocalStorage();
});
