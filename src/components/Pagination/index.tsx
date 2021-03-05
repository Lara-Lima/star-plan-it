import { useRouter } from 'next/dist/client/router'
import { useCallback, useMemo } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Pagination({ total = 0 }) {
  const router = useRouter()

  const pagination = useMemo(() => {
    if (Object.keys(router.query).length > 0) {
      return router.query
    }
    return { _start: 0, _limit: 10 }
  }, [router.query])

  const actualPage = useMemo(() => (pagination._start as number) / 10, [
    pagination._start
  ])

  type PageProps = {
    pos: 'back' | 'front'
    pages?: number
  }
  const changePage = useCallback(
    async ({ pos, pages }: PageProps) => {
      const scrollPos = window.pageYOffset
      const start = pages
        ? pages
        : pos === 'front'
        ? parseInt(pagination._start as string) + 10
        : parseInt(pagination._start as string) - 10
      router.push({
        query: {
          ...pagination,
          _start: start
        }
      })
      await new Promise(function (resolve) {
        setTimeout(resolve, 200)
      })
      window.scrollTo(0, scrollPos)
    },
    [pagination, router]
  )

  const teste = useMemo(() => actualPage + 1, [actualPage])

  const pageWindowSize = Math.min(5, total / 10)
  const halfWindowSize = Math.max(Math.floor(pageWindowSize / 2), 2)
  const lastStartPage = Math.max(total / 10 - pageWindowSize + 1, 1)
  const startPage = Math.max(Math.min(teste - halfWindowSize, lastStartPage), 1)

  const pages = Array.from(
    {
      length: pageWindowSize
    },
    (v, i) => startPage + i
  )

  return (
    <div className="sm:px-6 md:px-12 xl:px-16">
      <div className="rounded-2xl bg-customGray px-4 py-3 flex items-center justify-between  sm:px-6 mt-2">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            className="relative inline-flex items-center px-4 py-2 border border-customGray100 text-sm font-medium rounded-md text-customGray100 bg-customGray hover:text-gray-500"
            onClick={() => changePage({ pos: 'back' })}
            disabled={actualPage === 0}
          >
            Anterior
          </button>
          <button
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-customGray100 text-sm font-medium rounded-md text-customGray100 bg-customGray hover:text-gray-500"
            onClick={() => changePage({ pos: 'front' })}
            disabled={total / 10 === actualPage + 1}
          >
            Próximo
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-customGray100">
              Mostrando
              <span className="font-semibold">
                {' '}
                {(actualPage + 1) * 10 - 9}{' '}
              </span>
              até
              <span className="font-semibold"> {(actualPage + 1) * 10} </span>
              de
              <span className="font-semibold"> {total} </span>
              resultados
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-customGray100 bg-customGray text-sm font-medium text-gray-500 hover:bg-customYellow"
                onClick={() => changePage({ pos: 'back' })}
                disabled={actualPage === 0}
              >
                <FaChevronLeft style={{ color: 'white' }} />
              </button>

              {pages.map((page) => (
                <li
                  key={`pages-${page}`}
                  className={`relative cursor-pointer inline-flex items-center px-4 py-2 border border-customGray100 text-sm font-medium  ${
                    actualPage === page - 1
                      ? 'bg-customYellow text-black'
                      : 'bg-customGray text-customGray100 hover:bg-customYellow hover:text-black'
                  }`}
                  onClick={() =>
                    changePage({ pos: 'back', pages: page * 10 - 10 })
                  }
                >
                  {page}
                </li>
              ))}
              <button
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-customGray100 bg-customGray text-sm font-medium text-gray-500 hover:bg-customYellow"
                disabled={total / 10 === actualPage + 1}
                onClick={() => changePage({ pos: 'front' })}
              >
                <FaChevronRight style={{ color: 'white' }} />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
