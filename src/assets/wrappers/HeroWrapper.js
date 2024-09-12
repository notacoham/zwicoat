import styled from 'styled-components';

const Wrapper = styled.nav`
  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    gap: 1.5rem;
  }

  .hero-header {
    font-size: 36px;
    font-weight: 500;
    color: var(--black);
    font-family: 'SUSE', sans-serif;
  }

  .hero-subheader {
    font-size: 18px;
    font-weight: 400;
    color: var(--black);
  }

  /* active */
  @media (min-width: 768px) {
    .hero-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
    }

    .hero-header {
      font-size: 48px;
      font-weight: 500;
      color: var(--black);
      font-family: 'SUSE', sans-serif;
    }

    .hero-subheader {
      font-size: 24px;
      font-weight: 400;
      color: var(--primary-1);
    }
  }
`;

export default Wrapper;
