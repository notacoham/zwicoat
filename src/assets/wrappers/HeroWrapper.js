import styled from 'styled-components';

const Wrapper = styled.nav`
  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    height: 50vh;
    gap: 1.5rem;
  }

  img {
    display: none;
  }

  .hero-header {
    font-size: 36px;
    font-weight: 500;
    font-family: 'SUSE', sans-serif;

    /* gradient text */
    background: linear-gradient(to right, #0165fc, #ff10f0);
    background-clip: text;
    color: transparent;
    text-align: center;
  }

  .hero-subheader {
    font-size: 18px;
    font-weight: 400;
    color: var(--black);
    text-align: center;
  }

  .hero-center {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  /* active */
  @media (min-width: 768px) {
    .hero-center {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }

    .hero-header {
      font-size: 48px;
      font-weight: 600;

      color: var(--black);
      font-family: 'SUSE', sans-serif;
      background: linear-gradient(to right, #0165fc, #ff10f0);

      background-clip: text;
      color: transparent;
      text-align: center;
    }

    .hero-subheader {
      font-size: 24px;
      font-weight: 400;
      color: var(--black);
    }

    img {
      width: 600px;
      height: 400px;
      border-radius: 30px;
      display: flex;
      box-shadow: var(--shadow-elevation-high);
    }
  }
`;

export default Wrapper;
