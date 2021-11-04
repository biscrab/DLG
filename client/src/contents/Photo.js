import exp from 'constants'
import * as S from '../styled/App'

const Photo = ({item}) => {
    return(
        <S.Photo>
            <img src={item.img}/>
        </S.Photo>
    )
}

const List = ({lists}) => {
    const itemList = 
    lists.map(
        item => (
            <Photo item={item}></Photo>
        )
    )
    return itemList
}

export default List