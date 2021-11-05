import * as S from './styled/App'
import './App.css';
import Header from './contents/header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Photo from './contents/photo'
import {useDropzone} from 'react-dropzone'

function App() {

  const [lists, setLists] = useState([]); 

  const [ondrag, setOndrag] = useState(false);

  const [item, setItem] = useState();

  useEffect(()=>{
    axios.post('/getgallery')
      .then(res => setLists(res.data))
  },[])

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'image/jpeg, image/png',    
    maxFiles: 1
  });

  const changeExplane = (e) => {
    if(item.info.length <= 200){
      setItem({...item, info: e.target.value})
    }
  }

  const handleFileOnChange = () => {
    acceptedFiles.preventDefault();
    let reader = new FileReader();
    let file = acceptedFiles[0];
    reader.onloadend = () => {
      this.setState({
        file : file,
        previewURL : reader.result
      })
    }
    reader.readAsDataURL(file);
  }

  return (
    <div ondrap={()=>console.log(1)}>
      <Header />
      <S.Page>
        <S.Border>
          <Photo lists={lists}/>
        </S.Border>
      </S.Page>
      {ondrag ?
        <S.Background>
          <section className="container" style={{padding:"0px"}}>
            <S.Dropzone {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()}/>
              <span>드래그로 이미지 등록</span>
            </S.Dropzone>
          </section>
        </S.Background>
        :
        <></>
      }
    </div>
  );
}

export default App;
