console.log('estas dentro');
function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  if (name !== null
    && email !== null
    && message !== null) {
    var json_object = {
      "name": name,
      "email": email,
      "message": message
    };
    $.ajax({
      cache: false,
      data: JSON.stringify(json_object),
      contentType: "application/json",
      dataType: "json",
      type: 'POST',
      url: 'https://yk2i9z96x2.execute-api.us-east-1.amazonaws.com/api/contacto',
      success: function () {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        toastr.success('Tu comentario fue enviado correctamente.', { timeOut: 5000 });
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        toastr.error('Tuvimos un problema al recibir su solicitud, Favor de volver a intentar en unos minutos.');
      }
    });
  }
}  