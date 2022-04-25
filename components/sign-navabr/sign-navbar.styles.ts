import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: white;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15%;
`;

export const Logo = styled.img`
    height: 50px;
`;

export const Menu = styled.div`
    display: flex;
`;

export const List = styled.ul`
    list-style: none;
    padding: 10px;

    li:nth-child(2){
        border-right: 1px red solid;
        padding-right: 20px;
        border-color: #CECECE;
    }
`;

export const Item = styled.li`
    float: left;
    margin: 10px;
    font-weight: 400;
    cursor: pointer;
`;
