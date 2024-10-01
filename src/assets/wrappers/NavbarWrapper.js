import styled from 'styled-components';

const Wrapper = styled.nav`
  background: var(--white);

  nav {
    position: sticky;
    top: 0;
    box-shadow: var(--shadow-elevation-medium);
  }

  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--black);
    font-weight: 500;
    letter-spacing: 2px;
    font-family: 'SUSE', sans-serif;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    font-family: 'SUSE', sans-serif;
  }

  .nav-link {
    color: var(--grey-darkest);
    padding: 0.5rem 0.5rem 0.5rem 0;
    letter-spacing: 2px;
    background-image: linear-gradient(
      transparent 90%,
      var(--primary-1) 90%,
      var(--primary-1) 100%
    );
    background-repeat: no-repeat;
    background-position-y: 100%;
    background-size: 0% 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;
  }

  .nav-link:hover {
    color: var(--primary-2);
    scale: 1.125;
  }

  /* active */

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }

    .nav-link:hover {
      background-position: 100% 100%;
      background-size: 100% 16px;
      cursor: pointer;
      color: var(--black);

      transition: background-size 0.5s cubic-bezier(0.79, 0.01, 0.22, 0.99) 0s,
        background-position 0s step-end 0.5s;
    }
  }
`;

export default Wrapper;
