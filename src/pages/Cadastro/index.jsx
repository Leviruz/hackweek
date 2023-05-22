import LogoSVG from "../../assets/logo_hackweek.svg";

import { useState } from "react";
import { RegisterStyle } from "./styles";

const Register = () => {
  const [name, setName] = useState("");
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Estado para armazenar a opção selecionada
  const handleSubmit = (e) => {
    e.preventDefault();
    // adicionar a lógica para enviar os dados do formulário para o servidor
    console.log("Dados enviados:", { name, matricula, password, role });
  };

  return (
    <RegisterStyle>
      <div className="container">
        <img src={LogoSVG} alt="logo HackWeek" className="logohw" />
        <form onSubmit={handleSubmit}>
          <h3>Registrar-se</h3>
          <div className="div_input">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="div_input">
            <label htmlFor="matricula">Matrícula:</label>
            <input
              type="number"
              id="number"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              required
            />
          </div>
          <div className="div_input">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="div_input">
            <label htmlFor="role">Perfil:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Selecione...</option>
              <option value="orientador">Orientador</option>
              <option value="aluno">Aluno</option>
            </select>
          </div>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </RegisterStyle>
  );
};

export default Register;
