import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,Legend,SplineAreaSeries, LineSeries } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries,areaPrimaryXAxis,areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/contextProvider'
import { Header } from '../../components'
const Area = () => {
  const {currentMode}=useStateContext();
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl'>
      <Header category='chart' title='Inflation Rate In Percentage ' />
      <ChartComponent
      id='area-chart'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      border={{width:0}}
      tooltip={{enable:true}}
      background={currentMode==='Dark'? '#33373d' : '#fff'}
      legendSettings={{ background: 'white' }}
      >
        <Inject services={[DateTime,Legend,SplineAreaSeries,LineSeries]} />
        <SeriesCollectionDirective
        >
          {areaCustomSeries.map((item,ind)=>(
            <SeriesDirective key={ind} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area