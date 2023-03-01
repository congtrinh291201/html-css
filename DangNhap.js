
var inputusername = document.getElementById('username').value;
var inputpassword = document.getElementById('password').value;
var formlogin = document.getElementById('FormLogin');
formlogin.addEventListener('submit',onFormSubmit);
function onFormSubmit(){
    if(inputusername == 'congtrinh' && inputpassword == 1)
    {
        alert('Dang Nhap Thanh Cong');
    } else {
        alert('Dang Nhap That Bai');
    }
}