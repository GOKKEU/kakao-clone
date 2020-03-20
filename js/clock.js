//시계

const clockTitle = document.querySelector(".js-clock");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    //00:00처럼 한자리숫자의 경우 앞에 0이 보이도록 해준다.
    //hours가 10보다 작으면 '0hours'이고 아니면 'hours'를 나타낸다.

    const time = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);

    //  const time = `${hours < 10 ? `0${hours}` : hours}  : ${minutes < 10 ? `0${minutes}` : minutes}`;

    clockTitle.innerHTML = time;
}

function init() {
    //시간을 받아오는 함수
    getTime();
    //실시간 시간이 업데이트 되기위한 함수
    //1초마다 update
    setInterval(getTime, 1000);
}

init();
