import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { Search, X } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import tw from "tailwind-styled-components"
import { z } from "zod"

const orderFiltersSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional()
})

type OrderFiltersSchema = z.infer<typeof orderFiltersSchema>

const OrderTableFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const { register, handleSubmit, control, reset } = useForm({
    resolver: zodResolver(orderFiltersSchema),
    defaultValues: {
      orderId: orderId?? '',
      customerName: customerName ?? '',
      status: status ?? 'all',
    }
  })

  function handleFilter({ orderId, customerName, status}: OrderFiltersSchema){
    setSearchParams( state => {
      if (orderId) {
        state.set('orderId', orderId)
      } else {
        state.delete('orderId')
      }

      if (customerName) {
        state.set('customerName', customerName)
      } else {
        state.delete('customerName')
      }

      if (status) {
        state.set('status', status)
      } else {
        state.delete('status')
      }

      state.set('page', '1')

      return state
    })
  }

  function handleClearFilters(){
    setSearchParams(state => {
      state.delete('orderId')
      state.delete('customerName')
      state.delete('status')
      state.set('page', '1')

      return state
    })

    reset({
      orderId: '',
      customerName: '',
      status: 'all',
    })
  }

  return (
    <Form onSubmit={handleSubmit(handleFilter)}>
          <Filters>Filtros</Filters>
          <InputFormId placeholder="Id do pedido" {...register('orderId')}/>
          <InputFormName placeholder="Nome do cliente" {...register('customerName')}/>
          
          <Controller
            name="status"
            control={control}
            render={({ field: { name, onChange, value, disabled } }) => {
              return (
                <Select 
                  defaultValue="all" 
                  name={name} 
                  onValueChange={onChange} 
                  value={value} 
                  disabled={disabled}
                >
                  <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="canceled">Cancelado</SelectItem>
                    <SelectItem value="processing">Em preparo</SelectItem>
                    <SelectItem value="delivering">Em entrega</SelectItem>
                    <SelectItem value="delivered">Entregue</SelectItem>
                  </SelectContent>
                  </Select>
              )
            }}
          />


          <Button type="submit" variant="secondary" size={"xs"}>
            <Search className="mr-2 h-4 w-4"/>
            Filtrar resultados
          </Button>

          <Button onClick={handleClearFilters} type="button" variant="outline" size={"xs"}>
            <X className="mr-2 h-4 w-4"/>
            Remover filtros
          </Button>
    </Form>
  )
}

export default OrderTableFilters

const Form = tw.form`
    flex items-center gap-2
`
const Filters = tw.span`
    text-sm font-semibold
`
const InputFormId = tw(Input)`
    h-8 w-auto
`

const InputFormName = tw(Input)`
    h-8 w-[320px]
`