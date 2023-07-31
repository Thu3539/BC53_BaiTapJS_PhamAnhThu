// BAI TAP 1
// Buoc 1: input
// soNgayLam 
// luong1ngay

// Buoc 2: Xu ly
// tienLuong = luong1ngay*soNgayLam

// Buoc 3: in ket qua

var workDay = "8";
const wage1day = "100000";
var salary;
salary = (wage1day*1 * workDay*1).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
console.log("Kết quả bài tập 1: Tiền lương nhân viên là ",salary );

// BAI TAP 2
// Buoc 1: input
// so1
// so2
// so3
// so4
// so5

// Buoc 2: Xu ly
// giaTriTB = (so1+so2+so3+so4+so5)/5

// Buoc 3: in ket qua

var number1 = "10", number2 = "38", number3= "42.86", number4= "64.19", number5= "104.75";
average = (number1*1 +number2*1 + number3*1 +number4*1 + number5*1 )/5;
console.log("Kết quả bài tập 2: Giá trị trung bình của 5 số thực là", average);

// BAI TAP 3
// Buoc 1: input
// ty gia
// so tien USD

// Buoc 2: Xu ly
// so tien VND = (so tien USD)*ty gia

// Buoc 3: in ket qua

const currency = "23500";
var moneyUSD = "1490";
moneyVND = (currency*1 * moneyUSD*1).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
console.log("Kết quả bài tập 3: Số tiền sau khi quy đổi là", moneyVND);


// BAI TAP 4
// Buoc 1: input
// chieu dai
// chieu rong

// Buoc 2: Xu ly
// dien tich = chieu dai * chieu rong
// chu vi = (chieu dai + chieu rong)*2

// Buoc 3: in ket qua

var length= "46", width ="68";
area = length*1 * width*1;
perimeter = (length*1 + width*1)*2;
console.log("Kết quả bài tập 3: Diện tích hình chữ nhật là", area);
console.log("Kết quả bài tập 3: Chu vy hình chữ nhật là", perimeter);

// BAI TAP 5
// Buoc 1: input
// so

// Buoc 2: Xu ly
// donvi= so%10 
// chuc = Math.floor (so/10)
// tong = donvi + chuc


// Buoc 3: in ket qua

var n = "58";
unit = (n*1)%10;
ten = Math.floor((n*1)/10);
sum = unit +ten;
console.log("Kết quả bài tập 5: tổng 2 ký số là", sum );

