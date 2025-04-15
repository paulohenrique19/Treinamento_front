import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "lucide-react"
import { ResponsiveContainer, 
        Pie,
        PieChart, 
        Cell 
        } from 'recharts'

import colors from 'tailwindcss/colors'

const COLORS = [
    colors.sky['500'],
    colors.rose['500'],
    colors.emerald['500'],
    colors.amber['500'],
    colors.violet['500']
]

const data = [
    { product: 'Bacon', amount: 40 },
    { product: '4 queijos', amount: 30 },
    { product: 'Milho', amount: 50 },
    { product: 'Calabresa', amount: 16 },
    { product: 'Dobradinha', amount: 26 },
]

const PopularProductsChart = () => {
  return (
    <Card className="">
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
                        strokeWidth={1}
                        labelLine={false}
                        label={({
                            cx,
                            cy,
                            midAngle,
                            innerRadius,
                            outerRadius,
                            value,
                            index,
                          }) => {
                            const RADIAN = Math.PI / 180
                            const radius = 12 + innerRadius + (outerRadius - innerRadius)
                            const x = cx + radius * Math.cos(-midAngle * RADIAN)
                            const y = cy + radius * Math.sin(-midAngle * RADIAN)
                          
                            return (
                              <text
                                x={x}
                                y={y}
                                className="fill-muted-foreground text-xs"
                                textAnchor={x > cx ? 'start' : 'end'}
                                dominantBaseline="central"
                              >
                                {data[index].product.length > 12
                                  ? data[index].product.substring(0, 12).concat('...')
                                  : data[index].product}{' '}
                                ({value})
                              </text>
                            )
                          }}
                    >

                        {/*O underline _ é pra quando queremos pegar apenas o index */}
                        {data.map((_, index) => {
                            return (
                                <Cell 
                                    key={`cell-${index}`} 
                                    fill={COLORS[index]} 
                                    className="stroke-background hover:opacity-80"
                                    />
                            )
                        })}                        
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  )
}

export default PopularProductsChart;