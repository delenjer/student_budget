import {TableHeader} from './TableHeader';
import {TableBody} from './TableBody';

export const Table = (
{
  list,
  currentExchange,
  handleRemove,
  handleDialog,
  handleId
}) => (
  <table className="table">
    <TableHeader />

    <TableBody
      list={list}
      currentExchange={currentExchange}
      handleRemove={handleRemove}
      handleDialog={handleDialog}
      handleId={handleId}
    />
  </table>
)
