import { Sun } from "../Icons/Sun"
import { Moon } from "../Icons/Moon"
import { persons } from "../../data/persons"
import { Button } from "../Button/Button"

interface ThemeType {
  dark: boolean
  setDark: (dark: boolean) => void
}

const HeaderRectComponent = ({ dark, setDark }: ThemeType) => {
  const handleChangeTheme = () => setDark(!dark)
  const hendleLogin = () => alert('Login')

  return (
    <header className={
      `w-full flex items-center justify-between font-semibold py-2 px-4
      ${dark ? 'bg-gray-800 text-gray-100' : 'bg-gray-300 text-gray-700'}`
    }>
      <Button onClick={ handleChangeTheme }>{ dark ? <Sun /> : <Moon /> }</Button>
      <ul className='flex'>
        {persons.map((person) => <li className="mx-4" key={person.id}>{ person.name }</li>)}
      </ul>
      <Button onClick={ hendleLogin } background>Log in</Button>  
    </header>
  )
}

export { HeaderRectComponent }