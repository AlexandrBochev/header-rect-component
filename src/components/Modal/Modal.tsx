import { MouseEvent } from 'react'
import { persons } from '../../data/persons'

interface ModalType {
  onClick: (e: MouseEvent<HTMLLIElement>) => void
}

const Modal = ({ onClick }: ModalType) => {
  return (
    <div className='absolute left-0 top-0 w-full h-screen flex items-center justify-center'>
      <div className='absolute left-0 top-0 w-full h-screen bg-black opacity-75' />
      <div className='bg-white p-10 rounded-lg font-semibold text-gray-700 z-10'>
        <h4 className='font-bold mb-6'>Choose your profile</h4>
        <ul>
          {persons.map((person) =>
            <li
              onClick={ onClick }
              className='text-center p-2 border rounded m-2 cursor-pointer hover:bg-gray-200 active:bg-gray-300'
              key={person.id}
            >
              { person.name }
            </li>)}
        </ul>
      </div>
    </div>
  )
}

export { Modal }