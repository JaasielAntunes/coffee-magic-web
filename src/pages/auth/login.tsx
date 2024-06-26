import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/login'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z
    .string()
    .min(1, { message: 'E-mail obrigatório!' })
    .email({ message: 'E-mail inválido!' }),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({
        email: data.email,
      })
      toast.success(
        'Um link de autenticaçao foi enviado para o servidor, copie e cole o link na barra de endereço para acessar o painel.',
        {
          action: {
            label: 'Reenviar',
            onClick: () => console.log('clicked'),
          },
        },
      )
    } catch (error) {
      toast.error('E-mail inválido ou inexistente!')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/register">Novo estabelecimento</Link>
        </Button>

        <div className="flex w-[400px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Informe o e-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="E-mail do estabelecimento"
                {...register('email')}
                disabled={isSubmitting}
                maxLength={40}
                required
              />
            </div>

            <div className="text-center">
              <Button disabled={isSubmitting} type="submit">
                Acessar painel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
