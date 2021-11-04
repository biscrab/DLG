import styled from 'styled-components'

export const Header = styled.nav`
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 100;
    height: 5%;
    border-bottom: 1px solid black;
`

export const Page = styled.div`
    display: flex;
    justify-content: center;
`

export const Border = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
`

export const Photo = styled.div`
    box-shadow: 0p 0p 1px 1px black;
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