import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Filter,
  Selection,
  Edit,
  Toolbar,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { customersData , customersGrid } from "../data/dummy";
import { Header } from "../components";
const Customers = () => {
  return <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='page' title='Customers'/>
            <GridComponent
            dataSource={customersData}
            allowPaging
            allowSorting
            toolbar={['Delete']}
            editSettings={{
              allowDeleting:true,
              allowEditing:true
            }}
            width='auto'
            >
              <ColumnsDirective>
                {customersGrid.map((item,ind)=>(
                  <ColumnDirective key={ind} {...item} />
                ))}
              </ColumnsDirective>
              <Inject services={[Page,Toolbar,Selection,Edit,Filter,Sort]} />
            </GridComponent>
        </div>;
};

export default Customers;
