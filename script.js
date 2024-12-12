let toastBox = document.getElementById("toastBox");
let successMassage = `<i class="fa fa-check-circle" aria-hidden="true"></i> Successfully submitted`;
let errorMassage = `<i class="fa fa-times" aria-hidden="true"></i> Please fix the error!`;
let invalidMassage = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Invalid input, check again`;

function showToast(massage) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = massage;
    toastBox.appendChild(toast);

    if (massage.includes("error")) {
        toast.classList.add("error");
    }
    if (massage.includes("Invalid")) {
        toast.classList.add("invalid");
    }

    setTimeout(() => {
        toast.remove();
    }, 5500);
}
