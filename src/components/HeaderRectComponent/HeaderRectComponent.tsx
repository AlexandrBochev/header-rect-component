import { Sun } from "../Icons/Sun"
import { Moon } from "../Icons/Moon"
import { Button } from "../Button/Button"
import { MouseEvent, useState } from "react"
import { Modal } from "../Modal/Modal"

interface ThemeType {
  dark: boolean
  setDark: (dark: boolean) => void
}

const HeaderRectComponent = ({ dark, setDark }: ThemeType) => {
  const [login, setLogin] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [person, setPerson] = useState('')

  const handleChangeTheme = () => setDark(!dark)

  const hendleLogin = () => {
    if (!login) {
      setOpenModal(!openModal)
    } else {
      if (window.confirm('Are you sure you want to log out?')) {
        setLogin(!login)
        setPerson('')
      }
    } 
  }

  const hendleModal = (e: MouseEvent<HTMLLIElement>) => {
    setOpenModal(!openModal)
    if (e.target) {
      setLogin(true)
      setPerson((e.target as HTMLLIElement).textContent || '')
    }
  }

  return (
    <header className={
      `w-full flex items-center justify-between font-semibold py-2 px-4
      ${dark ? 'bg-gray-800 text-gray-100' : 'bg-gray-300 text-gray-700'}`
    }>
      <Button onClick={ handleChangeTheme }>{ dark ? <Sun /> : <Moon /> }</Button>
      { person && <p className="mx-4">Hello 👋 { person }</p> }
      <Button onClick={ hendleLogin } background>{login ? 'Log out' : 'Log in' }</Button>
      { openModal && <Modal onClick={ hendleModal } /> }
    </header>
  )
}

export { HeaderRectComponent }