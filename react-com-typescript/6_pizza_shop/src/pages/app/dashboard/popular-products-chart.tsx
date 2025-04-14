import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "lucide-react"
import { ResponsiveContainer, 
        Pie,
        PieChart,  
        } from 'recharts'

import colors from 'tailwindcss/colors'

const data = [
    { product: 'Bacon', amount: 40 },
    { product: '4 queijos', amount: 30 },
    { product: 'Milho', amount: 50 },
    { product: 'Calabresa', amount: 16 },
    { product: 'Dobradinha', amount: 26 },
]

const PopularProductsChart = () => {
  return (
    <Card className="col-span-6 mt-4">
        <CardHeader className="pb-8">
           <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">Produtos populares</CardTitle>     
                <BarChart className="w-4 h-4 text-muted-foreground" />
           </div> 
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={240}>
                <PieChart data={data}>
                    <Pie data={data} 
                        dataKey="amount" 
                        nameKey="product" 
                        cx="50%" 
                        cy="50%"
                        outerRadius={86}
                        innerRadius={64}
                        strokeWidth={8}
                    >
                        
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  )
}

export default PopularProductsChart;