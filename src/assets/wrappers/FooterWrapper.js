import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: #0c2331;

  .footer-center {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 30vh;
    align-items: center;
    margin-top: 5rem;
  }
  .footer-logo {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
  }

  .footer-header {
    color: var(--white);
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
  }

  .footer-link {
    color: var(--white);
    text-decoration: none;
    font-size: 18px;
  }

  .footer-link:hover {
    transition: var(--transition);
    color: var(--primary-3);
  }

  .footer-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
  }

  .footer-contacts {
    font-size: 18px;
    color: var(--white);
  }
`;

export default Wrapper;
