import styled from "styled-components";

export const Skeleton = styled.div`
  .image,
  h1,
  h2,
  p {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  .image {
    height: 200px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h1,
  h2 {
    height: 30px;
  }

  p {
    height: 70px;
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
