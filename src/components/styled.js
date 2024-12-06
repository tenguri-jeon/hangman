import styled from 'styled-components';

export const AlphabetsItemCom = styled.li`
    list-style : none;
    border : 1px solid black;
    padding : 5px 8px;
    transition : 1s;
    &.on{
        background : black;
        color : white;
    }
    &.off{
        background : #adadad;
        color : rgba(255,255,255,0.8);
        border : none;
    }
    
`