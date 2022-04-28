import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Photo = styled.div<{imgName: string}>`
    width: 50px;
    height: 50px;
    background-image: url(${({ imgName }) => imgName});
    background-size: cover;
    background-position: center;
    border-radius: 100%;
`;

export const Name = styled.div`
    font-weight: 600;
    margin-left: 10px;
`;
