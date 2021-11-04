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