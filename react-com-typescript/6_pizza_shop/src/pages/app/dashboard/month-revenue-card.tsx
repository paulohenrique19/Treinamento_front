import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import tw from 'tailwind-styled-components'

const MonthRevenueCard = () => {
  return (
    <Card>
        <CardHeader className="flex items-center space-y-0 justify-between pb-2">
            <CardTitle className="text-base font-semibold">Receita total (mês)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
            <Value>R$ 1500,00</Value>
            <Difference>
              <ColorTriggerEmerald>+2%</ColorTriggerEmerald> em relação ao mês passado
            </Difference>
        </CardContent>
    </Card>
  )
}

export default MonthRevenueCard

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