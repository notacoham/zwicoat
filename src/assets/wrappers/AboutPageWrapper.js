import styled from 'styled-components';

const Wrapper = styled.nav`
  .about-page-title {
    font-family: 'SUSE', sans-serif;
  }

  .about-page-header {
    font-family: 'SUSE', sans-serif;
  }

  .about-page-team {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .about-page-bio {
    font-size: 24px;
    width: 75%;
    text-align: center;
    padding: 5rem;
  }

  .team {
    height: 100vh;
  }
`;

export default Wrapper;
