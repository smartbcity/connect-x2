

import { useMemo } from 'react'
import { ChartOptions, ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import millify from 'millify';

interface Data {
    label: string
    value: number
}

interface BarChartProps {
    data: Data[]
    height?: number
}

export const chartColors =[
    "#cfdbd5",
    "#f5cb5c",
    "#333533",
    "#dbcba4",
    "#8a5536",
    "#e0ada4",
    "#a76d60",
    "#902923",
    "#ddbf6f",
    "#f7934c",
    "#46babd",
]

const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            display: false,
        },
        tooltip: {
            displayColors: false,
        },
        title: {
            display: false
        },
        datalabels: {
            anchor: 'end',
            align: "bottom",
            //@ts-ignore
            backgroundColor: 'transparent',
            padding: {
                left: 5,
                right: 5,
                top: 15
            },
            borderRadius: 3,
            borderWidth: 0,
            color: 'white',
            formatter: (value: number) => {
                return millify(value, {
                    precision: 1,
                    lowercase: true
                })
            },
            font: {
                size: 10,
                family: "Montserrat"
            },
        }
    },
    scales: {
        xAxes: {
            display: true,
            grid: {
                display: false,
                drawTicks: false,
                drawBorder:false,
                drawOnChartArea: false,
            },
            ticks: {
                display: true,
                font: {
                    size: 10,
                    family: "Montserrat"
                },
            }
        },
        yAxes: {
            display: false,
            grid: {
                display: false
            },
        }
    }
}

export const BarChart = (props: BarChartProps) => {
    const {data, height = 220} = props

    const labels = useMemo(() => data.map((data) => data.label), [data])
    const values = useMemo(() => data.map((data) => data.value), [data])

    const chartData: ChartData = useMemo(() => ({
        labels: labels,
        datasets: [
            {
                data: values,
                borderColor: chartColors,
                backgroundColor: chartColors,
                borderWidth: 0,
                borderRadius: 3
            }
        ],
    }), [labels, values])

   
    return (
        <Bar plugins={[ChartDataLabels]} data={chartData} type='bar' height={height} options={options} />
    )
}
