/* eslint-disable no-debugger */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IProduct, IInvoiceForm, IInvoiceFormProps, ITr } from '../../interfaces';
import { Button } from '../../components';
import './index.css';

export default function InvoiceForm({ callbackSubmitInvoice, products }: IInvoiceFormProps) {
  const { register, handleSubmit, reset, watch } = useForm<IInvoiceForm>({
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
      clientName: '',
      address: '',
      phone: '',
    },
  });

  const [tr, setTR] = useState<ITr[]>([]);

  const totalPrice = watch('items')?.reduce((acc, product, index) => {
    const qtd = watch('cant')[index] || 0;
    return acc + (product?.price || 0) * qtd;
  }, 0);

  const onSubmit = (data: IInvoiceForm) => {
    callbackSubmitInvoice({
      ...data,
      totalPrice,
    });
    setTR([]);
    reset();
  };

  const onCancell = () => {
    setTR([]);
    reset();
  };

  return (
    <div className="invoice-form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-grid">
        <div className="labels">
          <label>
            Date:
            <input type="text" {...register('date')} />
          </label>
          <label>
            Client Name:
            <input type="text" {...register('clientName')} />
          </label>
          <label>
            Address:
            <input type="text" {...register('address')} />
          </label>
          <label>
            Phone:
            <input type="text" {...register('phone')} />
          </label>
        </div>

        <Button
          text="Add item"
          type="button"
          onClick={() =>
            setTR((prevTrs) => {
              const newTr = {
                title: (
                  <select
                    {...register(`items.${prevTrs.length}`, {
                      setValueAs: (value) => {
                        debugger;
                        const jsonPased = value !== '' && JSON.parse(value);
                        if (!jsonPased) return {} as IProduct;
                        return jsonPased as IProduct;
                      },
                    })}
                  >
                    <option key={0} value="">
                      Select a product
                    </option>
                    {products.map((product) => (
                      <option key={product.id} value={JSON.stringify(product)}>
                        {product.title}
                      </option>
                    ))}
                  </select>
                ),
                price: 0,
                cant: <input type="number" {...register(`cant.${prevTrs.length}`)} />,
              };
              return [...prevTrs, newTr];
            })
          }
        />
        <div className="content-table">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Unit Price</th>
                <th>Qtd</th>
              </tr>
            </thead>
            <tbody>
              {tr.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.title}</td>
                    <td>{watch(`items.${index}`)?.price || row.price}</td>
                    <td>{row.cant}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          Total Price:
          {totalPrice}
        </div>

        <div className="button-form">
          <Button text="Save" type="submit" />
          <Button text="Cancel" type="reset" onClick={onCancell} />
        </div>
      </form>
    </div>
  );
}
