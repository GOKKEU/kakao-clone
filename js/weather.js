const COORDS = "coords";
const toDayWeather = document.querySelector(".js-weather");
const toDayPlace = document.querySelector(".js-place");
const toDayTemp = document.querySelector(".js-temp");

//날씨정보 API
const API_KEY = "fabdb8edb8c8f543ba4fe4378accc29c";
//javascript를 이용해서 특정 URL을 호출한는지 확인
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      const weatherArray = json.weather; //how to get array in json
      const description = weatherArray[0].description;
      console.log(toDayWeather, place, description);
      toDayWeather.innerHTML = `${description}`;
      toDayPlace.innerHTML = `${place}`;
      toDayTemp.innerHTML = `${temperature}`;
    });
}
API_KEY;

function saveCoords(coords) {
  localStorage.setItem(COORDS, JSON.stringify(coords));
}

//좌표를 가져왔을때 성공을 나타내는 함수
function handleGeoSucess(position) {
  //위도
  const latitude = position.coords.latitude;
  //경도
  const longitude = position.coords.longitude;
  //위치 ojb
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
//좌표를 가져왔을때 실패 했을때 나타내는 함수
function handleGeoError(position) {
  console.log("Cant access geo location");
}

function askForCoords() {
  //navigator,window,document등등 API
  navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}

//위치를 load
function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    //localstorage에 값이 없어 -> 가져옴
    askForCoords();
  } else {
    //위치 데이터를 localstorage에서 받아온 정보를 string 으로
    const parseedCoords = JSON.parse(loadedCords);

    //스토리지의 값을 불러올때 변수.key값
    getWeather(parseedCoords.latitude, parseedCoords.longitude);
  }
}
function init() {
  loadCoords();
}
init();
