interface ButtonProps {
  children: React.ReactNode
  background?: boolean
  onClick?: () => void
}

const Button = ({ children, background, onClick }: ButtonProps) => {
  return (
    <button
      className={`${background && 'bg-gray-500 hover:bg-gray-600 active:bg-gray-500 rounded px-2 text-gray-100'}`}
      onClick={ onClick }
    >
      { children }
    </button>
  )
}

export { Button }