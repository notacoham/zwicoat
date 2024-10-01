import styled from 'styled-components';

const Wrapper = styled.nav`
  .tech-hero-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    max-height: 500px;
  }

  .tech-header {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: white;
  }

  .tech-title {
    color: white;
  }

  .tech-content-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
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
    height: 70vh;
  }

  .publications-header {
    font-size: 36px;
    text-align: center;
    width: 80vw;
  }

  .tech-content-header {
    font-size: 36px;
    text-align: center;
    width: 80vw;
  }

  @media (min-width: 768px) {
    .tech-hero-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }

    .tech-content-body {
      font-size: 20px;
      text-align: justify;
    }

    .tech-content-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 50vh;
    }

    p {
      line-height: 2rem;
      text-align: center;
      width: 80vw;
    }

    .tech-publications {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5rem;
      height: 50vh;
    }

    .publications-header {
      font-size: 36px;
      text-align: center;
      width: 50vw;
    }

    .tech-content-header {
      font-size: 36px;
      text-align: center;
      width: 60vw;
    }

    .turn-page-header {
    justify-self:center
    }
  }
`;

export default Wrapper;
