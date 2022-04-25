import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const LeftPanel = styled.div`
    width: 100px;
    background-color: #4AD196;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 10%;
`;

export const PanelMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PanelItem = styled.span<{isActiveTab: boolean}>`
    display: block;
    background-color: ${({ isActiveTab }) => (isActiveTab ? '#007944' : '#4AD196')};
    height: 75px;
    width: 76px;
    border-radius: 129px;
    text-align: center;
    padding: 10px 0;
    margin: 10px 0;
`;

export const Icon = styled.img<{isLogout?: boolean}>`
    width: 50px;
    margin-bottom: ${({ isLogout }) => (isLogout ? '20%' : 0)};
`;
