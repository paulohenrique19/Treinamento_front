import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableRow, TableCell } from "@/components/ui/table";
import { ArrowRight, X, Search } from "lucide-react";
import tw from "tailwind-styled-components";
import OrderDetails from "./order-details";

const OrderTableRow = () => {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="xs">
                    <SearchIcon />
                    <OrderDetailsRead>Detalhes do Pedido</OrderDetailsRead>
                </Button>
            </DialogTrigger>

            <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        7sgu7fg74y283d
      </TableCell>
      <TableCell className="text-muted-foreground">Há 15 minutos</TableCell>
      <TableCell>
        <StatusContainer>
          <StatusConditionColor />
          <StatusConditionText>Pendente</StatusConditionText>
        </StatusContainer>
      </TableCell>
      <TableCell className="font-medium">Paulo Henrique</TableCell>
      <TableCell className="font-medium">R$ 150,00</TableCell>
      <TableCell>
        <Button variant="outline" size={"xs"}>
          <ArrowRight className="h-3 w-3 mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size={"xs"}>
          <X className="h-3 w-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};

export default OrderTableRow;

const OrderDetailsRead = tw.span`
    sr-only
`
const StatusContainer = tw.div`
    flex items-center gap-2
`
const StatusConditionColor = tw.span`
    h-2 w-2 rounded-full bg-slate-400
` 
const SearchIcon = tw(Search)`
    h-3 w-3
`
const StatusConditionText = tw.span`

`

/*
interface StatusConditionColorProps {
    variant: 'pendente' | 'andamento' | 'finalizado';
}
*/