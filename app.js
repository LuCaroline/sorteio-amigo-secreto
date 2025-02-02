let listaAmigos = [];

function verificarEnter(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();  
    }
}

function adicionarAmigo(){
    //console.log('o botao foi clicado');
    let nome = document.getElementById('amigo').value.trim();
    //console.log('Nome do amigo', nome);

    if (nome === ""){
        alert('Por favor, digite um nome válido!')
    } else {
        listaAmigos.push(nome);
        let li = document.createElement('li');
        li.textContent = nome;
        
        document.getElementById('listaAmigos').appendChild(li);  
    }

    document.getElementById('amigo').value = "";
}

function sortearAmigo(){
    if (listaAmigos.length === 0){ 
        document.getElementById('resultado').innerHTML = "";
        alert("Não há amigos na lista para sortear!");
        return;
    }
   
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado]; 

    document.getElementById('resultado').innerHTML = "";

    let liResultado = document.createElement('li');
    liResultado.textContent = 'O seu amigo secreto é: '+ amigoSorteado;

    document.getElementById('resultado').appendChild(liResultado);
    listaAmigos.splice(indiceSorteado, 1);

    document.getElementById('listaAmigos').innerHTML = "";
            listaAmigos.forEach(nome => {
                let li = document.createElement('li');
                li.textContent = nome;
                document.getElementById('listaAmigos').appendChild(li);
            })

}
