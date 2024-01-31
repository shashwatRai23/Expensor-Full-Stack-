import React from 'react'

const Filter = ({month,year}) => {
    const date=new Date();
    const currMonth=date.getMonth();
    const currYear=date.getFullYear();
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
  return (
    <div>
        <select className='inp' name='months' classname="inp">
        {months.map((month,index)=>(
            index<=currMonth && <option key={index} value={month} selected={month==currMonth}>{month}</option>
        ))}
        </select>
    </div>
  )
}

export default Filter