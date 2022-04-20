import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payments.js';
import { Receipt } from './classes/receipts.js';
window.onload = () => {
    const btnAdd = document.getElementById("btnAdd");
    const txtTitle = document.getElementById("txtTitle");
    const txtCreatedAt = document.getElementById("created-at");
    const selType = document.querySelector("#sel-type");
    const txtAmount = document.getElementById("txtAmount");
    const uList = document.getElementById("list");
    const renderList = new ListTemplate(uList);
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
        renderList.render(selType.value, doc);
    });
};
