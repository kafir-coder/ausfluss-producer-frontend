import styled from 'styled-components';
import Input from '../../../components/input';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MessageList = styled.div`
    width: 100%;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    border: 1px solid red;
    overflow: auto;
    padding: 20px 40px 150px 40px;
`;
export const MessageBox = styled.div<{isOwner: boolean}>`
    width: auto;
    background-color: ${({ isOwner }) => (isOwner ? '#4AD196' : 'white')};
    align-self: ${({ isOwner }) => (isOwner ? 'flex-end' : 'flex-start')};
    max-width: 45%;
    color: #fff;
    padding: 15px;
    border-radius: ${({ isOwner }) => (isOwner ? '20px 20px 0 20px' : '20px 20px 20px 0')};
    //margin: ${({ isOwner }) => (isOwner ? '0 20px 0 0' : '0 0 0 20px')};
    color: ${({ isOwner }) => (isOwner ? '#ffffff' : '#000000')};
    border: 1px solid ${({ isOwner }) => (isOwner ? '#ffffff' : '#DEDEDE')};
`;

export const MessageCompose = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    width: 70%;
    position: fixed;
    bottom: 0;
    height: 100px;
    margin: 0 0 20px 0
`;

export const CustomInput = styled(Input)`
    width: 96%;
    height: 60px;
    font-size: medium;
`;

export const SendButton = styled.button`
    background-image: url('/send.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40px;
    height: 60px;
    width: 60px;
    background-color: #4AD196;
    border-radius: 9px;
    border: none;
    padding: 10px;
    cursor: pointer;
`;
