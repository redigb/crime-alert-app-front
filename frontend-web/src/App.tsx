import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

// ---times
import SpinnerSuspense from './components/Statics/Spinner'

// Tailwind
import './index.css'
import { AppRouter } from './routes/Router'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={ <SpinnerSuspense/> }>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
