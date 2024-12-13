import styled from 'styled-components';

export const AlphabetsItemCom = styled.li`
    list-style : none;
    border : 1px solid grey;
    padding : 5px 8px;
    transition : 1s;
    color : grey;
    width: 20px;
    text-align: center;
    &.on{
        background : white;
        color : black;
        border : none;
    }
    &.off{
        background : rgba(0,0,0,0.5);
        color : rgba(255,255,255,0.4);
        border : none;
    }
    
`

export const GameItem = styled.li`
    font-size : 50px;
    color : rgba(255,255,255,0.9)
`

export const TooltipCon = styled.div`
    position : relative;
`

export const TooltipModalCon = styled.div`
    position: absolute;
    background: #515d69;
    color : rgba(207,230,255,0.8);
    padding: 10px;
    border-radius : 4px;
    display: flex;
    gap : 4px;
    align-items : center;
`