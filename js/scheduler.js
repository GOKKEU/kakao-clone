//데이터 추가
// .startTime  .endTime 를 마우스 호버 했을때
//dox 애니메이션으로 위로 올라옴 https://codepen.io/osublake/pen/YrXdGZ
//input 추가
function inputAdd() {
  //오늘 날짜 설정
  const month = currentMonth < 10 ? "0" + currentMonth : currentMonth;
  const today = currentYear + "-" + month + "-" + date.getDate();
  const input = document.querySelector(".setDateinput");
  input.setAttribute("value", today);
  //text에서 - 지우기 CSS
}

function preData(start, end, e) {
  const preLabel = e.toElement.previousElementSibling;
  const nextLabel = e.toElement.nextElementSibling;
  const val = e.toElement.value;

  let preVal = parseInt(val.substring(start, end)); //string->int

  return preVal;
}


document.getElementById("setYear").addEventListener("mousewheel", function(e) {
  const id = e.toElement.id;
  console.log(id);
  const setY = parseInt(preData(0, 4, e));
  const setM = parseInt(preData(5, 7, e));
  const setD = parseInt(preData(8, 10, e));
  // console.log(setY + "," + setM + "," + setD);

  console.dir(e.toElement.value +","+e.toElement.defaultValue);




  /*이전*/
  const preLabel = e.toElement.previousElementSibling;
  const nextLabel = e.toElement.nextElementSibling;
  const filerY = setY - 1;
  const filerM =
    setM - 1 < 10 ? "-0" + (setM - 1).toString() : "-" + (setM - 1).toString();
  const filerD =
    setD - 1 < 10 ? "-0" + (setD - 1).toString() : "-" + (setD - 1).toString();
  console.log(filerY + filerM + filerD);


  /*다음*/
  const nfilerY = setY + 1;
  const nfilerM =
    setM + 1 < 10 ? "-0" + (setM + 1).toString() : "-" + (setM + 1).toString();
  const nfilerD =
    setD + 1 < 10 ? "-0" + (setD + 1).toString() : "-" + (setD + 1).toString();
  console.log(nfilerY + nfilerM + nfilerD);








  preLabel.defaultValue = filerY + filerM + filerD;
  nextLabel.defaultValue = nfilerY + nfilerM + nfilerD;
});
