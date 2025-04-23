import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableRow, TableCell } from "@/components/ui/table";
import { ArrowRight, X, Search } from "lucide-react";
import tw from "tailwind-styled-components";
import OrderDetails from "./order-details";

export interface OrderTableRowProps {
  order: {
        orderId: string;
        createdAt: Date;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
  }  
}

const OrderTableRow = ({ order }: OrderTableRowProps) => {
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
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground"></TableCell>
      <TableCell>
        <StatusContainer>
          <StatusConditionColor />
          <StatusConditionText>{order.status}</StatusConditionText>
        </StatusContainer>
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">{order.total}</TableCell>
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