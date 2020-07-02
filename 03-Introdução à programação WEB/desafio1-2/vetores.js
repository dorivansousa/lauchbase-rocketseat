const pessoa = {
    nome: 'Dorivan',
    idade: 38,
    tecnologias: [
        {
            nome: 'C++', 
            especialidade: 'Desktop'
        },
        {
            nome: 'C++', 
            especialidade: 'Desktop'
        },
        {
            nome: 'C++', 
            especialidade: 'Desktop'
        }]
}
const { nome, idade} = pessoa;
const { nome:tecnologia, especialidade } = pessoa.tecnologias[0];

console.log(`O ${nome} tem ${idade} e usa a tecnologia ${tecnologia} com especialidade em ${especialidade}`)