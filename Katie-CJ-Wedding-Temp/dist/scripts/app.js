const readMoreBtns = document.querySelectorAll(".read-more-btn");
const text = document.querySelectorAll(".text");
for (let i = 0; i < readMoreBtns.length; i++) {
    readMoreBtns[i].addEventListener("click", (e) => {
        text[i].classList.toggle("show-more");
        if (readMoreBtn.innerText === "Read More") {
            readMoreBtn.innerText = "Read Less";
        } else {
            readMoreBtn.innerText = "Read More";
        }
    });

}


console.log(readMoreBtns);