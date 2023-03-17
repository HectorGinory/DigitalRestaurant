let actualPage = 0;

const nextPage = () => {
    let cardsArray = document.getElementsByClassName('card');

    if (actualPage+1 !== cardsArray.length) {
        cardsArray[actualPage].classList.remove('on')
        cardsArray[actualPage].classList.add('off')
        actualPage++;
        cardsArray[actualPage].classList.remove('off')
        cardsArray[actualPage].classList.add('on')
    }
}

const prevPage = () => {
    let cardsArray = document.getElementsByClassName('card');
    
    if(actualPage !== 0) {
        cardsArray[actualPage].classList.remove('on')
        cardsArray[actualPage].classList.add('off')
        actualPage--;
        cardsArray[actualPage].classList.remove('off')
        cardsArray[actualPage].classList.add('on')
    }
}
