import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

// ---times
import SpinnerSuspense from './components/Statics/Spinner'

// Tailwind
import './index.css'
import { AppRouter } from './routes/Router'

function App() {
  return (
    <div className="bg-[#0B0B13] text-white min-h-screen">
      <BrowserRouter>
        <Suspense fallback={<SpinnerSuspense />}>
          <AppRouter />
        </Suspense>
      </BrowserRouter >
    </div >
  )
}

export default App
