import {convert} from '../../utils/helper';

export const TableBody = (
{
  list,
  currentExchange,
  handleRemove,
  handleDialog,
  handleId,
}) => (
  <tbody>
  {
    list?.map((item, index) => (
      <tr key={item.id} className="table__row">
        <td className="table__cell">
          { index }
        </td>

        <td className="table__cell">
          { item.month }
        </td>

        <td className="table__cell">
          { item.income }
        </td>

        <td className="table__cell">
          { item.costs }
        </td>

        <td className="table__cell">
          {convert(item.income, item.costs)}
        </td>

        <td className="table__cell">
          {convert(item.income, item.costs, currentExchange.USD)}
        </td>

        <td className="table__cell">
          {convert(item.income, item.costs, currentExchange.EUR)}
        </td>

        <td className="table__cell">
          <div className="table__actions">
            <button
              className="table__action table__action--edit"
              type="button"
              onClick={() => {
                handleDialog(true)
                handleId(item.id)
              }} />

            <button
              className="table__action table__action--remove"
              type="button"
              onClick={() => handleRemove(item.id)} />
          </div>
        </td>
      </tr>
    ))
  }
  </tbody>
)
