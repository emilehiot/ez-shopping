import styled from 'styled-components';



export const Container = styled.div`
    display: flex;
    max-width: 1760px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 1rem 1rem;
    flex-wrap : wrap;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 40px;
    row-gap: 80px;
    margin: 64px 0px;
`;

export const Card = styled.div`
    display: flex;
    gap: 32px;
    width: 45%;
`;

export const Image =  styled.img`
    max-width: 250px;
    width: auto;
    height: 230px;
`;

export const CardBody = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const CardCategory = styled.span`
    display: inline;
    background: #c0c0c0;
    font-weight: 400;
    font-size: 14px;
    padding: 0 15px;
    border-radius: 2px;
    color: #969696;
`;

export const CardPrice = styled.p`
    font-size: 20px;
    font-weight: 800;
`;

export const CardQuantity = styled.input`
    width: 10%;
    margin-left:8px;
    
`;

export const CardButton = styled.button`
    display: block;
    background: #eab023;
    padding: 4px 16px;
    border: none;
    border-radius: 2px;
    margin: 24px 0;
`;