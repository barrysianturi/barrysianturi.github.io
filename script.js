document.getElementById('sendButton').addEventListener('click', function() {
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if(phone && message) {
        // Ini harus diganti dengan fungsi yang mengirim ke server backend
        console.log('Pesan akan dikirim ke ' + phone + ': ' + message);
        // Tampilkan QR Code (dummy)
        document.getElementById('qrcode').innerText = 'QR Code akan muncul di sini';
    } else {
        alert('Nomor HP dan Pesan harus diisi!');
    }
});
