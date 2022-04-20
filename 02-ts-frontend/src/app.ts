
interface MoneyType {
    title : string;
    createdAt : Date;
    amount : number;
}

interface HasFormatter{
    format : () => string
}

class Payment implements HasFormatter{
    constructor(private money : MoneyType){}
    format() : string {
        return `Spend $${this.money.amount} on ${this.money.title.toUpperCase()} dated ${this.money.createdAt}`
    }
}

class Receipt implements HasFormatter {
    constructor(private money : MoneyType){}
    format() : string {
        return `Received $${this.money.amount} for ${this.money.title.toUpperCase()} dated ${this.money.createdAt}`
    }
}

window.onload = () => {
    const btnAdd = document.getElementById("btnAdd") as HTMLButtonElement;
    const txtTitle = document.getElementById("txtTitle") as HTMLInputElement;
    const txtCreatedAt = document.getElementById("created-at") as HTMLInputElement;
    const selType = document.querySelector("#sel-type") as HTMLSelectElement;
    const txtAmount = document.getElementById("txtAmount") as HTMLInputElement;

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
        console.log(doc);
    })

}