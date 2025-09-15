import { useState } from 'react'
import ChartPage from './pages/ChartPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <button
          onClick={() => setCurrentPage('home')}
          style={{ marginRight: '10px' }}
        >
          홈
        </button>
        <button onClick={() => setCurrentPage('chart')}>
          차트
        </button>
      </nav>

      {currentPage === 'home' && (
        <div style={{ padding: '20px' }}>
          <h1>Vite + React</h1>
          <p>차트 페이지로 이동해서 Lightweight Charts를 확인해보세요!</p>
        </div>
      )}

      {currentPage === 'chart' && <ChartPage />}
    </>
  )
}

export default App
