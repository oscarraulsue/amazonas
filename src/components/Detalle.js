import React, {useEffect, useState} from 'react'
import { makeStyles} from '@material-ui/core';
import { RecaptchaVerifier } from '@firebase/auth';
import Navbar from './Navbar';


export const Detalle = (data) => {
    // const classes = useStyles();

    console.log(data)
    let imagen = data.history.location.data.element
    let imag = imagen.img
    let imgInit = imag[0];
    const [selecImg, setSelecImg] = useState(imgInit.response)
    const [picture, setPicture] = useState("")
    const [picture0, setPicture0] = useState("")
    const [scrolly, setScrolly] = useState("")
    const [zoom, setZoom] = useState("")
    const [rect, setRect] = useState("")
  

useEffect(() => {
    
     setPicture(document.querySelector('#pictures'))
     setPicture0(document.querySelector('#picture'))
     setRect(document.querySelector('#rect'))
     setZoom(document.querySelector('#zoom'))
     if(zoom){
     zoom.style.backgroundImage = "url(" + imgInit.response + ")";
     }
     window.onscroll = function() {
        setScrolly(window.scrollY)
        
      };

}, [zoom])


// if(picActive === 1){
//     document.querySelector(`#${picActive}`)
//  }
    

    const changeImg = (imgSrc) => {
      
     setSelecImg(imgSrc)
    zoom.style.backgroundImage = "url(" + imgSrc + ")";

}

let w1 = picture.offsetWidth;
let x, y, xx, yy;



let w2 = picture0.offsetWidth;
let h2 = picture0.offsetHeight;

let w3 = rect.offsetWidth;
let h3 = rect.offsetHeight;
const move = (e) => {

    xx = (x-144) * 4.8;
    yy = (y-148) * 4.6; 
    x = e.pageX;
    y = e.clientY;
    if(x < (w1+80)){
        x=w1+80
    }
 
    if(scrolly > 0){
      
        y = scrolly + y;
    }
    if(y < (158)){
        y=158
    }
    if(y > (508)){
        y=508
    }

    if (x > (w1+430)) {
        x=w1+430
       
    }
    
    rect.style.left= (x) + 'px';
    rect.style.top= (y) + 'px';
  


    zoom.style.backgroundPosition = "-" + xx + "px -" + yy + "px";
}

let radio = 3;




    return (
        <>
        <Navbar/>
        <div className="contgrid">
              <div className="container" style={{marginRight:"-70px"}}>
            <div className="pictures" id="pictures">
            {
                        (imag) ?
                            (

                                imag.map((element, index) => (
                                    <div className="contProducto" key={index}>
                                    <img className="img" 
                                    onMouseMove={()=> changeImg(element.response, index)} 
                                    id={index} 
                                    style={{width: "50px"}}
                                    src={element.response} 
                                    alt=""/>  
                                    </div>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }
                 </div>
                
                <div className="picture" id="picture"  onMouseMove={move}>
                
                <img id="pic" src={selecImg} alt=""/>
                </div>
                <div className="rect" id ="rect" ></div>
               
                <div className="zoom" id="zoom"></div>
                </div>
                <div className="detalleProducto" style={{marginRight:"60px"}}>
                    <p style={{fontWeight:"bold", fontSize:"22px"}}>{imagen.nom}</p>
                    <h1 style={{color:"#f0cd05"}}>US$ {imagen.precio}</h1>
                    <p>{imagen.detPre}</p>
                    <h1 style={{fontSize:"20px"}}>Color: {imagen.color}</h1>
                    <p>{imagen.detProducto}</p>
                </div>
                <div className="detallePrecio">
                    <h1 style={{color:"#f0cd05"}}>US$ {imagen.precio}</h1>
                    <p>{imagen.detPre}</p>
                    <button>Agregar al Carrito</button>
                    <button>Comprar ahora</button>
                </div>
            

        </div>
        </>
    )
}

