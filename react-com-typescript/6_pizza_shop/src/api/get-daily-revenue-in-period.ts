import { api } from "@/lib/axios";

export type GetDailyRevenueInPeriodReponse = {
    date: string,
    receipt: number
}[]

export async function getDailyRevenueInPeriod() {
    const response = await api.get<GetDailyRevenueInPeriodReponse>('/metrics/daily-receipt-in-period')

    return response.data
}