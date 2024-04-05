import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'

function App () {
  const { fromLanguage, setFromLanguage } = useStore()

  return (
    <>
      <main>
        <h1>Translate App</h1>
        <button onClick={() => { setFromLanguage('es') }}>
        Cambiar a Español
        </button>
        {fromLanguage}
      </main>
    </>
  )
}

export default App
