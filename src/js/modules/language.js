const htmlBlock = document.documentElement;
const languageSelector = document.querySelectorAll('.lang_selector');

const russianTags = document.getElementsByTagName('ru');
const englishTags = document.getElementsByTagName('eng');

window.addEventListener('load', windowLoadLang);

function windowLoadLang() {
    let currentLanguage = localStorage.getItem('user-language');

    if (currentLanguage == '') {
        currentLanguage = localStorage.setItem('user-language', 'english');
        currentLanguage = localStorage.getItem('user-language');
        htmlBlock.classList.remove('russian');
        htmlBlock.classList.add(currentLanguage);
    } else {
        htmlBlock.classList.remove('english');
        htmlBlock.classList.add(currentLanguage);
    }

    languageSelector.forEach(item => {
        item.addEventListener('click', function (event) {
            if (event.target.classList.contains('language-selector__russian')) {
                let currentLanguage = localStorage.setItem('user-language', 'russian');
                htmlBlock.classList.remove('english');
                htmlBlock.classList.add('russian');
            } else {
                let currentLanguage = localStorage.setItem('user-language', 'english');
                htmlBlock.classList.remove('russian');
                htmlBlock.classList.add('english');
            }
        });
    });
}
