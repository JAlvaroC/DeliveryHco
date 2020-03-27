document.querySelector('#submit').addEventListener('click',function(){
    let client = document.querySelector('#client').value;
    let date = document.querySelector('#date').value;
    let hour = document.querySelector('#hour').value;
    let dealer = document.querySelector('#dealer').value;
    let services = document.querySelector('#services').value;
    let url = "https://api.whatsapp.com/send?phone=51918538859&text=*_Delivery Chesco Franchesco_*%0A*Reservas y Pedido*%0A%0A*¿Cual es tu nombre?*%0A" + client + "%0A*Indica la fecha de tu reserva*%0A" + date + "%0A*Indica la hora de tu reserva*%0A" + hour + "%0A*Repartidor de Preferencia*%0A" + dealer + "%0A*¿Cual es el servicio que se desea realizar?*%0A" + services;
    window.open(url);
    
});