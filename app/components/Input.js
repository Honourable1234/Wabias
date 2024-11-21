import React from 'react'

export default function Input({title, placeHolder, customStyles =''}) {
  return (
    <div>
      <h2>{title}</h2>
      <input type="text"
            placeholder={placeHolder}
            className={`px-[10px] border border-[#8888888A] rounded-[6px] ${customStyles}`} />
    </div>
  )
}


