var modal = document.getElementById('modal');
var modalContent = document.getElementsByClassName('ab-modal-container');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.add('hide');
    }
}

const openModal = (id) => {
    modal.classList.remove('hide');
    const items = document.querySelectorAll('.pp-modal-cont');
    items.forEach(itm=>itm.classList.remove('pp-active'))
    const content = document.getElementById(id);
    content.classList.add('pp-active')
    //const clone = content.cloneNode(true);
    //clone.removeChild(clone.firstElementChild); // content.removeChild(content.firstElementChild)
    //clone.style.display = "block";
    //modalContent[0].appendChild(clone);
}