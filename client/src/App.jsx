import { useState} from 'react'
import useFetch from './hooks/useFetch'
import Breadcrumbs from './components/breadcrumbs/breadcrumbs'
import Header from './components/header/header'
import FileDisplay from './components/file_display/FileDisplay'

function App() {
  
  const [pathArray,setPathArray] = useState(['home'])
  const path =pathArray.length > 1 ? pathArray.join('/') : pathArray[0] 

  const {data} =useFetch(`http://localhost:4000/${path}`)

  const handleBackToPreviousItem = (i) =>{
    setPathArray(pathArray.slice(0,i+1))
 }

 const handleAddPath =(i)=>{
   const addPath=pathArray.concat((data[i]))
   setPathArray(addPath)
 }

  return (
    <div className="App">
      <Header/>
      <Breadcrumbs data={[data,pathArray,setPathArray,handleAddPath,handleBackToPreviousItem]} />
      <FileDisplay data={[data,pathArray,handleAddPath]} />
    </div>
  )
}

export default App
