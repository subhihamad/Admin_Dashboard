import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,Legend,Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/contextProvider'
const LineChart = () => {
  const {currentMode}=useStateContext();
  return (
    <div className='w-full'>
      <ChartComponent
      id='line-chart'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      border={{width:0}}
      tooltip={{enable:true}}
      background={currentMode==='Dark'? '#33373d' : '#fff'}
      legendSettings={{ background: 'white' }}
      >
        <Inject services={[DateTime,Legend,Tooltip,LineSeries]} />
        <SeriesCollectionDirective
        >
          {lineCustomSeries.map((item,ind)=>(
            <SeriesDirective key={ind} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default LineChart