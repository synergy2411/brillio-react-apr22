export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(type, item) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        const heading = document.createElement("h5");
        heading.innerHTML = type.toUpperCase();
        const paragraph = document.createElement("p");
        paragraph.innerHTML = item.format();
        listItem.appendChild(heading);
        listItem.appendChild(paragraph);
        this.container.appendChild(listItem);
    }
}
// ul
// li class="list-group-item"
// h5 - Payment | Receipt
// p - format()
