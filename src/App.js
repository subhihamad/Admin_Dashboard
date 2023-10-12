import './App.css';
import { Route , Routes } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Ecommerce , Orders, Employees,Customers,Kanban ,Editor,Calendar,ColorPicker,Line,Area,Bar,Pie,Financial,
  ColorMapping,Pyramid,Stacked} from './pages';
  import {Sidebar , Navbar,ThemeSettings} from './components'
import { useStateContext } from './contexts/contextProvider';

function App() {
  const {activeMenu ,setThemeSettings,currentColor,currentMode}=useStateContext();
  return (
    <div className={currentMode==='Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
      <div className='fixed right-4 bottom-4' style={{zIndex:1000}}>
        <TooltipComponent content='settings' position='Top Center' >
            <button onClick={()=>setThemeSettings(true)} style={{background:currentColor,borderRadius:'50%'}}
            className='text-3xl p-3 hover:drop-shadow-xl text-white hover:bg-light-gray'>
              <FiSettings/>
            </button>
        </TooltipComponent>
      </div>

      {activeMenu ? (
        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '>
          <Sidebar />
        </div>
      ):(
        <div className='w-0  '>
          <Sidebar />
        </div>
      )}

      <div className={`dark:bg-main-dark-bg min-h-screendark bg-main-bg w-full ${activeMenu ? 'md:ml-72' : ''} `}>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <Navbar />
        </div>
        <div>
        <ThemeSettings />
        <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

            </Routes>
      </div>
      </div>

      
    </div>
    </div>
  );
}

export default App;
