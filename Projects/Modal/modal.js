
let  modal = document.getElementById("modal");
let closeBtn = document.getElementsByClassName("closeBtn");
let openBtn  = document.getElementById("openBtn");




const handleOpenModal = () => {
    modal.classList.add("show");
}


openBtn.addEventListener("click", handleOpenModal);