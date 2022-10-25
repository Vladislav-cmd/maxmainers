// Функция с фиксацией body для IOS, так как там не работает свойство overflow: hidden
// которое присваивается body через класс lock (в nullstyle)
const burgerButton = document.querySelector('.head-action__burger');
const burgerMenu = document.querySelector('.burger-menu__block');
const mainBody = document.body;
const mainBlock = document.querySelector('main');
const headerBot = document.querySelector('.header__bot');
/*===================================================================================*/
burgerButton.addEventListener('click', function () {
    var deviceHeight = mainBody.clientHeight;
    var currentCoordValue = coordValue() * (-1) + deviceHeight;
    let windowScrollTop = window.pageYOffset;
    let paddingTopForMain = parseInt(headerBot.offsetHeight);

    burgerButton.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    mainBody.classList.toggle('lock');
    
    // коррелирует с шапкой (header), если ей не задать fixed, а body присваивать, то шапку перекроет
    // поэтому добавляют специальный класс, который шапку фиксирует
    mainBody.style.position = 'fixed';    
    if (windowScrollTop > 0) {
        headerBot.classList.add('active-burger');
        mainBlock.style.paddingTop = `${paddingTopForMain}px`;
        mainBody.style.top = currentCoordValue + 'px';
    }
    if (!(burgerButton.classList.contains('active'))) {
        headerBot.classList.remove('active-burger');
        mainBody.style.position = '';
        mainBody.style.top = '';
        window.scrollTo(0, (-currentCoordValue));
    }
});
/*===================================================================================*/
// TODO: чтобы при изменении ширины экрана убирался active у Бургера
window.addEventListener('resize', resizeBurger);
// переменная для того, чтобы код при resize отработала единожды
var isResize = false;
export function resizeBurger() {
    let currentDeviceWidth = window.innerWidth;
    // при включенном бургере и изменить ширину более 768px то произойдет скролл в самое начало страницы
    // не получилось просчитать момент фиксации :(

    if (currentDeviceWidth >= 991 && !isResize) {
        burgerButton.classList.remove('active');
        burgerMenu.classList.remove('active');
        headerBot.classList.remove('active-burger');
        mainBody.classList.remove('lock');
        mainBody.style.position = '';
        mainBody.style.top = '';
        isResize = true;
    } else if (currentDeviceWidth < 991 && isResize) {
        isResize = false;
    }
}
/*===================================================================================*/
// Функция для определения координаты body при скролле к нужному попапу (для фиксации body на IOS)
function coordValue() {
    const currentWindowCoord = document.body.getBoundingClientRect().top;   
    return currentWindowCoord;
}
/*===================================================================================*/