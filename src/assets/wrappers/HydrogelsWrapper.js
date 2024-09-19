import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: var(--white);

  .hydrogels-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100vh;
    margin: 0 auto;
    padding: 2rem;
    gap: 0rem;
  }

  .hydrogels-img {
    display: none;
  }

  img {
    box-shadow: var(--shadow-elevation-high);
  }

  .hydrogels-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 50%;
  }

  .hydrogels-header {
    font-size: 24px;
    text-align: center;
    width: 80vw;
  }

  .btn {
    font-size: 14px;
  }

  .hydrogels-body {
    line-height: 1.5rem;
    text-align: center;
    width: 80vw;
  }

  @media (min-width: 768px) {
    background-color: var(--white);

    .hydrogels-center {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      height: 100vh;
      margin: 0 auto;
      padding: 2rem;
      gap: 0rem;
    }

    .hydrogels-img img {
      width: 100%;
      border-radius: 30px;
      display: flex;
    }

    .hydrogels-img {
      display: flex;
      padding: 4rem;
    }

    .hydrogels-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      width: 50%;
    }

    .hydrogels-header {
      font-size: 36px;
      text-align: center;
      width: 50%;
    }

    .hydrogels-body {
      line-height: 2rem;
      text-align: center;
      width: 80%;
    }
  }
`;

export default Wrapper;
