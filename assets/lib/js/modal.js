var modal = document.getElementById('modal');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.add('hide');
    }
}

const openModal = () => {
    modal.classList.remove('hide');
}