window.onload = () => {
    const btnAdd = document.getElementById("btnAdd") as HTMLButtonElement;
    const txtTitle = document.getElementById("txtTitle") as HTMLInputElement;

    btnAdd.addEventListener("click", (event : Event) => {
        event.preventDefault();
        console.log("Title : ", txtTitle.value)
    })
}