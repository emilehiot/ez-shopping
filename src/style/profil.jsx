import styled from 'styled-components'


export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 64px);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 500px;
    min-height: 500px;
    text-align: center;
    justify-content: center;
    border: 1px solid #eab023;
    border-radius: 15px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
                rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin: 10px;
`;

export const Form = styled.form`
    margin-top: 1.5rem;
`;

export const Inputs = styled.div`
    margin: 1.5rem 0;
`;

export const Btn = styled.button`
    color:#000;
    background-color: #eab023;
    padding: 0.5rem 1.5rem;
    margin: 1.5rem 0;
    border: 2px solid #eab023;
    border-radius: 0.5rem;
    font-size: 16px;
  &:hover {
    background-color: #fff;
    border: 2px solid #eab023;
    cursor: pointer;
  }
`;
