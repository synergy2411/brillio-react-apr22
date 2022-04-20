import { HasFormatter } from '../model/hasFormatter.interface.js';
import { MoneyType } from '../model/moneyType.interface';

export class Receipt implements HasFormatter {
    constructor(private money : MoneyType){}
    format() : string {
        const day = this.money.createdAt.toLocaleString("en-US", {day : "numeric"})
        const month = this.money.createdAt.toLocaleString("en-US", {month : "long"})
        const year = this.money.createdAt.getFullYear()
        return `Received $${this.money.amount} for ${this.money.title.toUpperCase()} dated ${month} ${day}, ${year}`
    }
}