import Table from 'components/Table'
import { useFetch } from 'service'
import queryString from 'query-string'
import { Spinner } from 'components/Spinner/styles'
import { usePagination } from 'hooks/usePagination'
import Title from 'components/Title'

const Albuns: React.FC = () => {
  const pagination = usePagination()

  const { data: total } = useFetch(`/albums`)
  const { data, error } = useFetch(
    `/albums?${queryString.stringify(pagination)}`
  )

  if (!data) {
    return (
      <div className="flex w-full justify-center mt-4">
        <Spinner />
        <span className="ml-2 text-white">Carregando...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex w-full justify-center mt-4">
        <span className="text-white">Houve um erro ao carregar</span>
      </div>
    )
  }

  return (
    <div className="px-4 pb-12  max-w-full ">
      <Title title="Albuns" />

      <Table
        columns={[
          { headerName: 'ID', field: 'id' },
          { headerName: 'Título', field: 'title' }
        ]}
        rows={data || []}
        total={total?.length}
      />
    </div>
  )
}

export default Albuns
