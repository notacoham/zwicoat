import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: #0c2331;

  .about-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 650px;
    margin: 0 auto;
    padding: 2rem;
    gap: 1rem;
  }

  .about-header {
    color: var(--white);
    font-size: 36px;
    text-align: center;
    width: 50vw;
  }

  .about-body {
    color: var(--grey-light);
    line-height: 1.5rem;
    text-align: center;
    width: 75vw;
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    align-content: center;
  }

  @media (min-width: 768px) {
    .about-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 600px;
      margin: 0 auto;
      padding: 2rem;
      gap: 2rem;
    }

    .about-header {
      color: var(--white);
      font-size: 48px;
      text-align: center;
      width: 50vw;
    }

    .about-body {
      color: var(--grey-light);
      line-height: 2.5rem;
      text-align: center;
      width: 75vw;
    }

    .btn-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
      align-content: center;
    }
  }
`;

export default Wrapper;
