import { styled } from "styled-components";

export const RegisterStyle = styled.div`
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
    padding-bottom: 170px;
  }
  @media screen and (max-width: 600px) {
    .container {
      padding-bottom: 220px;
    }
    .logohw {
      margin-top: 50px;
    }
    label {
      margin: 10px 0;
    }
    button {
      margin-top: 20px;
    }
  }

  h3 {
    color: #fff;
    text-align: center;
  }
  p {
    color: #fff;
    margin: 50px;
  }
  .fsenha {
    border-bottom: 1px solid #fff;
  }
  label {
    text-align: start;
    color: #fff;
  }
  .div_input {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 10px 45px;
    color: #fff;
  }
  .logohw {
    margin-top: 5px;
    width: 100px;
    height: 100px;
  }
  select {
    background-color: #383b45;
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 10px 70px;
    margin-top: 20px;
    color: #fff;
  }
  button {
    background-color: #cbef43;
    padding: 10px 70px;
    border-radius: 10px;
    font-weight: 500;
    font-size: large;
    margin: 0px 15px;
    margin-top: 35px;
  }
`;
