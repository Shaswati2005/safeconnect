import React from 'react'
interface QuesProps{
    option:string;
}

const Ques:React.FC<QuesProps> = (props) => {
  return (
    <div>
        <div
            className={`w-full flex items-center justify-center my-1`}
            
          >
            <input type="checkbox"  />
            <h2>{props.option}</h2>
          </div>
    </div>
  )
}

export default Ques