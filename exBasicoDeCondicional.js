let name = prompt("Insira seu nome"), age = prompt("Insira sua idade    "), isStudent = false;
if(age < 16 ){
    alert(`Nome = ${name}\nIdade = ${age}\nStatus = Acesso negado`);
}
else if(age <= 17){
    alert(`Nome = ${name}\nIdade = ${age}\nStatus = Você precisa de autorização de um responsável`);
}
else{
    isStudent = confirm("Você é um estudante?");
    if(isStudent == false){
        alert(`Nome = ${name}\nIdade = ${age}\nPercentual de desconto = 10%`);
    }
    else if(isStudent && (age < 25)){
        alert(`Nome = ${name}\nIdade = ${age}\nPercentual de desconto = 20%`);
    }
    else{
        alert(`Nome = ${name}\nIdade = ${age}\nPercentual de desconto = 30%`);
    }
}