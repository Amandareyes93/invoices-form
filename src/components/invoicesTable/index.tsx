import { IInvoiceForm } from '../../interfaces';
import './index.css';

interface IInvoicesTableProps {
  data: IInvoiceForm[];
}
export default function InvoicesTable({ data }: IInvoicesTableProps) {
  return (
    <div className="table-container">
      <table className="responsive-table">
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
    </div>
  );
}
