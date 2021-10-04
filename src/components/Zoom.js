import React, {useEffect, useState} from 'react'
import { makeStyles} from '@material-ui/core';
import { RecaptchaVerifier } from '@firebase/auth';


export const Zoom = () => {
    // const classes = useStyles();
    const [selecImg, setSelecImg] = useState("")
    const [picture, setPicture] = useState("")
    const [picture0, setPicture0] = useState("")
    const [picture1, setPicture1] = useState("")
    const [picture2, setPicture2] = useState("")
    const [picture3, setPicture3] = useState("")
    const [picture4, setPicture4] = useState("")
    const [picture5, setPicture5] = useState("")
    const [picture6, setPicture6] = useState("")
    const [picActive, setPicActive] = useState(1)
    const [scrolly, setScrolly] = useState("")
    const [zoom, setZoom] = useState("")
    const [rect, setRect] = useState("")

useEffect(() => {
  
     setPicture(document.querySelector('#pictures'))
     setPicture0(document.querySelector('#picture'))
     setPicture1(document.querySelector('#pic1'))
     setPicture2(document.querySelector('#pic2'))
     setPicture3(document.querySelector('#pic3'))
     setPicture4(document.querySelector('#pic4'))
     setPicture5(document.querySelector('#pic5'))
     setPicture6(document.querySelector('#pic6'))
     setRect(document.querySelector('#rect'))
     setZoom(document.querySelector('#zoom'))
     window.onscroll = function() {
        setScrolly(window.scrollY)
        console.log(scrolly);
      };

}, [])


if(picture1 && picActive === 1){
   picture1.classList.add('img-active')
}
    let picList = [picture1,picture2,picture3,picture4,picture5,picture6]
    
    
const changeImg = (imgSrc, n) => {

    setSelecImg(imgSrc)
    zoom.style.backgroundImage = "url(" + imgSrc + ")";
     picList[picActive - 1].classList.remove('img-active')
     console.log(picList[picActive - 1])
  console.log( picList[n - 1].classList.remove('img-active'))
  picList[n - 1].classList.add('img-active')
  setPicActive(n)
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
  

    console.log(zoom.style.backgroundPosition = "-" + xx + "px -" + yy + "px")
    zoom.style.backgroundPosition = "-" + xx + "px -" + yy + "px";
}

let radio = 3;




    return (
        <div>
            <h2 className="h2">zoom</h2>
            <div className="container">
                <div className="pictures" id="pictures">
                    <img className="img" onMouseMove={()=> changeImg('https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/custom_gift_238x238.jpg', 1)} id="pic1" src="https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/custom_gift_238x238.jpg" alt=""/>
                    <img className="img" onMouseMove={()=> changeImg('https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/baby_gift_238x238.jpg', 2)} id="pic2" src="https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/baby_gift_238x238.jpg" alt=""/>
                    <img className="img" onMouseMove={()=>changeImg("https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/Holiday_238x238-2.jpg",3)} id="pic3" src="https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/Holiday_238x238-2.jpg" alt=""/>
                    <img className="img" onMouseMove={()=>changeImg("https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/custom_gift_238x238.jpg",4)} id="pic4" src="https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/custom_gift_238x238.jpg" alt=""/>
                    <img className="img" onMouseMove={()=>changeImg("https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/wedding_registry_238x238.jpg",5)} id="pic5" src="https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/wedding_registry_238x238.jpg" alt=""/>
                    <img className="img" onMouseMove={()=>changeImg("https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/custom_gift_238x238.jpg",6)} id="pic6" src="https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/custom_gift_238x238.jpg" alt=""/>
                </div>
                
                <div className="picture" id="picture"  onMouseMove={move}>
                
                           <img id="pic" src={selecImg} alt=""/>
                </div>
                <div className="rect" id ="rect" ></div>
               
                <div className="zoom" id="zoom">
                </div>
            </div>

        </div>
    )
}
