class Store {
    constructor() {
        this.items = [];
    };
    getItem() {
        console.log(this.items);
    };
    getLengthItem() {
        console.log(this.items.length);
    };
    addItem(item) {
        this.items.push(item);
    }
}

const store = new Store();
export default store;