Cmenu()
function Cmenu(){
    $.ajax({
        url: "http://localhost:82/menus/php/consulta.php",
        success: function (r) {
            r2 = JSON.parse(r)
    
            contenedor = document.getElementById('cmenu')
            contenedor.innerHTML = ''
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
}


 



function agrega() {
    console.log('agregando')
    url = document.getElementById('url').value
    txturl = document.getElementById('textoUrl').value
    contenedor = document.getElementById('contenedor')
    let li = document.createElement("li");
    let div = document.createElement("div");
    div.innerHTML = url
    li.appendChild(div);
    contenedor.appendChild(li);
    niveles() 

}
function menuclick() {
    
    console.log('menu ' + this.innerText)
    document.getElementById('menuS').innerHTML = this.innerText
    $.ajax({
        url: "http://localhost:82/menus/php/consulta2.php",
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
               
                
                /* console.log(r2[i].Menu+" "+r2[i].Nivel) */

                if (r2[i].Nivel == 0) {
                   
                    contenedor.appendChild(li);
                } else if (r2[i].Nivel == 1){
                   
                    c = contenedor.lastChild
                    ol.appendChild(li);
                    ol.id='1'
                    c.appendChild(ol);
                     
                } else if (r2[i].Nivel == 2){
                    
                    c = contenedor.lastChild
                    c2=c.lastChild
                    ol.appendChild(li);
                    ol.id='2'
                    c2.appendChild(ol);
                    
                }else if (r2[i].Nivel == 3){
                    
                    c = contenedor.lastChild
                    c2=c.lastChild
                    c3=c2.lastChild
                    ol.appendChild(li);
                    ol.id='3'
                    c3.appendChild(ol);
                    
                }else if (r2[i].Nivel == 4){
                    c = contenedor.lastChild
                    c2=c.lastChild
                    c3=c2.lastChild
                    c4=c3.lastChild
                    ol.appendChild(li);
                    ol.id='4'
                    c3.appendChild(ol);
                    
                }else if (r2[i].Nivel == 5){
                    c = contenedor.lastChild
                    c2=c.lastChild
                    c3=c2.lastChild
                    c4=c3.lastChild
                    c5=c4.lastChild
                    ol.appendChild(li);
                    ol.id='5'
                    c3.appendChild(ol);
                    
                }else if (r2[i].Nivel == 6){
                    c = contenedor.lastChild
                    c2=c.lastChild
                    c3=c2.lastChild
                    c4=c3.lastChild
                    c5=c4.lastChild
                    c6=c5.lastChild
                    ol.appendChild(li);
                    ol.id='6'
                    c3.appendChild(ol);
                    
                }
            }  
            niveles() 
            
        },
    });
}


function agrega_menu(){
    fn=new Date()    
    m=document.getElementById('nmenu').value
    u=document.getElementById('nuser').value
    f=fn.getFullYear()+'-'+fn.getMonth()+'-'+fn.getDate()
 
    $.ajax({
        url: "http://localhost:82/menus/php/agregaM.php",
        type: "POST",
        data:{nombre:u,menu:m,fecha:f},
        success: function (r) {
            console.log(r)
            Cmenu();
            document.getElementById('nmenu').value=''
            document.getElementById('nuser').value=''
        },
    });
}

function niveles(){
    let hijos=[]
             h=$('#contenedor').find('li')
             console.log()
            for(ñ=0;ñ<h.length;ñ++){
                
                if(h[ñ].parentNode.id=='contenedor'){
                    hijos.push([h[ñ].innerText,0])
                }else if(h[ñ].parentNode.id==1){
                    hijos.push([h[ñ].innerText,1])

                }else if(h[ñ].parentNode.id==2){
                    hijos.push([h[ñ].innerText,2])

                }else if(h[ñ].parentNode.id==3){
                    hijos.push([h[ñ].innerText,3])

                }else if(h[ñ].parentNode.id==4){
                    hijos.push([h[ñ].innerText,4])
                } 
               
            }
            console.log(hijos)
}