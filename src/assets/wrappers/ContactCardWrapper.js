import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: var(--white);

  .contact-center {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 250px;
  }

  .contact-btn {
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 400px;
  }
`;

export default Wrapper;
