import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import { SignIn } from './login'

describe('Login', () => {
  test('deve definir o valor de entrada de e-mail padrão se o e-mail estiver presente nos parâmetros de pesquisa', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter initialEntries={['/login?email=johndoe@example.com']}>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        )
      },
    })

    const emailInput = wrapper.getByLabelText(
      'Informe o e-mail',
    ) as HTMLInputElement

    expect(emailInput.value).toEqual('johndoe@example.com')
  })
})
