import styled from 'styled-components';

const Wrapper = styled.nav`
  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 1rem;
    /* background: var(--primary-3); */
  }

  form {
    max-width: 500px;
    width: 100%;
    background: white;
    padding: 25px 25px 30px;
    border-radius: 30px;
    box-shadow: var(--shadow-elevation-high);
    color: #333;
    margin: 25px;
  }

  .form h2 {
    font-size: 30px;
    text-align: left;
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
    text-align: left;
    color: var(--grey-darkest);
  }

  form .input-box {
    margin-top: 20px;
  }

  .input-box .field {
    width: 100%;
    height: 50px;
    background: transparent;
    border: 2px solid #ddd;
    outline: none;
    border-radius: 30px;
    padding: 15px;
    font-size: 16px;
    color: #333;
    margin-top: 8px;
  }

  .input-box .field.mess {
    height: 200px;
    resize: none;
  }

  form button {
    width: 100%;
    height: 55px;
    /* background: var(--primary-2); */
    border: none;
    /* border-radius: 30px; */
    /* box-shadow: var(--shadow-elevation-high); */
    /* cursor: pointer; */
    font-size: 16px;
    /* color: #fff; */
    /* font-weight: 500; */
    margin-top: 25px;
    transition: 0.5s;
  }
`;

export default Wrapper;
