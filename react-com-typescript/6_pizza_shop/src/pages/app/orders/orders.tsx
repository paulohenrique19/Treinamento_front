import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import OrderTableRow from "./order-table-row";
import OrderTableFilters from "./order-table-filters";
import Pagination from "@/components/pagination";

const Orders = () => {

    useEffect(() => {
          document.title = "Pedidos";
    }, []);


  return (
    <Container>
            <FormContainer>
                <Description>Pedidos</Description>
                <OrderTableFilters />
                <TableContainer>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]">Identificador</TableHead>
                                <TableHead className="w-[180px]">Realizado há</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Cliente</TableHead>
                                <TableHead className="w-[140px]">Total do pedido</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 10}).map((_, i) => {
                                return <OrderTableRow key={i} />
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                
                <Pagination pageIndex={0} totalCount={105} perPage={10}/>


            </FormContainer>
    </Container>
  )
}

export default Orders

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.65rem;
`
const Description = tw.h1`
    text-3xl font-bold tracking-tighter
`
const FormContainer = tw.div`
    space-y-2.5
`
const TableContainer = tw.div`
    border rounded-md
`
