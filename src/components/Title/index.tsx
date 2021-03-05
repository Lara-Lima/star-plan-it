import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

function Title({ title = '' }) {
  return (
    <div className="sm:px-6 md:px-12 xl:px-16 mt-12">
      <h1 className="text-2xl mb-4 text-white flex align-middle items-center rounded-2xl bg-customGray py-4">
        <Link href="/">
          <a title="Voltar para home">
            <FaChevronLeft className="mr-2 cursor-pointer" />
          </a>
        </Link>
        {title}
      </h1>
    </div>
  )
}

export default Title
