import styled from 'styled-components';

const Wrapper = styled.nav`
  .article-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    /* height: 500px; */
    background: var(--white);
  }

  .article-img {
    /* width: 100%;
    height: 100%;
    border-radius: 30px; */
    height: 15rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }

  .article-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: 18px;
    width: 50%;
  }

  p {
    font-size: 8px;
    width: 50%;
  }
`;

export default Wrapper;
