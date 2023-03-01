var TaiKhoan = congtrinh;
var MatKhau = 1;

var inputusername = document.getElementById('username');
var inputpassword = document.getElementById('password');
var formlogin = document.getElementById('FormLogin');

if(formlogin.attachEvent){
    formlogin.attachEvent('submit',onFormSubmit);
}   else{
    formlogin.addEventListener('submit',onFormSubmit)
}

function onFormSubmit(e){
    event.preventDefault();
    var username = inputusername.value;
    var password = inputpassword.value;

    if(username == TaiKhoan && password == MatKhau)
    {
        alert('Dang Nhap Thanh Cong');
    } else {
        alert('Dang Nhap That Bai');
    }
}