// // tất cả những tính năng code được trên js thì đều có thể sử dụng bằng ts
let arrString = ['a', 'n', 'd', 's', 'sd'];
// console.log(arrString)
class Product {
    constructor() {
        this.id = '';
        this.name = '';
        this.price = 0;
        this.showInfo = () => {
            console.log('showInfo', this);
        };
    }
}
let prod = new Product();
prod.id = 1;
prod.name = 'Blue';
prod.price = 1000;
prod.showInfo();
class ProductList {
    constructor() {
        this.data = [];
    }
    insert(newProduct) {
        this.data.push(newProduct);
    }
    del(id) {
        this.data = this.data.filter(prod => prod.id !== id);
    }
}
let prodList = new ProductList();
prodList.insert(prod);
let prod2 = Object.assign(Object.assign({}, prod), { id: 2, name: 'product 2' });
prodList.insert(prod2);
console.log(prodList.data);
class User {
    constructor() {
        this.id = '';
        this.name = '';
        this.userName = '';
        this.passWord = '';
    }
}
class List {
    constructor() {
        this.data = [];
    }
    insert(item) {
        this.data.push(item);
    }
    del(id = '') {
        this.data = this.data.filter((prod) => prod.id !== id);
    }
}
let productList = new List();
productList.insert(prod2);
productList.insert(prod);
console.log({ productList });
let userList = new List();
userList.insert(new User());
userList.insert(new User());
console.log({ userList });
let funcA = () => {
    let std = { id: '2' };
    return std.id;
};
let functionA = () => {
    let result = {
        type: 'a',
        payload: '123',
    };
    return result;
};
let bienA = {
    type: '',
    payload: {}
};
