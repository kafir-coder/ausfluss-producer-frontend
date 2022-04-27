import styled from 'styled-components';

export const GreatContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 999;
    left: 0;
    top: 0;
`;
export const Container = styled.div`

    background-color: #fff;
    width: 600px;
    height: 800px;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    input {
        margin-top: 30px;
        width: 100%;
    }
    button {
        align-self: flex-end;
        margin-top: 50px;
    }
`;

export const CandidatesDrivers = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15%;
    button {
        width: 30%;
    }
    button:first-child {
        background-color: white;
        color: #4AD196;
        border: 1px solid #4AD196;
    }
`;

export const CloseButton = styled.span`
    align-self: flex-end;
    margin-top: 20px;
    display: block;
    font-family: 'Ubuntu mono';
    font-weight: 600;
    cursor: pointer;
    img {
        width: 20px;
        height: 20px;
    }
`;
