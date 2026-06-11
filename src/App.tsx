import { useState } from 'react'
import Button from './components/ui/button'

function App() {
  let isOpen= false

  return (
    <>
      <Button onClick={() => alert("hii")} variant='link' size={'lg'}>click me</Button>
      <Button
        // size="icon"
        aria-label="Open menu"
        aria-expanded={isOpen}
        data-state={isOpen ? "open" : "closed"}
      >
        ☰
      </Button>
    </>
  )
}

export default App
