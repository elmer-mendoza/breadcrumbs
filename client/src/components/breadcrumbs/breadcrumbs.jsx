import './breadcrumbs.css'

function Breadcrumbs(props) {

  let link
  const [data,
    pathArray,
    setPathArray,
    handleAddPath,
    handleBackToPreviousItem] = props.data
 
  return (
    <div className='crumbs'>
      {pathArray?.map((sub,i)=>{
        const endOfLoop = pathArray.length === (i+1)
        return(
            <div key={i} className={endOfLoop ? 'crumbs__listItem lastItem' : 'crumbs__listItem'}>
              <a key={i}  onClick={()=>handleBackToPreviousItem(i)} href={link}>{sub}  {endOfLoop ? "" : '/'}</a>
              {endOfLoop && data[0] != "type" &&
                <div className='modal'>
                  {data.map((d,i) => {
                    return <div key={i} onClick={()=>handleAddPath(i)}>{d}</div>
                  })}
                </div>
              }
            </div>
        ) 
      })}
    </div>
  )
}

export default Breadcrumbs