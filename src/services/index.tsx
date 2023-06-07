import { IProductsResponse } from '../interfaces';

const URL_DUMMY_JSON = 'https://dummyjson.com';

export async function getProducts() {
  const URL = `${URL_DUMMY_JSON}/products`;
  const response = await fetch(URL);
  return (await response.json()) as IProductsResponse;
}
