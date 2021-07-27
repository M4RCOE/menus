$.ajax({
    url: "http://localhost:82/menus/consulta.php",
    success: function (r) {
        r2 = JSON.parse(r)

        contenedor = document.getElementById('cmenu')

        for (i = 0; i < r2.length; i++) {
            let a = document.createElement("a");
            a.className = 'dropdown-item'
            a.innerHTML = r2[i].nomMenu
            a.id = r2[i].id
            a.addEventListener("click", menuclick, false);

            contenedor.appendChild(a)

        }
    },
});



function agrega() {
    url = document.getElementById('url').value
    txturl = document.getElementById('textoUrl').value
    contenedor = document.getElementById('contenedor')
    let li = document.createElement("li");
    let div = document.createElement("div");
    div.innerHTML = url
    li.appendChild(div);
    contenedor.appendChild(li);


}
function menuclick() {
    console.log('menu ' + this.innerText)
    document.getElementById('menuS').innerHTML = this.innerText
    $.ajax({
        url: "http://localhost:82/menus/consulta2.php",
        data: { id: this.id },
        type: "POST",
        success: function (r) {
            r2 = JSON.parse(r)
            console.log(r2)
            contenedor = document.getElementById('contenedor')
            contenedor.innerHTML = ''
            for (i = 0; i < r2.length; i++) {
                let li = document.createElement("li");
                let div = document.createElement("div");
                let ol = document.createElement("ol");
                div.innerHTML = r2[i].Menu
                li.appendChild(div);
               
                
                console.log(r2[i].Menu+" "+r2[i].Nivel)

                if (r2[i].Nivel == 0) {
                    contenedor.appendChild(li);
                } else if (r2[i].Nivel == 1){
                    c = contenedor.lastChild
                    ol.appendChild(li);
                    c.appendChild(ol);
                     
                } else if (r2[i].Nivel == 2){
                    c = contenedor.lastChild
                    c2=c.lastChild
                    ol.appendChild(li);
                    c2.appendChild(ol);
                    
                }else if (r2[i].Nivel == 3){
                    c = contenedor.lastChild
                    c2=c.lastChild
                    c3=c2.lastChild
                    ol.appendChild(li);
                    c3.appendChild(ol);
                    
                }else if (r2[i].Nivel == 4){
                    c = contenedor.lastChild
                    c2=c.lastChild
                    c3=c2.lastChild
                    c4=c3.lastChild
                    ol.appendChild(li);
                    c3.appendChild(ol);
                    
                }else if (r2[i].Nivel == 5){
                    c = contenedor.lastChild
                    c2=c.lastChild
                    c3=c2.lastChild
                    c4=c3.lastChild
                    c5=c4.lastChild
                    ol.appendChild(li);
                    c3.appendChild(ol);
                    
                }else if (r2[i].Nivel == 6){
                    c = contenedor.lastChild
                    c2=c.lastChild
                    c3=c2.lastChild
                    c4=c3.lastChild
                    c5=c4.lastChild
                    c6=c5.lastChild
                    ol.appendChild(li);
                    c3.appendChild(ol);
                    
                }
            }console.log(c2)

            
        },
    });
}


