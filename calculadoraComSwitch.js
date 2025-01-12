let n1 = parseInt(prompt("Digite um valor"))
let n2 = parseInt(prompt("Digite um valor"))
let operacao = (prompt("Digite a operação"))

switch(operacao){
    case "+":
        console.log(n1+n2);
        break;
    case "-":
        console.log(n1-n2);
        break;
    case "*":
        console.log(n1*n2);
        break;
    case "/":
        console.log(n1/n2);
        break;
}