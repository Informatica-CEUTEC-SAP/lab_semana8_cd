import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const deployTime = new Date().toLocaleString()

  return (
    <div className="app">
      <header className="header">
        <div className="badge">LIVE</div>
        <h1>Deploy Demo</h1>
        <p className="subtitle">
          Vercel CD Pipeline — Lab Semana 8
        </p>
      </header>

      <section className="cards">
        <div className="card">
          <span className="card-icon">&#9889;</span>
          <h2>Status</h2>
          <p className="status-ok">Deployed</p>
        </div>

        <div className="card">
          <span className="card-icon">&#128337;</span>
          <h2>Rendered at</h2>
          <p>{deployTime}</p>
        </div>

        <div className="card interactive" onClick={() => setCount(c => c + 1)}>
          <span className="card-icon">&#128171;</span>
          <h2>Counter</h2>
          <p className="count">{count}</p>
        </div>
      </section>

      <section className="info">
        <h2>Stack</h2>
        <div className="tags">
          <span className="tag">React 19</span>
          <span className="tag">Vite 8</span>
          <span className="tag">Vercel</span>
        </div>
      </section>

      <footer className="footer">
        <p>lab_semana8_cd &middot; continuous deployment demo</p>
      </footer>
    </div>
  )
}

export default App
