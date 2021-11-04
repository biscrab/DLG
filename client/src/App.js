import * as S from './styled/App'
import './App.css';
import Header from './contents/header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Photo from './contents/photo'

function App() {

  const [lists, setLists] = useState([]); 

  useEffect(()=>{
    axios.post('/getgallery')
      .then(res => setLists(res.data))
  },[])

  return (
    <>
      <Header />
      <S.Page>
        <S.Border>
          <Photo lists={lists}/>
        </S.Border>
      </S.Page>
    </>
  );
}

export default App;
