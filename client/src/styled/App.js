import exp from 'constants'
import styled from 'styled-components'

export const Header = styled.nav`
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    height: 7%;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
`

export const Page = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Border = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
`

export const Photo = styled.div`
    box-shadow: 0p 0p 1px 1px black;
    height: 19%;
    width: 19%;
    margin: 3%;
    img{
        width: 100%;
        height: 100%;
    }
`

export const MoveDiv = styled.div`
    display: flex;
    justify-content: center;

    button{
        :hover{
            background-color: royalblue;
            color: white;
        }
    }
`

export const Background = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 1000;
    position: fixed;
    top: 0;
`

export const Dropzone = styled.div`
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 700px;
    color: gray;
    margin: 0;
    position: relative;
    right: 0px;
    font-size: 20px;
    left: 50%;
    border: 2px dashed gray;
    transform: translateX(-50%);
    :hover{
        cursor: pointer;
    }
`