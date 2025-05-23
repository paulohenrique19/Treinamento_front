import { getPopularProducts } from "@/api/get-popular-products"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
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



const PopularProductsChart = () => {

  const {data: popularProducts} = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProducts,
  })


  return (
    <Card className="">
        <CardHeader className="pb-8">
           <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">Produtos populares</CardTitle>     
                <BarChart className="w-4 h-4 text-muted-foreground" />
           </div> 
        </CardHeader>
        <CardContent>
           {popularProducts && (
              <ResponsiveContainer width="100%" height={240}>
              <PieChart data={popularProducts}>
                  <Pie data={popularProducts} 
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
                              {popularProducts[index].product.length > 12
                                ? popularProducts[index].product.substring(0, 12).concat('...')
                                : popularProducts[index].product}{' '}
                              ({value})
                            </text>
                          )
                        }}
                  >

                      {/*O underline _ é pra quando queremos pegar apenas o index */}
                      {popularProducts.map((_, index) => {
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
           )}
        </CardContent>
    </Card>
  )
}

export default PopularProductsChart;