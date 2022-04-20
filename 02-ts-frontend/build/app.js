"use strict";
class Payment {
    constructor(money) {
        this.money = money;
    }
    format() {
        return `Spend $${this.money.amount} on ${this.money.title.toUpperCase()} dated ${this.money.createdAt}`;
    }
}
class Receipt {
    constructor(money) {
        this.money = money;
    }
    format() {
        return `Received $${this.money.amount} for ${this.money.title.toUpperCase()} dated ${this.money.createdAt}`;
    }
}
window.onload = () => {
    const btnAdd = document.getElementById("btnAdd");
    const txtTitle = document.getElementById("txtTitle");
    const txtCreatedAt = document.getElementById("created-at");
    const selType = document.querySelector("#sel-type");
    const txtAmount = document.getElementById("txtAmount");
    btnAdd.addEventListener("click", (event) => {
        event.preventDefault();
        let money = {
            amount: parseInt(txtAmount.value),
            createdAt: new Date(txtCreatedAt.value),
            title: txtTitle.value
        };
        let doc;
        if (selType.value === "payment") {
            doc = new Payment(money);
        }
        else {
            doc = new Receipt(money);
        }
        console.log(doc);
    });
};
