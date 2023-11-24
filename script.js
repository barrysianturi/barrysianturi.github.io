document.getElementById('sendButton').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    var message = document.getElementById('message').value;

    if(fileInput.files.length === 0) {
        alert('Pilih file yang berisi daftar nomor!');
        return;
    }

    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var lines = e.target.result.split('\n');
        for(var i = 0; i < lines.length; i++) {
            var phone = lines[i].trim();
            if(phone) {
                // Proses kirim pesan ke nomor ini
                console.log('Pesan akan dikirim ke ' + phone + ': ' + message);
            }
        }
    };

    reader.readAsText(file);
});
