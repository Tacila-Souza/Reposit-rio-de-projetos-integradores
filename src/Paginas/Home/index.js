import  Navbar  from "../../Componentes/Navbar";
import "./Home.css";
import "../Projeto/index";

import img1 from "../../imagens/1.png";
import img2 from "../../imagens/2.png";
import img3 from "../../imagens/3.png";

import img4 from "../../imagens/4.png";
import img5 from "../../imagens/5.png";
import img6 from "../../imagens/6.png";
import img7 from "../../imagens/7.png";
import img8 from "../../imagens/8.png";
import img9 from "../../imagens/9.png";
import img10 from "../../imagens/10.png";
import img11 from "../../imagens/11.png";

function Home () {
  return (
<> 

   <Navbar/>

  <body style={{backgroundColor:'#dfe8ff'}}>

  {/*Paragrafo*/}
    
  <div  id="paragrafo" style={{padding:'30px 0 30px 0', backgroundColor: '#0a3dbf', color:'white'}}>

  <div className="container" style={{backgroundColor: '#0a3dbf'}}>

  <div className="row justify-content center">
    
    <h2 style={{marginBottom:'25px', textAlign:'center'}}>Todos os projetos integrados das ETE's conectados em um só Lugar</h2>
    <p style={{textAlign:'center', color:"white"}}>O Repositório conect ETE PE é uma base de dados online que objetiva reunir, de forma organizada e acessível, a produção científica e documental das ETE'S de toda RMR
    com o intuito de torná-la acessível aos pesquisadores e ao grande público nacional e internacional.</p>
    
    </div>
    </div>

  </div>

  {/*Paragrafo*/}

    <div className="container">

    {/*PROJETOS DESTAQUE*/}


    <div id="projetos_destaque">
    <h4>Projetos em destaques
    <i class="bi bi-star-fill"></i>
    </h4>
    </div>

    {/*PROJETOS DESTAQUE*/}

                    <div className="row text-center" >
                    
                    <div className="col-lg-4 col-md-12 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img1} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}}></img>
                        <h4 id="hazul" className="pt-3" style={{}}>Scoop</h4>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img2} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}}></img>
                        <h4 id="hazul" className="pt-3" >Market delivery</h4>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img3} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}}></img>
                        <h4 id="hazul" className="pt-3">Portal T.E.A</h4>
                        </a>
                    </div>

                </div>

    {/*PESQUISA*/}

    <div class="px-4 text-center" id="box_pesquisa">
    <div class="col-lg-6 mx-auto">
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input class="form-control border rounded-pill" type="search" placeholder="Pesquise por ETE, Cidade ou nome de Projeto" id="example-search-input"></input>
      </div>
    </div>
    </div>


    <div id="projetos_destaque" style={{margin:'0', padding:'0 0 30px 0'}}>
    <h4>Projetos recentes
    </h4>
    </div>
    {/* ROW PROJETOS RECENTES 1*/}

    <div className="row text-center" >
                    
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img4} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}}></img>
                        <h4 id="hazul" className="pt-2" style={{}}>Projeto 4</h4>
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img5} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}}></img>
                        <h4 id="hazul" className="pt-2" style={{}}>Projeto 5</h4>
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img6} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}}></img>
                        <h4 id="hazul" className="pt-2" style={{}}>Projeto 6</h4>
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img7} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}}></img>
                        <h4 id="hazul" className="pt-2" style={{}}>Projeto 7</h4>
                        </a>
                    </div>

    </div>


        {/* ROW PROJETOS RECENTES 2*/}

        <div className="row text-center" style={{paddingBottom:'20px'}}>
                    
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img8} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}}></img>
                        <h4 id="hazul" className="pt-2" style={{}}>Projeto 8</h4>
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img9} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}}></img>
                        <h4 id="hazul" className="pt-2" style={{}}>Projeto 9</h4>
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img10} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}}></img>
                        <h4 id="hazul" className="pt-2" style={{}}>Projeto 10</h4>
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img11} className="img-fluid img_projeto_destaque" style={{height:'220px', width:'100%'}}></img>
                        <h4 id="hazul" className="pt-2" style={{}}>Projeto 11</h4>
                        </a>
                    </div>

    </div>

  </div>{/*X-CONTAINER*/}

  </body>
</>

  );
}

export default Home;