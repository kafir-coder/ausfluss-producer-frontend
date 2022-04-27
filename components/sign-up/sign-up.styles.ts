import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    //border: 1px solid red;
    button {
        margin-top: 30px;
    }

    input {
        margin-top: 10px;
    }
`;

export const SubmitStatus = styled.div<{bgColor: string}>`
    background-color: ${({ bgColor }) => bgColor};
    padding: 20px;
    margin-top: 20px;
    color: white;
    font-weight: 800;
    box-sizing: border-box;
    border-radius: 10px;
`;
