import React from 'react'
import { monthsList } from '@/utils/monthsList';
const Filter = ({month,year}) => {
    const date=new Date();
    const currMonth=date.getMonth();
    const currYear=date.getFullYear();
    
  return (
    <div>
        <select className='inp' name='months' classname="inp">
        {monthsList.map((month,index)=>(
            index<=currMonth && <option key={index} value={month} selected={month==currMonth}>{month}</option>
        ))}
        </select>
    </div>
  )
}

export default Filter