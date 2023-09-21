import React, { Suspense } from 'react'

// ** Router Import
import Router from './router/Router'

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router basename="/app" />
    </Suspense>
  )
}

export default App
