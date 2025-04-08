import tw from "tailwind-styled-components"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Building, ChevronDown, LogOut } from "lucide-react"

const AccountMenu = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
           <ButtonTrigger variant="outline">
            Pizza Shop 
            <ChevronDownIcon />
           </ButtonTrigger> 
        </DropdownMenuTrigger>   
        <DropdownMenuContentList align="end">
            <DropdownMenuLabelItens>
                <Name>Insert name here</Name>
                <Email>aaaa@email.com</Email>
            </DropdownMenuLabelItens>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <BuildingIcon />
                <span>Perfil da loja</span>
            </DropdownMenuItem>
            <DropdownMenuItemStyled>
                <LogOutIcon />
                <span>Sair</span>
            </DropdownMenuItemStyled>
        </DropdownMenuContentList>
    </DropdownMenu>
  )
}

export default AccountMenu

export const ButtonTrigger = tw(Button)`
    flex items-center gap-2 select-none
`

export const ChevronDownIcon = tw(ChevronDown)`
    h-4 w-4
`
export const DropdownMenuContentList = tw(DropdownMenuContent)`
    w-56
`
export const DropdownMenuLabelItens = tw(DropdownMenuLabel)`
    flex flex-col
`
export const Name = tw.span`

`
export const Email = tw.span`
    text-xs font-normal text-muted-foreground
`
export const BuildingIcon = tw(Building)`
    w-4 h-4 mr-2
`
export const LogOutIcon = tw(LogOut)`
    w-4 h-4 mr-2
`
export const DropdownMenuItemStyled = tw(DropdownMenuItem)`
    text-rose-500 dark:text-rose-400
`