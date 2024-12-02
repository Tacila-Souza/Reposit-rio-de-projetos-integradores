import  Navbar  from "../../Componentes/Navbar";
import "./Sobre.css";
import imgallison from "../../imagens/img-allison.jpg";
import imgjoana from "../../imagens/img-joana.jpg";
import imgtacila from "../../imagens/img-tacila.jpg";
import imgthaisy from "../../imagens/img-thaisy.jpg";

function Sobre () {
    return (
        <>
        <Navbar/>
        <body style={{backgroundColor:'#dfe8ff'}}>

            <div className="container ">

                <div className="row text-center ">
                    <h2 className="sobreoprojeto" id="hazul">Sobre o projeto CONECT ETE PE</h2>
                    <p>ETE Jurandir Bezerra Lins, Igarassu - PE</p>
                </div>

                <div className="row fotos-sobre text-center">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={imgallison} className="img-fluid"></img>
                        <h3 id="hazul" >Allison Paulino</h3>
                        <p>Desenvolimento</p>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={imgjoana} className="img-fluid"></img>
                        <h3 id="hazul">Joana Dark</h3>
                        <p>Desenvolimento</p>
                    </div>


                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={imgtacila} className="img-fluid"></img>
                        <h3 id="hazul">Tacila Souza</h3>
                        <p>Desenvolimento</p>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={imgthaisy} className="img-fluid"></img>
                        <h3 id="hazul">Thaisy Ferreira</h3>
                        <p>Desenvolimento</p>
                    </div>

                </div>


                <div className="row text-center justify-content-center">
                    <h2 id="hazul">Entre em contato com a gente!</h2>
                    <p>Se você deseja contribuir com o nosso projeto ou tem alguma sugestão entre em contato conosco através do e-mail: </p>
                    <p className="col-6" id="email">conect.etepe@gmail.com</p>
                    <p>Agradecemos o contato, retornaremos o mais breve possível.</p>
                </div>


            </div>
        </body>

    
      
        </>
    )
}

export default Sobre;