import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Café 01', amount: 5 },
    { product: 'Café 02', amount: 3 },
    { product: 'Café 03', amount: 2 },
    { product: 'Café 04', amount: 7 },
    { product: 'Café 05', amount: 4 },
  ])
})
