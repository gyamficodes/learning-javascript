
let  modal = document.getElementById("modal");
let closeBtn = document.getElementById("closeBtn");
let openBtn  = document.getElementById("openBtn");


// function to open modal
const handleOpenModal = () => {
    modal.classList.add("show");
}


// function to close modal
const handleCloseModal = () => {
    modal.classList.remove("show");
}


// event listener
openBtn.addEventListener("click", handleOpenModal);
closeBtn.addEventListener("click", handleCloseModal);


// close modal when click outside of modal
modal.addEventListener('click', (event) => {
    if(event.target === modal){
        handleCloseModal();
    }
})


// close modal when press escape key
document.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        handleCloseModal();
    }
})