import tw from "tailwind-styled-components"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

export interface PaginationProps {
    pageIndex: number,
    totalCount: number,
    perPage: number
}


const Pagination = ({ pageIndex, totalCount, perPage}: PaginationProps) => {
    const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <Container>
        <TotalRegisters>
            Total de {totalCount} item(s)
        </TotalRegisters>

        <PageList>
            <Page>Página {pageIndex + 1} de {pages}</Page>
            <ButtonsToNavigate>
                <Button variant={"outline"} className="h-8 w-8 p-8">
                    <ChevronsLeft className="h-4 w-4" />
                    <span className="sr-only">Primeira página</span>
                </Button>
                <Button variant={"outline"} className="h-8 w-8 p-8">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Página anterior</span>
                </Button>
                <Button variant={"outline"} className="h-8 w-8 p-8">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Próxima página</span>
                </Button>
                <Button variant={"outline"} className="h-8 w-8 p-8">
                    <ChevronsRight className="h-4 w-4" />
                    <span className="sr-only">última página</span>
                </Button>
            </ButtonsToNavigate>
        </PageList>
    </Container>
  )
}

export default Pagination

const Container = tw.div`
    flex items-center justify-between
`

const TotalRegisters = tw.span`
    text-sm text-muted-foreground
`

const PageList = tw.div`
    flex items-center gap-6 lg:gap-8
`
const Page = tw.div`
    text-sm font-medium
`
const ButtonsToNavigate = tw.div`
    flex items-center gap-2
`