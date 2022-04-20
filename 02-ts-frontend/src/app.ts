import { ListTemplate } from './classes/listTemplate.js'
import { Payment } from './classes/payments.js'
import { Receipt } from './classes/receipts.js'
import { HasFormatter } from './model/hasFormatter.interface.js'
import { MoneyType } from './model/moneyType.interface.js'


window.onload = () => {
    const btnAdd = document.getElementById("btnAdd") as HTMLButtonElement;
    const txtTitle = document.getElementById("txtTitle") as HTMLInputElement;
    const txtCreatedAt = document.getElementById("created-at") as HTMLInputElement;
    const selType = document.querySelector("#sel-type") as HTMLSelectElement;
    const txtAmount = document.getElementById("txtAmount") as HTMLInputElement;
    const uList = document.getElementById("list") as HTMLUListElement;
    const renderList = new ListTemplate(uList);

    btnAdd.addEventListener("click", (event : Event) => {
        event.preventDefault();
        
        let money : MoneyType = {
            amount : parseInt(txtAmount.value),
            createdAt : new Date(txtCreatedAt.value),
            title : txtTitle.value
        }

        let doc : HasFormatter;

        if(selType.value === "payment"){
            doc = new Payment(money)
        }else{
            doc = new Receipt(money)
        }
        renderList.render(selType.value, doc)
    })

}