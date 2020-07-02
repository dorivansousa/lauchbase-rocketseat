const usuarios = [
    {nome: "Pedro", tecnologias: ["HTML", "CSS"]},
    {nome: "Fran", tecnologias: ["JavaScript", "CSS"]},
    {nome: "Suane", tecnologias: ["HTML", "Node.js"]},
]

function  checaUsuarioTrabalhaComCSS3(usuario){     
    for (let tecnologia of usuario.tecnologias){
        if (tecnologia === 'CSS') {
            return true;
        }
    }

    return false;
}

function  checaUsuarioTrabalhaComCSS2(usuario){
    const {tecnologias} = usuario;
    
    for (let i = 0; i < tecnologias.length; i++){
        if (tecnologias[i] === 'CSS') {
            return true;
        }
    }

    return false;
}

function  checaUsuarioTrabalhaComCSS(usuario){
    const {tecnologias} = usuario;

    let encontrou = false;
    for (let i = 0; i < tecnologias.length; i++){
        if (tecnologias[i] === 'CSS') {
            encontrou = true;
        }
    }

    return encontrou;
}

for (let i = 0; i < usuarios.length; i++){
    const usuarioTrabalhaComCSS = checaUsuarioTrabalhaComCSS3(usuarios[i]);

    if (usuarioTrabalhaComCSS){
        const {nome} = usuarios[i];
        console.log(`${nome} trabalha com CSS`);
    }
    
}