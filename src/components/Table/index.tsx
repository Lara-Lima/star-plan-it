import Pagination from 'components/Pagination'
import getValue from 'get-value'

type Column = {
  field: string
  headerName: string
  customCol?: (value: unknown) => void
}

type TableProps = {
  columns: Column[]
  rows: []
  total?: number
}

const Table = ({ columns = [], rows = [], total = 0 }: TableProps) => (
  <>
    <div className="sm:px-6 md:px-12 xl:px-16 mt-12" data-item="true">
      <div className="flex flex-col">
        <div className="shadow overflow-hidden rounded-2xl">
          <table className="min-w-full divide-y divide-black">
            <thead className="bg-customGray">
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-customGray100 uppercase tracking-wider"
                  >
                    {column.headerName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-customGray divide-y divide-black p-10">
              {rows.map((value, index) => (
                <tr key={index} className="max-w-xs">
                  {columns.map((col, index) => (
                    <td key={index} className="px-6 py-4 text-customGray100">
                      {col.customCol
                        ? col.customCol(getValue(value, col.field))
                        : getValue(value, col.field)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Pagination total={total} />
  </>
)

export default Table
