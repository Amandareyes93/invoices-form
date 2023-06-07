import { CSSProperties, ReactNode, MouseEventHandler } from 'react';

export interface IInvoiceForm {
  date: string;
  clientName: string;
  address: string;
  phone: string;
  items?: IProduct[];
  cant: number[];
  totalPrice?: number;
}

export interface ITr {
  title: JSX.Element;
  price: number;
  cant: JSX.Element;
}

export interface IInvoiceFormProps {
  products: IProduct[];
  callbackSubmitInvoice: Function;
}

export interface IComponentsAbstract {
  id?: string;
  className?: string;
  styles?: CSSProperties;
  children?: ReactNode;
  onClick?: MouseEventHandler;
}

export interface IProductsResponse {
  products: Array<IProduct>;
  total: number;
  skip: number;
  limit: number;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
