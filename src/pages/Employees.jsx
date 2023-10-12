import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,Page,Search,Inject,Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData,employeesGrid } from '../data/dummy'
import { Header } from '../components'
const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='page' title='Employees'/>
      <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item,key)=>(
            <ColumnDirective key={key} {...item}  />
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees