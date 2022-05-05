import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js'

import { useSelector } from 'react-redux'

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale)
const formatter = (number) =>
  number > 999999 ? (number / 1000000).toFixed(1) + 'M' : number

const buildData = ({ chartData }) => ({
  labels: chartData.labels,
  datasets: [
    {
      label: '',
      data: chartData.data,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 1)',
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
      fill: 'start',
      tension: 0.4,
      borderWidth: 4,
      borderDash: [4, 4],
      point: 0,
    },
  ],
})

const options = {
  elements: {
    point: {
      radius: 1,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxes: {
      ticks: {
        color: 'rgba(255, 255, 255, .3)',
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },

    xAxes: {
      ticks: {
        color: 'rgba(255, 255, 255, .3)',
      },
      grid: {
        circular: true,
        borderColor: 'rgba(255, 255, 255, .2)',
        color: 'rgba(255, 255, 255, .2)',
        borderDash: [5, 5],
      },
    },
  },
  layout: {
    padding: {
      right: 10,
    },
  },
}

const numberToFix = (number, fix) => (number || 0).toFixed(fix)

const StockChart = ({ info, className }) => {
  const personalInfo = useSelector((state) => state.userInfo.personalInfo)

  const data = buildData(info)

  return (
    <>
      <div
        className={` w-full overflow-hidden rounded-lg border-gray-200  shadow md:flex ${className}`}
      >
        <div className="flex w-full items-center   bg-indigo-600 px-5 pb-4 pt-8 text-white md:w-1/2">
          <Line datasetIdKey="id" type="line" data={data} options={options} />
        </div>
        <div className="flex w-full items-center bg-white p-10 text-gray-600 md:w-1/2">
          <div className="w-full truncate text-sm font-medium text-gray-500">
            <div className="mb-2 font-light">{personalInfo.data&&`${personalInfo.data.firstName}'s stock of the day:`}</div>
            <h3 className="text-lg font-semibold leading-tight text-gray-800">
              {info.stockFullName}
              <span className="ml-2 text-sm  uppercase leading-tight text-gray-500">
                {personalInfo?.data?.country}
              </span>
            </h3>
            <h6 className="mb-2 text-sm leading-tight">
              <span>{info.stockShortName}</span>
              &nbsp;&nbsp;-&nbsp;&nbsp;Aug 2nd 4:10pm AEST
            </h6>
            <div className="mb-6 flex w-full items-end">
              <span className="mt-1 block text-3xl font-semibold leading-none  text-gray-900">
                {numberToFix(info.price.current, 3)}
              </span>
              <span className="ml-4 block text-sm leading-5 text-green-500">
                {`${info.price.high - info.price.low < 0 ? '▼' : '▲'} ${(
                  info.price.high - info.price.low
                ).toFixed(3)} (${(
                  (info.price.high / info.price.low) * 100 -
                  100
                ).toFixed(3)}%)`}
              </span>
            </div>
            <div className="flex w-full text-xs">
              <div className="flex w-5/12">
                <div className="flex-1 pr-3 text-left font-medium text-gray-700">
                  Open
                </div>
                <div className="flex-1 px-3 text-right">
                  {info.price.open.toFixed(3)}
                </div>
              </div>
              <div className="flex w-7/12">
                <div className="flex-1 px-3 text-left font-medium text-gray-700">
                  Market Cap
                </div>
                <div className="flex-1 pl-3 text-right">
                  {formatter(info.price.cap)}
                </div>
              </div>
            </div>
            <div className="flex w-full text-xs">
              <div className="flex w-5/12">
                <div className="flex-1 pr-3 text-left font-medium text-gray-700">
                  High
                </div>
                <div className="px-3 text-right">
                  {info.price.high.toFixed(3)}
                </div>
              </div>
              <div className="flex w-7/12">
                <div className="flex-1 px-3 text-left text-sm  font-medium text-gray-700">
                  P/E ratio
                </div>
                <div className="pl-3 text-right">
                  {info.price.ratio.toFixed(2)}
                </div>
              </div>
            </div>
            <div className="flex w-full text-xs">
              <div className="flex w-5/12">
                <div className="flex-1 pr-3 text-left text-sm font-medium text-gray-700">
                  Low
                </div>
                <div className="px-3 text-right">
                  {info.price.low.toFixed(3)}
                </div>
              </div>
              <div className="flex w-7/12">
                <div className="flex-1 px-3 text-left font-medium text-gray-700">
                  Dividend yield
                </div>
                <div className="pl-3 text-right">{`${info.price.dividend}%`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StockChart
