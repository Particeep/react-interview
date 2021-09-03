import styled from 'styled-components';


export const StyledPagination = styled.div`

    .pagination {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        max-width: 1280px;
        margin-top: 40px;
    }
    
    .prev.disabled,
    .next.disabled {
        pointer-events: none;
        box-shadow: none;
        color: #999;
        padding: 8px;
        margin: 10px;
    }

    .prev, .next{
        padding: 8px;
        margin: 10px;
    }

    button{
        display: flex;
    }

    span{
        margin: 2px;
    }

`;