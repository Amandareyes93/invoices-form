/* eslint-disable no-debugger */
import { useState, MouseEvent } from 'react';
import './App.css';
import { Button, Modal, InvoicesTable } from './components';
import { InvoiceForm } from './containers';
import { getProducts } from './services';
import { IInvoiceForm, IProductsResponse } from './interfaces';

const KEY_LOCALSTORAGE = 'dataInvoice';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [productsResponse, setProductsResponse] = useState<IProductsResponse>({} as IProductsResponse);

  const isFilled = localStorage.getItem(KEY_LOCALSTORAGE);

  const [dataInvoiced, setDataInvoiced] = useState<IInvoiceForm[]>(
    isFilled ? (JSON.parse(isFilled) as IInvoiceForm[]) : []
  );

  const handleCreateInvoice = async (e: MouseEvent) => {
    setIsModalOpen(true);
    try {
      setProductsResponse(await getProducts());
    } catch (error) {
      console.log(error);
    }
  };

  const callbackSubmitInvoice = (data: IInvoiceForm) => {
    setDataInvoiced((prevProducts) => {
      const newData = [...prevProducts, data];
      localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(newData));
      return newData;
    });

    setIsModalOpen(false);
  };

  return (
    <>
      <header></header>

      <main>
        <div className="app-content">
          <Modal title="New Invoice" isOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
            <InvoiceForm products={productsResponse.products} callbackSubmitInvoice={callbackSubmitInvoice} />
          </Modal>

          <Button text="Create Invoice" onClick={handleCreateInvoice} />
          <InvoicesTable data={dataInvoiced} />
        </div>
      </main>

      <footer></footer>
    </>
  );
}
