import styled from 'styled-components';

export const StyledPage = styled.div`
  .titlePage{
    font-size: 32px;
  }
`;

export const StyledGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  
  h1 {
    font-family: 'Abel', sans-serif;
    font-size: 20px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 40px;
  position: relative;
  .grid-element {
    animation: animateGrid 0.5s;
  }
  @keyframes animateGrid {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .movieBlock{
    background-color: aliceblue;
    border-radius: 10px;
    padding: 20px;
  }

  .likesAndDislikesBlock{
      display: flex;
      justify-content: space-around;
  }

  .likesBlock{
      display: flex;
  }

  .dislikesBlock{
      display: flex;
  }

  img{
      width: 20px;
      height: 20px;
  }
`;