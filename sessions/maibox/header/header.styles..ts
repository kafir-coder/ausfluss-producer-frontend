import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
`;

export const Wrapper = styled.div`
    width: 90%;
`;
export const MailboxList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    input {
        width: 90%;
    }
`;

export const DriverList = styled.div`
    width: 90%;
    margin-top: 20px;
`;

export const Selected = styled.div<{isSelected?: boolean}>`
    background-color: ${({ isSelected }) => (isSelected ? '#000' : 'white')};
    width: 100%;
    border-radius: 12px;
    padding: 5px;
    margin-top: 20px;
    cursor: pointer;
`;
