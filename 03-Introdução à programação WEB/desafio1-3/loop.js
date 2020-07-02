const usuarios = [
    {nome: "Pedro", tecnologias: ["HTML", "CSS"]},
    {nome: "Fran", tecnologias: ["JavaScript", "CSS"]},
    {nome: "Suane", tecnologias: ["HTML", "Node.js"]},
]

for (let i = 0; i < usuarios.length; i++){
    const {nome, tecnologias} = usuarios[i];
    console.log(`${nome} trabalha com ${tecnologias}`);
}