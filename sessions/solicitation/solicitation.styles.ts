import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100%;
    padding: 0 15px;
`;

export const Filter = styled.div`
    display: flex;
`;

export const AddSolicitation = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export const SolicitationList = styled.div`
    display: flex;
    margin-top: 3%;
    flex-direction: column;
`;

export const SolicitationItem = styled.div<{color: string, isOdd: boolean}>`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;

    background-color: ${({ isOdd }) => (isOdd ? '#F6F6F6' : 'white')};
    :first-child {
        border-radius: 10px 10px 0 0;
    }
    :last-child {
        border-radius: 0 0 10px 10px;
    }
    > div {
        padding: 10px;
        display: flex;
        flex-direction: row;
        width: 70%;
    }
    div:first-child {
        margin: 0 10px;
        i {
            margin-right: 100px ;
        }
    }

    div:last-child {
        width: 200px;
        i {
            color: ${({ color }) => color}
        }
    }
    i {
        font-weight: 700;
        font-style: normal;
        font-size: larger;

    }
`;
