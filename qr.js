// var api_Qr_code="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const user_input=document.getElementById('input');
const btun=document.getElementById('btn');
const img=document.getElementById('qr-img')
 function qrfunction(){
   img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+user_input.value;
   img.className='img_styling'
}

btun.addEventListener('click',function(){
    qrfunction()
})