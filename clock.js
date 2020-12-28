const clockContainer = document.querySelector(".js-clock");
const dayContainer = document.querySelector(".js-day");

const clockTitle = clockContainer.querySelector("h1");
const dayTitle = dayContainer.querySelector("h3");

function getTime() {

const date = new Date();

const minutes = date.getMinutes();

const hours = date.getHours();

const seconds = date.getSeconds();

const year = date.getFullYear();

const month = new String(date.getMonth()+1);

const day = new String(date.getDate()); 

var week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    
var today = new Date().getDay();
var todayLabel = week[today];


dayTitle.innerText = `${year}.${

    month< 10 ? `0${month}` :month}.${
    
        day< 10 ? `0${day}` :day
    
    } ${todayLabel}`;


clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${

minutes < 10 ? `0${minutes}` : minutes}:${

seconds < 10 ? `0${seconds}` : seconds

}`;

}

function init() {

getTime();

setInterval(getTime, 1000);

}

init();