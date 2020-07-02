const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if (contribuicao > 35) {
    if (sexo = "F") {
        if ((idade + contribuicao) > 85) {
            console.log(nome + ", você já pode se aposentar");
        }
        else {
            console.log(nome + ", você ainda não pode se aposentar");
        }
    }
    else { //masculino
        if ((idade + contribuicao) > 85) {
            console.log(nome + ", você já pode se aposentar");
        }
        else {
            console.log(nome + ", você ainda não pode se aposentar");
        }
    }
}
else {
    console.log("Silvana, você ainda não pode se aposentar");
}