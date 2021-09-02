import styled from 'styled-components';


export const StyledNav = styled.div`
    
    height: 50px;
    /* border-bottom: 1px solid;
    border-bottom-color: #E76F51;
    border-bottom-style: groove; */
    display: flex;
    justify-content: center;
    margin-top: 30px;
    z-index: 2;

    .filter{
        background-color: #a3543e;
        width: 250px;
        height: 50px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        span{
            font-weight: bold;
        }
    }

    .filter:hover{
        cursor: pointer;
    }

    .listCategory{
        background-color: rgba(163, 84, 62, 0.55);
        border-radius: 5px;
        display: flex;
       
        ul{
            display: flex;
            width: 700px;
            justify-content: space-around;
            align-items: center;
            list-style: none;
        }

        li:hover{
            cursor: pointer;
            color: #a3543e;
        }
    }
`;

export const StyledPage = styled.div`
  .titlePage{
    font-size: 32px;
    margin-bottom: 100px;

  }

  .alignGrid{
    display: flex;
    justify-content: center;
    align-items: center;
  
  }

padding-top: 80px;
`;

export const StyledGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 1;
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
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 40px;
  position: relative;
  z-index: 1;
  .grid-element {
    animation: animateGrid 0.5s;
  }

  .movieBlock{
    background-color: #7EDDD2;
    border-radius: 10px;
    padding: 20px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .footerBlock{
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .likesAndDislikesBlock{
      display: flex;
      justify-content: space-around;
  }

  .likesBlock{
      display: flex;
      align-items: center;
  }

  .numberLikesAndDislikes{
      margin-left: 8px;
  }

  .dislikesBlock{
      display: flex;
      align-items: center;
  }

  img{
      width: 20px;
      height: 20px;
  }

  .label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: black;
}

.label-text {
  margin-left: 16px;
}

.toggle {
  isolation: isolate;
  position: relative;
  height: 30px;
  width: 60px;
  border-radius: 15px;
  overflow: hidden;
 background-color: #264653;
  box-shadow:
    -8px -4px 8px 0px #9cece3,
    8px 4px 12px 0px #99d6cf,
    4px 4px 4px 0px #264653 inset,
    -4px -4px 4px 0px #264653 inset;
}

.toggle-state {
  display: none;
}

.indicator {
  height: 100%;
  width: 200%;
  background: #a3543e;
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow:
    -35px 2px 2px 0px #7ee7db,
    1px 1px 12px 1px #264653;
    
}

.toggle-state:checked ~ .indicator {
  transform: translate3d(25%, 0, 0);
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
    grid-template-columns: repeat(3, minmax(100px, 1fr));
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


`;