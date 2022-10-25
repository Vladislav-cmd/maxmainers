// const selectButtons = document.querySelectorAll('.left-side-prog__button');
// const selectButtonsText = document.querySelectorAll('.right-side-prog__preview');


// selectButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         // Получаем значение атрибута data-target
//         let dataAttr = this.getAttribute('data-target')
//         // Записываем название класса для включения блока prog__edu, например
//         let textClassName = `.prog__${dataAttr}`;

//         // Убираем у всех active
//         selectButtons.forEach(button => {
//             button.classList.remove('active');
//         });
//         selectButtonsText.forEach(textBlock => {
//             textBlock.classList.remove('active');
//         });

//         // Добавляем только тому тексту и той кнопке, на которую нажали
//         if (!this.classList.contains('active')) {
//             this.classList.add('active');
//             document.querySelector(textClassName).classList.add('active');
//         }
//     });
// });

/*===================================================================================*/

// Spoiler Button HITS BLOCK (минимум 10 карточек предполагается)
const hitsSpoilerButtonMore = document.querySelector('.hits__spoiler-more');
const hitsSpoilerButtonLess = document.querySelector('.hits__spoiler-less');
const hitsSpoilerButtons = document.querySelectorAll('.hits__spoiler-button');

let hitsCards = document.querySelectorAll('.hit-card');

window.addEventListener('load', function() {
    for (let index = 0; index < hitsCards.length; index++) {
        let hitsCard = hitsCards[index];
        if (index > 4) {
            hitsCard.classList.add('hidden');
        }
    }
});

hitsSpoilerButtons.forEach(button => {
    button.addEventListener('click', spoilerFunc);
});

function spoilerFunc() {
    if (!hitsSpoilerButtonMore.classList.contains('hidden')) {
        hitsSpoilerButtonMore.classList.add('hidden');
        hitsSpoilerButtonLess.classList.remove('hidden');
        for (let index = 0; index < hitsCards.length; index++) {
            const hitsCard = hitsCards[index];
            if (index > 4) {
                hitsCard.classList.remove('hidden');
            }
        }
    } else {
        hitsSpoilerButtonMore.classList.remove('hidden');
        hitsSpoilerButtonLess.classList.add('hidden');
        for (let index = 0; index < hitsCards.length; index++) {
            const hitsCard = hitsCards[index];
            if (index > 4) {
                hitsCard.classList.add('hidden');
            }
        }
    }
}

/*===================================================================================*/
// Кнопки избранного товара и добавления в корзину (HITS BLOCK)
let favouriteAddProducts = document.querySelectorAll('.hit-card__favourite-button');
let bucketAddProducts = document.querySelectorAll('.hit-card__price-button');

favouriteAddProducts.forEach(product => {
    product.addEventListener('click', function () {
        product.classList.toggle('addfavourite');        
    });
});
        
bucketAddProducts.forEach(product => {
    product.addEventListener('click', function () {
        product.classList.toggle('addbucket');
    });
});


// При изменяющейся ширине не получилось корректно разрешиться с обработчиками, возникает множественный клик
// window.addEventListener('load', function() {
//     let currentDeviceWidth = window.innerWidth;
//     if (currentDeviceWidth <= 991) {
//         favouriteAddProducts.forEach(product => {
//             product.addEventListener('touchend', function () {
//                 product.classList.toggle('addfavourite');        
//             });
//         });
        
//         bucketAddProducts.forEach(product => {
//             product.addEventListener('touchend', function () {
//                 product.classList.toggle('addbucket');
//             });
//         });
//     } else {
//         favouriteAddProducts.forEach(product => {
//             product.addEventListener('click', function () {
//                 product.classList.toggle('addfavourite');  
//             });
//         });
        
//         bucketAddProducts.forEach(product => {
//             product.addEventListener('click', function () {
//                 product.classList.toggle('addbucket'); 
//             });
//         });
//     }
// });
	

// Тоже не решило проблему
// $('.hit-card__favourite-button').on('click touchend', function(event) {
//     if (event.type == "touchend") {
//         $(this).toggleClass('addfavourite');
//         console.log('Было касание');
//         return false;
//     } else {
//         $(this).toggleClass('addfavourite');
//         console.log('Был клик');
//         return false; 
//     } 
// });

// $('.hit-card__price-button').on('click touchend', function(event) {
//     if (event.type == "touchend") {
//         $(this).toggleClass('addbucket');
//         console.log('Было касание');
//         return false;
//     } else {
//         $(this).toggleClass('addbucket');
//         console.log('Был клик');
//         return false; 
//     } 
// });