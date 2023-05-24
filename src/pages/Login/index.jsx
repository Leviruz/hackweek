/* import LogoSVG from "../../assets/logo_hackweek.svg"; */
import LogoSTCC from "../../assets/logoSTCC.png";
import { LoginStyle } from "./styles";
const Login = () => {
  return (
    <div>
      <LoginStyle>
        <div className="container">
          <img src={LogoSTCC} alt="Logo Hackweek" className="logohw" />
          <h3>Bem-vindo!</h3>
          <p className="subtitle">Faça login para continuar</p>
          <label>Usuário</label>
          <input type="text"></input>
          <label>Senha</label>
          <input type="password"></input>
          <p className="fsenha">Esqueci minha senha</p>
          <p className="criarconta">Criar conta</p>
          <button>Entrar</button>
        </div>
      </LoginStyle>
    </div>
  );
};

export default Login;
