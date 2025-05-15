/*declarando variaveis*/
/*criando uma função para calcular o IMC*/
/*comentaria de bloco*/
//comentario de linha


function calcImc(){
    let altura = (document.getElemetById("al").value)/100;// divisão por 100 para converter em metros.
    
    let peso = document.getElementById("ps").value;

    // converter para numero
    altura = parseFloat(altura);
    /* tipos de dados:
    int = numeros intriro 
    float = de pontos flutuante, exemplo o preço da gasolina 6.27
    string = texto
    boolean = verdadeiro ou falso
     */

    peso = parseFloat(peso);

    let imc = peso / (altura * altura);
    window.alert("Seu IMC é: " + imc.toFixed(2))// exibe com 2 casas decimais


}
// aula

function alternarTema_escuro(){
    const corpo = document.body;//corpo do HTML
    corpo.classList.toggle("escuro");

}
function alternarTema_claro(){
    const corpo = document.body;//corpo do HTML
    corpo.classList.toggle("claro");
}