const hourHand = document.querySelector('#hour');
const minHand = document.querySelector('#min');
const secHand = document.querySelector('#sec');

const setRotation = (element, rotationRatio) => {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

const setClock = () => {
    const currentDate = new Date();
    const secRatio = currentDate.getSeconds() / 60;
    const minRatio = (secRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minRatio + currentDate.getHours()) / 12;
    setRotation(secHand, secRatio);
    setRotation(minHand, minRatio);
    setRotation(hourHand, hourRatio);
}
setClock();
setInterval(setClock, 1000)