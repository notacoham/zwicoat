import styled from 'styled-components';

const Wrapper = styled.nav`
  .tech-hero-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .tech-content-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  p {
    line-height: 1.5rem;
    text-align: center;
    width: 80vw;
  }

  .tech-publications {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
    height: 100vh;
  }

  .publications-header {
    font-size: 36px;
    text-align: center;
    width: 50vw;
  }

  .tech-content-header {
    font-size: 36px;
    text-align: center;
    width: 50vw;
  }

  @media (min-width: 768px) {
    .tech-hero-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }

    .tech-content-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 400px;
    }

    p {
      line-height: 2rem;
      text-align: center;
      width: 80vw;
    }

    .tech-publications {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }

    .publications-header {
      font-size: 36px;
      text-align: center;
      width: 50vw;
    }

    .tech-content-header {
      font-size: 36px;
      text-align: center;
      width: 50vw;
    }
  }
`;

export default Wrapper;
