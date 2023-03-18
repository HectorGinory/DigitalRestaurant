let actualPage = 0;

const nextPage = () => {
    let listsArray = document.getElementsByClassName('list');
    let numberPage = document.getElementById('page-number')

    if (actualPage+1 !== listsArray.length) {
        listsArray[actualPage].classList.remove('on')
        listsArray[actualPage].classList.add('off')
        actualPage++;
        listsArray[actualPage].classList.remove('off')
        listsArray[actualPage].classList.add('on')
        numberPage.innerHTML = actualPage + 1
    }
}

const prevPage = () => {
    let listsArray = document.getElementsByClassName('list');
    let numberPage = document.getElementById('page-number')
    
    if(actualPage !== 0) {
        listsArray[actualPage].classList.remove('on')
        listsArray[actualPage].classList.add('off')
        actualPage--;
        listsArray[actualPage].classList.remove('off')
        listsArray[actualPage].classList.add('on')
        numberPage.innerHTML = actualPage + 1 
    }
}
