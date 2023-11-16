import { useState } from "react"
import { HeaderRectComponent } from "./components/HeaderRectComponent/HeaderRectComponent"

const App = () => {
  const [dark, setDark] = useState(true)
  return (
    <>
      <HeaderRectComponent dark={ dark } setDark={ setDark } />
      <main className={
        `w-full h-screen flex items-center justify-center font-bold text-xl
        ${dark && 'bg-gray-600'}`}>
        <h1>Main Content</h1>
      </main>
    </>
  )
}

export { App }
