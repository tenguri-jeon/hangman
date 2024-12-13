import styled from 'styled-components';

export const AlphabetsListCom = styled.ul`
    display: flex;
    gap : 18px;
    flex-wrap : wrap;
    padding : 20px 50px;
`

export const QuizCom = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content : center;
    font-size : 30px;
    padding-top : 15px;
`

export const LayOutCon = styled.div`
    background-color : #333;
    height : 100vh;
    display : flex;
    flex-direction: column;
    justify-content: center;
    h1{
        color : white;
        font-size : 60px;
        text-align : center;
        margin-top: 50px;
    }
    span{
        color: rgba(255,255,255,0.8);
        font-size: 20px;
        margin-top : 0px;
        text-align : center;
    }
`

export const ButtonCon = styled.div`
    margin : 30px auto;
    display : flex;
    gap : 15px;
    button {
        padding : 15px 50px;
        font-size : 20px;
        background-color : grey;
        cursor: pointer;
        border : none;
        border-radius : 4px;
        color : rgb(255 255 255 / 70%);
        transition: 0.5s;
        &:hover{
            background : white;
            color : black;
        }
    }
`   

export const MainCon = styled.div`
    background-color: #333;
    height : 100vh;
    display: flex;
    flex-direction : column;
    justify-content: center;
    padding: 50px;
    input{
        border: none;
        background : transparent;
        transform : translateY(-25px);
        &:focus-visible {
            outline : none;
        }
    }
    span{
        text-align:center;
        color : grey;
    }
`

export const MainBtnWrap = styled.div`
    display: flex;   
    gap: 8px; 
    button{
        border: none;
        width : 50px;
        height: 50px;
        font-size : 20px;
        border-radius : 4px;
        cursor : pointer;
        &:first-child{
            background : grey;
            color : white;
        }
        &:nth-child(3){
            background : #459270;
            color : white;
        }
    }
`