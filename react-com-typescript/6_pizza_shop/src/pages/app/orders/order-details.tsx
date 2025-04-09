import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import tw from "tailwind-styled-components"

const OrderDetails = () => {
  return (
    <DialogContent>
        <DialogHeader>
            <DialogTitle>Pedido: 7sgu7fg74y283d</DialogTitle>
            <DialogDescription>Detalhes do pedido</DialogDescription>
        </DialogHeader>

        <div>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-muted-foreground">Status</TableCell>
                        <TableCell className="flex justify-end">
                            <StatusContainer>
                                <StatusConditionColor />
                                <StatusConditionText>Pendente</StatusConditionText>
                            </StatusContainer>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">Cliente</TableCell>
                        <TableCell className="flex justify-end">
                            Paulo Henrique
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">Telefone</TableCell>
                        <TableCell className="flex justify-end">
                            (48) 90000-0000
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">E-mail</TableCell>
                        <TableCell className="flex justify-end">
                            aaaaaaa@email.com
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">Realizado há</TableCell>
                        <TableCell className="flex justify-end">
                            há 10 minutos
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Table>
                <TableHeader>
                    <TableHead>Produto</TableHead>
                    <TableHead className="text-right">Qtd.</TableHead>
                    <TableHead className="text-right">Preço</TableHead>
                    <TableHead className="text-right">Subtotal</TableHead>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Pizza de bacon</TableCell>
                        <TableCell className="text-right">
                            2
                        </TableCell>
                        <TableCell className="text-right">
                            R$ 50,00
                        </TableCell>
                        <TableCell className="text-right">
                            R$ 100,00
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Pizza de 4 queijos</TableCell>
                        <TableCell className="text-right">
                            2
                        </TableCell>
                        <TableCell className="text-right">
                            R$ 45,00
                        </TableCell>
                        <TableCell className="text-right">
                            R$ 90,00
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                       <TableCell colSpan={3}>Total do pedido</TableCell> 
                       <TableCell className="text-right font-medium">
                            R$ 190,00
                        </TableCell> 
                    </TableRow>
                </TableFooter>
            </Table>

        </div>
    </DialogContent>
  )
}
export default OrderDetails

const StatusContainer = tw.div`
    flex items-center gap-2
`
const StatusConditionColor = tw.span`
    h-2 w-2 rounded-full bg-slate-400
` 
const StatusConditionText = tw.span`

`