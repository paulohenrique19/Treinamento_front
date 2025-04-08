import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";
import { useEffect } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const Orders = () => {

    useEffect(() => {
          document.title = "Pedidos";
    }, []);


  return (
    <Container>
            <Description>Pedidos</Description>
            <FormContainer>
                <Form>
                    <Filters>Filtros</Filters>
                    <InputForm placeholder="Nome do cliente"/>
                </Form>
                <TableContainer>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead></TableHead>
                                <TableHead>Identificador</TableHead>
                                <TableHead>Realizado há</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Cliente</TableHead>
                                <TableHead>Total do pedido</TableHead>
                                <TableHead></TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Button variant="outline" size="xs">
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

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
const Form = tw.form`
    flex items-center gap-2
`
const Filters = tw.span`
    text-sm font-semibold
`
const InputForm = tw(Input)`
    h-8 w-[320px]
`
const TableContainer = tw.div`
    border rounded-md
`