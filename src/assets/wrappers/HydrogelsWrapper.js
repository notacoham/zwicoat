import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: var(--white);

  .hydrogels-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 500px;
    margin: 0 auto;
    padding: 2rem;
    gap: 0rem;
  }

  .hydrogels-img {
    /* width: 500px;
    height: 400px;
    border-radius: 30px; */
    display: none;
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
      justify-content: center;
      height: 500px;
      margin: 0 auto;
      padding: 2rem;
      gap: 0rem;
    }

    .hydrogels-img img {
      width: 500px;
      height: 400px;
      border-radius: 30px;
      display: flex;
    }

    .hydrogels-img {
      display: flex;
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
