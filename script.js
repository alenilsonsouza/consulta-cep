var btn = document.querySelector('.btnBuscar');
var input = document.querySelectorAll('input');
input.forEach((e)=>{
  e.style.color ='rgb(86, 71, 226)';
})
btn.addEventListener('click',function(){
    var cep = document.querySelector('.buscador').value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET',`https://viacep.com.br/ws/${cep}/json/`);
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
        var dados = JSON.parse(xhr.responseText)
        JSON.stringify(dados)
        var log = document.querySelector('.logra');
        log.value = dados.logradouro;
        var bairro = document.querySelector('.bairr');
        bairro.value = dados.bairro;
        var localidade = document.querySelector('.loca');
        localidade.value = dados.localidade;
        var uf = document.querySelector('.uf');
        uf.value = dados.uf;
        } 
    }

})





