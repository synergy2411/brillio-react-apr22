"use strict";
window.onload = () => {
    const btnAdd = document.getElementById("btnAdd");
    const txtTitle = document.getElementById("txtTitle");
    btnAdd.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Title : ", txtTitle.value);
    });
};
