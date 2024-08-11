import Header from './components/Header'
import Code  from './components/Code'
import Output from './components/Output'

import DataText from './context/DataText.jsx'
import './App.css'

export default function App() {
  return (
    <div>
      <Header />
      <div className='main-part'>      
        <DataText>
          <Code />
          <Output />
        </DataText>
      </div>
    </div>
  )
}
