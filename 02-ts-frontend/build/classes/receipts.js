export class Receipt {
    constructor(money) {
        this.money = money;
    }
    format() {
        const day = this.money.createdAt.toLocaleString("en-US", { day: "numeric" });
        const month = this.money.createdAt.toLocaleString("en-US", { month: "long" });
        const year = this.money.createdAt.getFullYear();
        return `Received $${this.money.amount} for ${this.money.title.toUpperCase()} dated ${month} ${day}, ${year}`;
    }
}
