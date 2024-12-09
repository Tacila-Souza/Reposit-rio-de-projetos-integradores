import Navbar from "../../Componentes/Navbar";
function formulario() {
  return (
      
        <>
        <Navbar/>
        <body style={{backgroundColor:"#dfe8ff", height:"650px"}}>

        <div class="container" >
                <div className="row justify-content-center text-center " >
    

                <div className="col-8 " style={{display:"block"}} > 
                <h2 className="" id="hazul" style={{marginTop: "60px"}}>Criar conta </h2>
                
                

                <link rel="stylesheet" href="style.css"/>
                

                <form className="row 1 pb-3">

                  <div className="col-6">
                    <label for="exampleInputEmail1" className="form-label">Nome Completo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-6">
                    <label for="exampleInputPassword1" className="form-label">Data de Nascimento</label>
                    <input type="date" className="form-control" id="exampleInputPassword1" />
                  </div>
                  
                </form>

                <form className="row 2 pb-3">
                  
                  <div className="col-6">
                    <label for="exampleInputEmail1" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-6">
                    <label for="exampleInputPassword1" className="form-label">Confirme sua senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  
                </form>

                <form className="row 3">
                  <div className="col-6">
                    <label for="exampleInputEmail1" className="form-label">Email </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-6">
                    <label for="exampleInputPassword1" className="form-label">Cidade</label>
                    <input type="email" className="form-control" id="exampleInputPassword1" />
                  </div>
                  
                </form>
                <br></br>
                <div className="centralizar">
                    <button type="submit" class="btn btn-primary centralizar" id="centralizar">Entrar</button>
                    </div>
                </div>
                </div>
                </div>
               </body>
              </>
              )
}

              export default formulario;