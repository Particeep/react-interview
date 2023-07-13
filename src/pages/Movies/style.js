import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  padding: 20px;
`;

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const MultiSelectContainer = styled.div`
  width: 50%;
  align-self: center;
`;

export const Card = styled.div`
  background-color: #2e4053;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0px #283747;
  width: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 2px 25px 5px black;
  }
  transition: box-shadow 200ms ease-in-out;
`;

export const Title = styled.p`
  font-size: 21px;
  font-weight: bold;
  color: white;
  font-family: Roboto;
  margin: 5px;
`;
export const Category = styled.p`
  color: white;
  font-family: Roboto;
  margin: 5px;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Icons = styled.div`
  display: flex;
  align-items: end;
  color: #d7dbdd;
  gap: 5px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #d0d3d4;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const DeleteButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: #c0392b;
  &:hover {
    color: red;
  }
`;

export const ToggleButton = styled.div``;

export const Image = styled.img`
  height: 445px;
  width: 300px;
`;

export const PaginationContainer = styled.div`
  width: 50%;
  align-self: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;

export const PageNumbersContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const PaginationButton = styled.button`
  padding: 0 10px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-weight: ${({ disabled }) => (disabled ? "bold" : "normal")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) =>
    disabled ? "rgba(0, 0, 0, 0.15)" : "#fff"};
  color: ${({ isActive = false }) => (isActive ? "#1677ff" : "#000")};
  border-color: ${({ disabled, isActive = false }) =>
    disabled && !isActive ? "#d9d9d9" : "#1677ff"};
`;
