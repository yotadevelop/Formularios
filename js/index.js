var bt  = document.getElementById("bt");
var bt2 = document.getElementById("btsum");
var tbody = document.getElementById("tbody");
var bt3 = document.getElementById("bt3");


bt.addEventListener("click",function(){
    var txt = document.getElementById("txt");
    var res = document.getElementById("res");
    var name = txt.value;
    
    if(name==""){
        alert("Enter your name");
    }else{
        res.style.color= "green";
        res.innerHTML +=  "Hi "+name +"<br>";
        txt.value="";
        txt.focus();
    }

    
    //alert("Hi "+name)
});

bt2.addEventListener("click", ()=>{
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var res = document.getElementById("res2");
    
    var suma = parseInt(n1.value) + parseInt(n2.value);

    if(isNaN(suma)){
        res.style.color="red";
        res.innerHTML= "ERROR: ingrese solo numeros porfavor o verifique que los campos no esten vacios"
    }else{
        res.style.color="green";
        res.innerHTML = "SUMA: "+suma;
    }

    
});

bt3.addEventListener("click", ()=>{
    loadPaises();
});

function loadPaises(){
    var paises = ['Chile','Argentina','Peru','Colombia','Ecuador'];
    tbody.innerHTML="";
    
    paises.forEach(item =>{
        var fila = tbody.insertRow();
        var celda = fila.insertCell();
        celda.innerHTML=item;
        tbody.append(fila);
    });
}

