import React from 'react'
import {BiFolder} from 'react-icons/bi'
import './fileDisplay.css'

function FileDisplay(props) {
  
  const [data,pathArray,handleAddPath] = props.data
 
  return (
    <div className='fileDisplay'>
      {data.map((d,i) => {
          const arrayIndex = pathArray.length-1
          const display = pathArray[arrayIndex]
          return(
            data[i] === 'type' ? <div key={i}>this is file "{display}"</div> :
            <div key={i} className='fileDisplay__display' onClick={()=>handleAddPath(i)}>
              <BiFolder className='fileDisplay__icon'/>{d}
            </div>
          )
      })}
    </div>
  )
}

export default FileDisplay