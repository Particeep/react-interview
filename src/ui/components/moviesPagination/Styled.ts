import styled from 'styled-components';

export const PaginationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 150px;
`;

export const PaginationWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-right: 200px;
  margin-left: 0px;
`;
export const PageItem = styled.li`
  list-style: none;
  font-size: 25;
  margin: 8px;
  padding: 8px;

  &:nth-child(${(props) => props['currentPage']}) {
    color: blue !important;
    text-decoration: underline;
  }
`;

export const A = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const MoviesOptions = styled.select`
  padding: 8px;
  font-size: 25px;
`;

export const ButtonMoviePerPage = styled.button`
  background-color: #ffffff;
  border: 2px solid lightgrey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 30px;
  width: 30px;
  margin-right: 5px;
  padding: 10px;
  font-size: 15;

  &:hover {
    cursor: pointer;
    background-color: lightgrey;
  }
`;

export const ButtonWrapper = styled.div`
  display: contents;
`;
