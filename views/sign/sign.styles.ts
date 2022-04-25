import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0 15%;
`;

export const LeftPanel = styled.img`
    width: 600px;
    border-radius: 30px;
`;
