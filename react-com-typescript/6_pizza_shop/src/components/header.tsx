import { Pizza } from "lucide-react"
import tw from "tailwind-styled-components"




export function Header() {
    return (
        <HeaderContainer>
            <HeaderContainerChild>
                <Pizza className="h-6 w-6"/>
                
                
            </HeaderContainerChild>
        </HeaderContainer>
    )
}

const HeaderContainer = tw.div`
    border-b
`
const HeaderContainerChild = tw.div`
    flex h-16 items-center gap-6 px-6
`