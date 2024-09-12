import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: var(--white);

  .inflammation-center {
    margin: 0 auto;
    height: 400px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  .inflammation-header {
    font-size: 24px;
    text-align: center;
    width: 50vw;
  }

  .inflammation-body {
    line-height: 1.5rem;
    text-align: center;
    width: 80vw;
  }

  @media (min-width: 768px) {
    .inflammation-center {
      margin: 0 auto;
      height: 400px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }

    .inflammation-header {
      font-size: 36px;
      text-align: center;
      width: 50vw;
    }

    .inflammation-body {
      line-height: 2rem;
      text-align: center;
      width: 80vw;
    }
  }
`;

export default Wrapper;
