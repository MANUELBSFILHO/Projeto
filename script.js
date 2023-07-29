var qrCodesGerados = [];

function gerarQRCode() {
  var textoQRCode = document.getElementById("texto").value;

  if (!textoQRCode) {
    alert("Por favor, insira um texto ou URL para gerar o QR Code.");
    return;
  }

  var qrcodeOptions = {
    text: textoQRCode,
    width: 200,
    height: 200
  };

  var qrcode = new QRCode(document.getElementById("qrcode"), qrcodeOptions);

  qrCodesGerados.push(textoQRCode);

  document.getElementById("texto").value = '';

  atualizarHistorico();
}

function atualizarHistorico() {
  var historicoLista = document.getElementById("historico");
  historicoLista.innerHTML = '';

  for (var i = 0; i < qrCodesGerados.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = qrCodesGerados[i];
    historicoLista.appendChild(listItem);
  }
}

function limparCampos() {
  document.getElementById("texto").value = '';

  var qrcodeDiv = document.getElementById("qrcode");
  qrcodeDiv.innerHTML = '';

  qrCodesGerados = [];
  atualizarHistorico();
}

function enviarParaWhatsapp() {
  var qrCodeImage = document.getElementById("qrcode").querySelector("img");

  if (!qrCodeImage) {
    alert("Por favor, gere o QR Code primeiro.");
    return;
  }

  var qrCodeDataURL = qrCodeImage.src;
  var textoQRCode = document.getElementById("texto").value;

  if (!textoQRCode) {
    alert("Por favor, insira um texto ou URL para gerar o QR Code.");
    return;
  }

  // Codificar o texto do QR Code na URL de dados
  var qrCodeDataURLWithMessage = qrCodeDataURL.replace("image/png", "image/octet-stream");
  qrCodeDataURLWithMessage += "&text=" + encodeURIComponent(textoQRCode);

  // Redirecionar para o WhatsApp com o código QRCode como mensagem
  window.location.href = "whatsapp://send?text=" + encodeURIComponent(qrCodeDataURLWithMessage);
}
