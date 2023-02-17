import styled from 'styled-components';



export const Container = styled.div`
    display: flex;
    max-width: 1760px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 1rem 1rem
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export const Card = styled.div`
    grid-area: 1 / 1 / 2 / 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    margin: 1rem;

    border: 1px solid #eab023;
`;