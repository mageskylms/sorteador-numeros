//ativa ao clicar no botão sortear, chama a função que sorteia o número e muda o texto na tela para mostrar o resultado.
function sortear() {
    //puxa valores dos inputs
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let verificacao = verificaDe();
    if (verificacao == true) {
        if (quantidade > (ate - de + 1)) {
            alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
            reiniciar();
            reiniciar();
            return;
        }
        //cria a lista para receber números sorteados
        let sorteados = [];
        // variável que vai receber o número sorteado e que será adicionado na lista 'sorteados'
        let numero;
        //verifica se o número já foi sorteado
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }
            //inclui o número sorteado na lista
            sorteados.push(numero);
        }
        //puxa o elemento que mostra os números sorteados
        let resultado = document.getElementById('resultado');
        //altera texto que mostra os números sorteados
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
        //altera status dos botões
        alterarStatusBotao('btn-reiniciar');
        alterarStatusBotao('btn-sortear');
    } else {
        reiniciar();
        reiniciar();
    }
}
//obtem o número aleatório utilizando o método Math.Floor
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//reinicia o programa
function reiniciar() {
    alterarStatusBotao('btn-reiniciar');
    alterarStatusBotao('btn-sortear');
    limparCampos();
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
}
//altera status dos botões
function alterarStatusBotao(btn) {
    let botaoSortear = document.getElementById(btn);
    //verifica status do botão
    if (botaoSortear.classList.contains('container__botao')) {
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
    } else {
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
    }
}
//limpa inputs
function limparCampos() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}
//Verifica de o valor do input de é maior que o valor do input até
function verificaDe() {
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    if (de > ate) {
        alert('"Do número" não pode ser maior que "Até. Por favor, comece novamente!');
        return false;
    } else {
        return true;
    }
}