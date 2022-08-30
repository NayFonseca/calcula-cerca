
function calculaValor() {
	let largura = prompt(" Informe a largura do terreno: ");
	let comprimento = prompt(" Informe o maior comprimento do terreno: ");
	let valor = largura * comprimento * 38.5;
	let cerca = (largura * 2) + (comprimento * 2)
	print("O valor de imposto a ser pago é de " + valor.toFixed(2) + " reais.");
	print("Irá precisar de " + cerca + " metros de cerca.");
	valor.toFixed(2)

}

calculaValor();

function print(valor) {
	document.write(valor);
}