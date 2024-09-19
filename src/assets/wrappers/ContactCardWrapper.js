import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: var(--white);

  .contact-center {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 70vh;
  }

  .contact-card {
    width: 80vw;
  }

  @media (min-width: 768px) {
    .contact-center {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 70vh;
    }
  }
`;

export default Wrapper;
