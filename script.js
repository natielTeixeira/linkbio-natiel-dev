

function enviar(event){
    event.preventDefault();
    
    const nome = document.querySelector('#nome').value.trim();
    const mensagem  = document.querySelector('#mensagem').value.trim();
    const phone = '5518998010298';

    if(!nome || !mensagem){
        alert('Por favor, preencha todos os campos.');
        return;
    }
    const texto = `Olá!, Me chamo ${nome}, ${mensagem}`;
    const msgFormat = encodeURIComponent(texto);

    const url = `https://wa.me/${phone}?text=${msgFormat}`;
    window.open(url, '_blank');
    

}