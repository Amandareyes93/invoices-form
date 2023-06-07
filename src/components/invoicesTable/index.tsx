import { IInvoiceForm } from '../../interfaces';

interface IInvoicesTableProps {
  data: IInvoiceForm[];
}
export default function InvoicesTable({ data }: IInvoicesTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Client Name</th>
          <th>Adress</th>
          <th>TotalItems</th>
          <th>TotalPrice</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((row, index) => {
          return (
            <tr key={index}>
              <td>{row.clientName}</td>
              <td>{row.address}</td>
              <td>{row.items?.length}</td>
              <td>{row.totalPrice}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
