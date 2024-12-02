import  Navbar  from "../../Componentes/Navbar";
import "./Home.css";

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

    <div className="row justify-content center">
    <div className="img_projeto_destaque w30" style={{width: '30%' , margin: '0 auto'}} id="img_projeto1">
    </div>

    <div className="img_projeto_destaque w30" style={{width: '30%' , margin: '0 auto' }} id="img_projeto2">
    </div>

    <div className="img_projeto_destaque w30" style={{width: '30%' , margin: '0 auto'}} id="img_projeto3">
    </div>
    </div>

    {/*X-PROJETOS DESTAQUE*/}


    {/*PESQUISA*/}

    <div class="px-4 text-center" id="box_pesquisa">
    <div class="col-lg-6 mx-auto">
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input class="form-control border rounded-pill" type="search" placeholder="Pesquise por ETE, Cidade ou nome de Projeto" id="example-search-input"></input>
      </div>
    </div>
    </div>

    {/*X-PESQUISA*/}


    {/*PROJETOS RECENTES*/}

    <div id="projetos_recentes">
    <h4>Projetos recentes
    </h4>
    </div>

    <div className="row justify-content center">
    <div className="img_projeto_destaque" style={{width: '22%' , margin: '0 auto 20px auto'}} id="img_projeto4">
    </div>

    <div className="img_projeto_destaque" style={{width: '22%' , margin: '0 auto 20px auto' }} id="img_projeto5">
    </div>

    <div className="img_projeto_destaque" style={{width: '22%' , margin: '0 auto 20px auto'}} id="img_projeto6">
    </div>

    <div className="img_projeto_destaque" style={{width: '22%' , margin: '0 auto 20px auto'}} id="img_projeto7">
    </div>
    </div>


    <div className="row justify-content center">
    <div className="img_projeto_destaque" style={{width: '22%' , margin: '0 auto 20px auto'}} id="img_projeto8">
    </div>

    <div className="img_projeto_destaque" style={{width: '22%' , margin: '0 auto 20px auto'}} id="img_projeto9">
    </div>

    <div className="img_projeto_destaque" style={{width: '22%' , margin: '0 auto 20px auto'}} id="img_projeto10">
    </div>

    <div className="img_projeto_destaque" style={{width: '22%' , margin: '0 auto 20px auto'}} id="img_projeto11">
    </div>
    </div>

    {/*x-PROJETOS RECENTES*/}

    <div style={{ height: '30px'}}>   </div>

  </div>{/*X-CONTAINER*/}

  </body>
</>

  );
}

export default Home;