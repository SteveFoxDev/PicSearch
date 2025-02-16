import { useState } from 'react';

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import './App.css'

function App() {
  const [images, setImages] = useState([]);
const handleSubmit = async (term) => {
  if (!term) {
    return;
  }else {
    const result = await searchImages(term);
    setImages(result);
  }
};

  return (
    <div>
      <div className='container'>
      <h1 className='display-2'>PicSearch</h1>
      </div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App
