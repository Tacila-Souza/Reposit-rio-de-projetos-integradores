import { Link } from "react-router-dom";
import Navbar from "../../Componentes/Navbar";
import "./Paglogin.css";

function Paglogin() {
    return (
        <>
            <Navbar />
            <body style={{backgroundColor:"#dfe8ff", height:"650px"}}>


            <div class="container" >
                <div className="row justify-content-center pb-3" >
    

                <div className="col-8 centralizar" >

                    <h2 style={{marginTop: "60px", textAlign:"center"}} id="hazul">Fazer Login</h2>

                    <form action="/action_page.php">

                    <div class="mb-3 mt-3">
                        <label for="email">Digite seu e-mail:</label>
                        <input type="email" class="form-control" id="email" placeholder="" name="email" />
                    </div>

                    <div class="mb-3">
                        <label for="pwd">Digite sua senha:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="" name="pswd" />
                    </div>

                    <div class="form-check mb-3">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember" /> Lembrar-me
                        </label>
                    </div>
                    
                    </form>

                    <div className="mt-3 mb-3">
                    <p className="text-body-secondary">Esqueceu a senha? </p>
                    <a href="#" className="px-2">Clique aqui</a>
                    </div>

                    <div className="centralizar">
                    <button type="submit" class="btn btn-primary centralizar" id="centralizar">Entrar</button>
                    </div>
                    
                    <div className="text-center" id="" style={{marginTop:"45px"}}>
                    <p className="text-body-secondary">Não se cadastrou ainda? </p>
                    <Link to="/Formulario" className="px-2">Crie sua conta</Link>
                    </div>



                </div>

                </div>
            </div>

            </body>

        </>
    )
}

export default Paglogin;