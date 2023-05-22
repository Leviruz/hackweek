import styled from "styled-components";

export const LoginStyle = styled.div`
  .container {
    margin: 15px;
    border: 1px solid #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding-bottom: 110px;
    max-height: 800px;
    height: 100%;
  }
  @media screen and (max-width: 600px) {
    .container{
      padding: 110px 0;
    }
    
  }
  h3 {
    color: #fff;
  }
  p {
    color: #fff;
  }
  .subtitle{
    
    
    margin: 15px;
  }
  .fsenha {
    border-bottom: 1px solid #fff;
    margin: 15px;
  }
  .criarconta{
    margin-bottom: 15px;
    border-bottom: 1px solid #fff;
  }
  label {
    text-align: start;
    color: #fff;
    margin: 10px;
  }
  input {
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 10px 45px;
    color: #fff;
  }
  .logohw {
    width: 100px;
    height: 100px;
  }
  button {
    /* margin: 85px 0; */
    background-color: #cbef43;
    padding: 10px 90px;
    border-radius: 10px;
    font-weight: 500;
    font-size: large;
    margin-top: 60px;
  }
`;
