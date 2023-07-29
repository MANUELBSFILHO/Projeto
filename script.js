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
