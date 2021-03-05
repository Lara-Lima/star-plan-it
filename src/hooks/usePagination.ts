import { useMemo } from 'react'
import { useRouter } from 'next/router'

export function usePagination() {
  const router = useRouter()

  const pagination = useMemo(() => {
    if (Object.keys(router.query).length > 0) {
      return router.query
    }
    return { _start: 0, _limit: 10 }
  }, [router.query])

  return pagination
}
