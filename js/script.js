function reveal(elID) {
    let target = document.getElementById(elID);

    if (target.classList.contains ("hidden")) {
        target.classList.toggle("hidden");
        target.classList.toggle("reveal1");
    } 
    else if (target.classList.contains ("revealMe")) {
        target.classList.toggle("revealMe");
        target.classList.toggle("reveal2");
    }
    else if (target.classList.contains("reveal1")) {
        target.classList.toggle("reveal1");
        target.classList.toString("hidden");
    }
    else if (target.classList.contains("reveal2")) {
        target.classList.toggle("reveal2");
        target.classList.toggle("revealMe");
    }
}