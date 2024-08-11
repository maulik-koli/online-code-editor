import React, { useContext } from 'react'
import Editor from './Editor'

import { DataTextContext } from '../context/DataText.jsx'

export default function Code() {
  const {html, setHtml, css, setCss, js, setJs} = useContext(DataTextContext)

  return (
    <div className='code'>
        <Editor
          lable="HTML"
          value={html}
          onChange={setHtml}
          option='xml'
        />
        <Editor
          lable="CSS"
          value={css}
          onChange={setCss}
          option='css'
        />
        <Editor
          lable='JS'
          value={js}
          onChange={setJs}
          option='js'
        />
    </div>
  )
}
