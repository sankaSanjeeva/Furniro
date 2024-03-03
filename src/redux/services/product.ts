import { PaginationResponse, Product } from '@/common/types';
import api from './api';

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<
      PaginationResponse<Product>,
      Record<string, string | number | null>
    >({
      query: (params) => ({
        url: 'products',
        params,
      }),
    }),

    getProduct: build.query<Product, string>({
      query: (code) => `products/${code}`,
    }),

    getRelatedProducts: build.query<Product[], string>({
      query: (code) => `products/${code}/related`,
      transformResponse: (response: PaginationResponse<Product>) =>
        response.data,
    }),
  }),
});

// eslint-disable-next-line import/prefer-default-export
export const { useGetProductsQuery } = productApi;
