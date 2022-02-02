

import { useMemo } from 'react'
import { ChartOptions, ChartData } from 'chart.js'
import { Line } from 'react-chartjs-2';
import { chartColors } from './BarChart';

interface Data {
    titles: string[]
    sets: {
        label: string,
        data: number[]
    }[]
}

interface LineChartProps {
    data: Data
    height?: number
    width?: number
}

const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    plugins: {
        legend: {
            position: 'top',
            labels: {
                usePointStyle: true,
                boxWidth: 8,
                boxHeight: 8,
            }
        },
        title: {
            display: false
        }
    },
    scales: {
        xAxes: {
            display: true,
            grid: {
                display: false,
                drawTicks: false,
                drawBorder: false,
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
            display: true,
            grid: {
                drawTicks: false,
                drawBorder: false,
                drawOnChartArea: true,
                borderDash: [10, 10],
            },
            ticks: {
                display: true,
                count: 6,
                font: {
                    size: 10,
                    family: "Montserrat"
                },
            }
        }
    }
}

export const LineChart = (props: LineChartProps) => {
    const { data, height, width } = props


    const chartData: ChartData = useMemo((): ChartData => ({
        labels: data.titles,
        datasets: data.sets.map((set, index) => ({
            label: set.label,
            data: set.data,
            strokeColor: chartColors[index],
            borderColor: chartColors[index],
            pointBorderColor: "#fff",
            pointBackgroundColor: chartColors[index],
            pointHoverBorderColor: chartColors[index],
            pointHoverBackgroundColor: "#fff",
            fill: false,
            cubicInterpolationMode: "monotone",
            hidden: index > 0,
        })),
    }), [data])


    return (
        //@ts-ignore
        <Line data={chartData} type='line' height={height} width={width} options={options} />
    )
}
