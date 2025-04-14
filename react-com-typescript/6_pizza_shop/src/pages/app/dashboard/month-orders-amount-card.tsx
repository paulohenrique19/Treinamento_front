import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Utensils } from "lucide-react"
import tw from "tailwind-styled-components"

const MonthOrdersAmountCard = () => {
  return (
    <Card>
        <CardHeader className="flex items-center space-y-0 justify-between pb-2">
            <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
            <Value>246</Value>
            <Difference>
              <ColorTriggerEmerald>+5%</ColorTriggerEmerald> em relação ao mês passado
            </Difference>
        </CardContent>
    </Card>
  )
}

export default MonthOrdersAmountCard

const Value = tw.span`
  text-2xl font-bold tracking-tight
`
const Difference = tw.p`
  text-xs text-muted-foreground
`
const ColorTriggerEmerald = tw.span`
  text-emerald-500 dark:text-emerald-400
`

/*
const ColorTriggerRed = tw.span`
  text-red-500 dark:text-red-400
`
*/