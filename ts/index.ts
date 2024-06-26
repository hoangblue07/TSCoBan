// // tất cả những tính năng code được trên js thì đều có thể sử dụng bằng ts

// // let title: string = 'abc';

// // let content = `
// //     <p>
// //         XIN CHÀO ! ${title}
// //     </p>
// // `;


// // async function getApi() {
// //     let result = await fetch('');
// // }

// // code trên file ts    -> tsc -w


// //khai báo kiểu dữ liệu
// //primitive value: number, string, boolean, undefined, null
// let hoTen: string = 'Hoang Blue';
// let luongCb: number = 5000;
// let valid: boolean = true;
// let result: undefined = undefined;//không dùng để khai báo thường dùng để nhận giá trị
// let result1: null = null; //không dùng đê khai báo thường dùng để nhận giá trị

// //interface là để định dạng format kiểu dữ liệu của object. Interface thì khi khai báo nhiều interface cùng tên thì khi biên dịch typescript sẽ gộp lại những interface cùng tên    
// interface SinhVien {
//     maSinhVien: string,
//     tenSinhVien: string,
// }
// interface SinhVien {
//     diaChi: string,
// }
// //interface có thể kế thừa từ interface khác    
// interface Button {
//     id: string,
//     name: string,
//     innerHTML: string,
//     background: string
// }
// let btn: Button = { id: '1', name: 'button1', innerHTML: 'show message', background: 'red' }

// interface ButtonRadius extends Button {
//     borderRadius: string,
// }
// let btn1: ButtonRadius = { id: '1', name: 'button1', innerHTML: 'show message', background: 'red', borderRadius: '5px' }



// //type là định dạng format của kiểu dữ liệu
// type Product = {
//     id: string,
//     name: string,
//     price: number
// };


// let prod: Product = { id: '1', name: 'Nguyen Van A', price: 1000 }

// let sinhVien: SinhVien = { maSinhVien: '1', tenSinhVien: 'HoangBlue', diaChi: 'New york' };



// //typeArray

// let arrNumber: number[] = [1, 2, 3, 4, 5];
// let arrString: string[] = ['Nam', 'Nu'];
// let arrProduct: Product[] = [
//     { id: '1', name: 'Nguyen Van A', price: 1000 },
//     { id: '2', name: 'Nguyen Van b', price: 2000 },
//     { id: '3', name: 'Nguyen Van c', price: 3000 },
//     { id: '4', name: 'Nguyen Van d', price: 1000 }
// ]


// //function
// function tinhTong(a: number, b: number): number {


//     return a + b;
// }
// let showMessega = (mess: string): string => {

//     return 'Hello' + mess;
// }
// let sayHello = (): void => {
//     console.log('Say hello')
// }

// //callback
// function main(callback: (title: string) => void) {
//     callback('Hello cyberlearn')
// }

// function renderH1(title: string) {
//     document.querySelector('#content').innerHTML = `
//         <h1 class="bg-dark text-white p-5 display-4">${title}</h1>
//     `
// }
// function renderSection(title: string) {
//     document.querySelector('#content').innerHTML = `
//         <section class="bg-warning text-center text-white p-5 display-4">${title}</section>
//     `
// }

// main(renderSection);


// //tuple: [number, string, ()=>void] // mảng hỗn hợp
// let sv = {
//     id: 1,
//     name: 'Nguyen van a',
//     showInfo: (): void => {
//         console.log('showinfo')
//     }
// }

// let result2: [number, string, () => void] = [1, 'Nguyen van c', () => {
//     console.log('Show info')
// }];
// let [state, setState]: [number, (newState: number) => number] = [1, (newState: number): number => {
//     state = newState;
//     return state;
// }];
// setState(5);
// // console.log(state);

// // type, union type:Cho phép giá trị nhận được nhiều type
// type idUserName = string | number;
// let userName: idUserName = 15;


// //optional properties: dùng cho mô tả thuộc tính của type có thể có hoặc không
// //optional chaining: dùng cho thuộc tính nếu sử dụng nếu không có sẽ không báo lỗi
// type SanPham = {
//     maSP: string | number,
//     tenSP: string,
//     gia: number,
//     moTa?: {// có thể có hoặc không
//         ram: number,
//         rom: number
//     }
// }
// interface SanPham1 {
//     maSP: string | number,
//     tenSP: string,
//     gia: number,
//     moTa?: {// có thể có hoặc không
//         ram: number,
//         rom: number
//     }
// }

// let sp: SanPham = { maSP: 1, tenSP: 'Thuoc lac', gia: 1000, moTa: { ram: 10, rom: 32 } };

// // console.log(sp.moTa?.ram);



// // type: any, unkown
// // any là kiểu dữ liệu nhận tất cả các giá trị
// let resultApi: any = { maSP: 1, tenSP: 'Thuoc lac', gia: 1000, moTa: { ram: 10, rom: 32 } };
// // unkown nhận tất cả các giá trị giống any  tuy nhiên operation thì phải cần kiểm tra trước

// let number1: unknown = 1;
// if (typeof number1 === 'number') {
//     number1 += 1;
// }


// class ProductModel {
//     id: number | string = '1';
//     name: string = "Blue";
//     showInfo = () => {
//         console.log(this.id, this.name);
//     }
// }
// let resultAPI = new ProductModel();

// let prod1: any = resultAPI;
// prod1?.showInfo(); // rủi ro code sẽ bị lỗi

// let prod2: unknown = resultAPI;
// if (prod2 instanceof ProductModel) {
//     prod2?.showInfo();

// }



// //-----------------------------OOP: Object  oriented programming----------------------*
// /*

//         + Tính trừu tượng (abstraction):giúp mình loại bỏ những đặc tính phức tạp không cần thiết của thế giới thực, chọn lọc những đặc tính cốt lõi quan trọng.
//         + Tính đóng gói (Encapsulation): các thuộc tính và phương thứ của đối tượng sẽ không bị đối tượng khác tác động lên được, phải thông qua đối tượng đó mới có thể thay đổi. Accessmodifier (phạm vi truy xuất của các thuộc tính phương thức trong class) getter, setter.
//         + private: các thuộc tính trong class sẽ không được truy xuất bới instance(không được phép lấy thông tin và thay đổi thông tin),  có thể dùng hàm get set để giới hạn phạm vi truy xuất của thuộc tính private
//         + public: các thuộc tính trong class sẽ có thể truy xuất được bởi instance (được lấy thông tin và thay đổi thông tin)
//         + protected: các thuộc tính và phương thức thì instance không thay đổi được , tuy nhiên class con có thể truy xuất được, giống private mở rộng cho phép lớp con sử dụng
//         + tính kế thừa (inheritance): cho phép class con sử dngj lại những thuộc tính và phương thức của lớp cha đã định nghĩa trước đó. class con có thể override lại phương thức của class cha (nếu cần sử dụngn lại thì dùng phương thức super.tenPhuongThuc() ). tuy nhiên để override  thì khai báo dưới dạng phương thức . các trường hợp còn lại không cần kế thưa thì sử dụng arrow để đảm bảo ngữ cảnh con trỏ this
//         + tính đa hình(polymorphism):   các class thực thi chung một hành động (chung format về mặt phương thức) 


// */
// class NhanVien {
//     public maNv: string | number = '';
//     public tenNv: string = "";
//     protected heSoLuong: number = 1;
//     private luongCb: number = 1000;
//     constructor() {

//     }
//     getHeSoLuong() {
//         return this.heSoLuong;
//     }
//     setLuongCb(luongCb: number) {
//         this.luongCb = luongCb;
//     }
//     hienThiThongTin() {
//         console.log('Ma ', this.maNv);
//         console.log('Ten ', this.tenNv);
//         console.log('HSL ', this.heSoLuong);
//         console.log('LCB ', this.luongCb);
//     }
//     tinhLuong() {
//         return this.heSoLuong * this.luongCb;
//     }
// }

// let nv = new NhanVien();
// nv.maNv = 1;
// nv.tenNv = 'Blue';
// nv.setLuongCb(6200);
// nv.hienThiThongTin();
// let hsl = nv.getHeSoLuong();
// console.log("hsl ", hsl)

// class NhanVienKeToan extends NhanVien {
//     duAn: string = '';
//     // constructor(){
//     //     super();
//     // }
//     nghiepVuKeToan() {
//         console.log("Nghiệp vụ kế toán");
//     }
//     //phải là phương thức mới được ghi đè
//     tinhLuong(): number {
//         return super.tinhLuong() + 1000;
//     }
// }

// let nvkt = new NhanVienKeToan();
// console.log(nvkt.tinhLuong())


// interface CRUD{
//     create(newItem);
//     update(id, itemUpdate);
//     search(keyword);
//     delete(id);
//     getAll();
// }
// interface connect{
//     open(),
//     close(),
// }
// class ProductInfo implements CRUD, connect{
//     open() {
//         throw new Error("Method not implemented.");
//     }
//     close() {
//         throw new Error("Method not implemented.");
//     }
//     create(newItem: any) {
//         throw new Error("Method not implemented.");
//     }
//     update(id: any, itemUpdate: any) {
//         throw new Error("Method not implemented.");
//     }
//     search(keyword: any) {
//         throw new Error("Method not implemented.");
//     }
//     delete(id: any) {
//         throw new Error("Method not implemented.");
//     }
//     getAll() {
//         throw new Error("Method not implemented.");
//     }

// }
// class Customer implements CRUD{
//     create(newItem: any) {
//         throw new Error("Method not implemented.");
//     }
//     update(id: any, itemUpdate: any) {
//         throw new Error("Method not implemented.");
//     }
//     search(keyword: any) {
//         throw new Error("Method not implemented.");
//     }
//     delete(id: any) {
//         throw new Error("Method not implemented.");
//     }
//     getAll() {
//         throw new Error("Method not implemented.");
//     }

// }



/*
    Generic
*/

// let arrNumber = new Array<Number>();


interface Mang<T> {
    length: number;
    [index: number]: T
}

let arrString: Mang<String> = ['a', 'n', 'd', 's', 'sd'];
// console.log(arrString)
class Product {
    id: number | string = '';
    name: string = '';
    price: number = 0;
    showInfo = (): void => {
        console.log('showInfo', this);
    }
}

let prod = new Product();
prod.id = 1;
prod.name = 'Blue';
prod.price = 1000;
prod.showInfo();


class ProductList {
    data: Product[] = [];
    insert(newProduct: Product) {
        this.data.push(newProduct);
    }
    del(id) {
        this.data = this.data.filter(prod => prod.id !== id);
    }
}
let prodList = new ProductList();
prodList.insert(prod);
let prod2 = { ...prod, id: 2, name: 'product 2' };
prodList.insert(prod2)
console.log(prodList.data);


class User {
    id: number | string = '';
    name: string = '';
    userName: string = '';
    passWord: string = '';
}
class List<T> {
    data: T[] = [];
    insert(item: T) {
        this.data.push(item);
    }
    del(id: Number | String = '') {
        this.data = this.data.filter((prod: any) => prod.id !== id);
    }
}
let productList = new List<Product>();
productList.insert(prod2);
productList.insert(prod);
console.log({ productList });

let userList = new List<User>();
userList.insert(new User());
userList.insert(new User());
console.log({ userList })



// tự tạo type
type IDStudent = number | string;
interface Student {
    id: IDStudent
}
let funcA = (): IDStudent => {
    let std = { id: '2' };
    return std.id;
}
type TypeResult = ReturnType<typeof funcA>;
type A = IDStudent;

//returnType dùng để lấy  type của kiểu dữ liệu bạn cần lấy=> hạn chứ sử dụng any, unkown (không nhắc lệnh )
interface Action {
    type: string,
    payload: any
}

type TypeResultDispatch = { callBack: () => Action }

type DispatchFunction = (dispatch: (params) => void) => TypeResultDispatch;

let functionA = () => {
    let result: Action = {
        type: 'a',
        payload: '123',
    } 
    return result;
}

type RootAction = ReturnType<DispatchFunction>;
type ActionType = ReturnType<typeof functionA>;


let bienA: ActionType = {
    type: '',
    payload: {}
}























































