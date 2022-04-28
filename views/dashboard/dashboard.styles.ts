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
    position: fixed;
    z-index: 999;
    height: 100vh;
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

export const TabTitle = styled.div`
    padding: 20px;
    h1 {
        color: #666666
    }
`;
