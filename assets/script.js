const modalClose = (modal) => {
    const modalToClose = document.querySelector('.'+modal);
    modalToClose.classList.remove('fadeIn');
    modalToClose.classList.add('fadeOut');
    setTimeout(() => {  
        modalToClose.style.display = 'none';
    }, 0);
}


