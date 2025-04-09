import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"
import tw from "tailwind-styled-components"

const OrderTableFilters = () => {
  return (
    <Form>
          <Filters>Filtros</Filters>
          <InputFormId placeholder="Id do pedido"/>
          <InputFormName placeholder="Nome do cliente"/>
          <Select defaultValue="all">
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

          <Button type="submit" variant="secondary" size={"xs"}>
            <Search className="mr-2 h-4 w-4"/>
            Filtrar resultados
          </Button>

          <Button type="button" variant="outline" size={"xs"}>
            <X className="mr-2 h-4 w-4"/>
            Buscar filtros
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