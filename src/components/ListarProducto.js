import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

export const ListarProducto = (setsearch) => {
    const [end, setEnd] = useState(10)

    let noFind = "";
    let noFind2 = "";
    const { producto } = useSelector(store => store.productos);


    useEffect(() => {

        window.scroll({ top: 0 })
        setEnd(10)

    }, [])

    let producto2 = producto;

    // if (setsearch && setsearch !== '') {

    //     setsearch = setsearch.toLowerCase();
    //     producto2 = producto.filter(prod => prod.nombre.toLowerCase().includes(setsearch));
    //        if(!producto2.length){
    //     console.log("no encontre")
    //     noFind="https://res.cloudinary.com/dky22nhv5/image/upload/v1632084156/buscar_xsyvmf.png"
    //     noFind2=`No se encontraron resultados para "${setsearch}"`;
    //     }
    // }

  
    let prodImp = producto2.slice(0, end)
    return (
        <>
        <InfiniteScroll
        dataLength={prodImp.length}
        next={() => setEnd(end + 2)}
        hasMore={true}
    >
    <div className="contProd">
                    {
                        (prodImp) ?
                            (

                                prodImp.map((element, index) => (
                                    <Link
                                    key={index}
                                    style={{textDecoration: "none", color: "black"}}
        to={{
          pathname: "/detalle",
          data: {element}
        }}
      >
     
                                    <div className="contProducto" >

                                    <img className="imgPro" src={element.img[0].response} alt=""  />
                                        <h1 className="nomPro">{element.nom}</h1>
                                        <h1 className="prePro">US$ {element.precio}</h1>
                                        <h1 className="detpPro">{element.detPre}</h1>
    
                                    </div>
                                   
      </Link>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }
            
        </div>
        </InfiniteScroll>
        <div className="noFind">
        <img style={{ margin: "auto", display: "flex", width:"420px", height: "330px"}} src={noFind} alt="" />
         <h1 style={{ width:"100%",margin: "0 auto", display: "flex", justifyContent: "center",textalign: "center"}}>{noFind2}</h1>
    </div>
</>
    )
}
