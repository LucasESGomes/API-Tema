//Criação do JSON
var json = `{
    "id": 101,
    "nome": "Linkin",
    "sobrenome": "Park",
    "cidade": "Agoura Hills",
    "pais": "United States",
    "imagem": "<img src='img/linkinPark.jpg' width='250px'>",
    "link": "https://fromzero.linkinpark.com/"
}`; 

var json2 = `{
    "id": 102,
    "nome": "Linkin",
    "sobrenome": "Park",
    "cidade": "Agoura Hills",
    "pais": "United States",
    "imagem": "<img src='img/done.jfif' width='250px'>",
    "link": "https://fromzero.linkinpark.com/"
}`;

var json3 = `{
    "id": 103,
    "nome": "Megadeth",
    "sobrenome": "",
    "cidade": "Los Angeles",
    "pais": "United States",
    "imagem": "<img src='img/megadeth.webp' width='250px'>",
    "link": "https://www.megadeth.com/"
}`;

var json4 = `{
    "id": 104,
    "nome": "Metallica",
    "sobrenome": "",
    "cidade": "Los Angeles",
    "pais": "United States",
    "imagem": "<img src='img/lightining.jfif' width='250px'>",
    "link": "https://www.metallica.com/"
}`;

var json5 = `{
    "id": 105,
    "nome": "Gojira",
    "sobrenome": "",
    "cidade": "Baiona",
    "pais": "France",
    "imagem": "<img src='img/gojira.webp' width='250px'>",
    "link": "https://www.gojira-music.com/"
}`; 

var json6 = `{
    "id": 106,
    "nome": "Heavenly",
    "sobrenome": "",
    "cidade": "Paris",
    "pais": "France",
    "imagem": "<img src='img/evil.avif' width='250px'>",
    "link": "https://www.spirit-of-metal.com/pt/band/Heavenly"
}`;

//Converter o texto STRING para JSON
var dados1 = JSON.parse(json);
var dados2 = JSON.parse(json2);
var dados3 = JSON.parse(json3);
var dados4 = JSON.parse(json4);
var dados5 = JSON.parse(json5);
var dados6 = JSON.parse(json6);
//Linkando com JQUERY
var link1 = `<a href="${dados1.link}">Veja o nosso site</a>`;
var link2 = `<a href="${dados2.link}">Veja o nosso site</a>`;
var link3 = `<a href="${dados3.link}">Veja o nosso site</a>`;
var link4 = `<a href="${dados4.link}">Veja o nosso site</a>`;
var link5 = `<a href="${dados5.link}">Veja o nosso site</a>`;
var link6 = `<a href="${dados6.link}">Veja o nosso site</a>`;


function apertar1(){
    document.getElementById('imagem').innerHTML = dados1.imagem; 
    document.getElementById('nome').innerHTML = dados1.nome;
    document.getElementById('sobrenome').innerHTML = dados1.sobrenome;
    document.getElementById('cidade').innerHTML = dados1.cidade;
    document.getElementById('pais').innerHTML = dados1.pais;
    document.getElementById('link').innerHTML = link1;
}

function apertar2(){
    document.getElementById('imagem').innerHTML = dados2.imagem; 
    document.getElementById('nome').innerHTML = dados2.nome;
    document.getElementById('sobrenome').innerHTML = dados2.sobrenome;
    document.getElementById('cidade').innerHTML = dados2.cidade;
    document.getElementById('pais').innerHTML = dados2.pais;
    document.getElementById('link').innerHTML = link2;
}

function apertar3(){
    document.getElementById('imagem').innerHTML = dados3.imagem;
    document.getElementById('nome').innerHTML = dados3.nome;
    document.getElementById('sobrenome').innerHTML = dados3.sobrenome;
    document.getElementById('cidade').innerHTML = dados3.cidade;
    document.getElementById('pais').innerHTML = dados3.pais;
    document.getElementById('link').innerHTML = link3;
}

function apertar4() {
    document.getElementById('imagem').innerHTML = dados4.imagem;
    document.getElementById('nome').innerHTML = dados4.nome;
    document.getElementById('sobrenome').innerHTML = dados4.sobrenome;
    document.getElementById('cidade').innerHTML = dados4.cidade;
    document.getElementById('pais').innerHTML = dados4.pais;
    document.getElementById('link').innerHTML = link4;
}

function apertar5() {
    document.getElementById('imagem').innerHTML = dados5.imagem;
    document.getElementById('nome').innerHTML = dados5.nome;
    document.getElementById('sobrenome').innerHTML = dados5.sobrenome;
    document.getElementById('cidade').innerHTML = dados5.cidade;
    document.getElementById('pais').innerHTML = dados5.pais;
    document.getElementById('link').innerHTML = link5;
}

function apertar6() {
    document.getElementById('imagem').innerHTML = dados6.imagem;
    document.getElementById('nome').innerHTML = dados6.nome;
    document.getElementById('sobrenome').innerHTML = dados6.sobrenome;
    document.getElementById('cidade').innerHTML = dados6.cidade;
    document.getElementById('pais').innerHTML = dados6.pais;
    document.getElementById('link').innerHTML = link6;
}

console.log(dados1)
console.log(dados2)
console.log(dados3)
console.log(dados4)
console.log(dados5)
console.log(dados6)

