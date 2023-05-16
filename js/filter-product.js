const filterProduct = document.querySelectorAll('.product');

document.querySelector('ul').addEventListener('click', event=> {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['filter'];
    
    filterProduct.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide');
        }
    });

});