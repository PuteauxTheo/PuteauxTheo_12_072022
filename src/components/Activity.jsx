import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Activity( {dataActivity} ) {

  /**
   * @param {string} date full date
   * @returns number 
   */
  function transformDateToDay(date){
    const day = new Date(date)
    return day.getDate();
    
  }

  /**
   * @param {string} value legend name 
   * @returns span tag 
   */
  function renderTextLegend(value){
    return <span className='activity-text-legend'>{value}</span>
  }

  /**
   * Create ToolTip for chart
   * @param {array} paylaod data
   * @param {boolean} active ToolTip active 
   * @returns content when hover the chart
   */
  function customToolTip({active , payload}){
    if(active && payload && payload.length){
      return (
        <div className='activity-custom-tooltip'>
          <p className='activity-custom-tooltip-text'>{payload[0].value}kg</p>
          <p className='activity-custom-tooltip-text'>{payload[1].value}Kcal</p>
        </div>
      )
    }
    
  } 

  return (
  <div className='activity-chart'>
    <h2 className='activity-chart-title'>Activité quotidienne</h2>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart  data={dataActivity} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
        <CartesianGrid vertical={false} height={1} strokeDasharray={3}/>
        <XAxis dataKey="day" tickFormatter={transformDateToDay} axisLine={false} tickLine={false} tickMargin={15}/>
        <YAxis dataKey="calories" yAxisId='left' orientation='left' hide={true} domain={[0,'auto']}/>
        <YAxis dataKey="kilogram" yAxisId='right' orientation='right' axisLine={false} tickLine={false} width={45} tickCount={3} type='number' domain={['dataMin-1', 'dataMax']}/>
        <Tooltip content={customToolTip}/>
        <Legend verticalAlign='top' align='right' height={50} iconType='circle' iconSize={8} formatter={renderTextLegend}/>
        <Bar name='Poids (kg)' dataKey='kilogram' yAxisId='right' fill="#282D30" barSize={7} radius={ [3, 3, 0, 0]}/>
        <Bar className='legend-item-text' name='Calories brûlées (kCal)' dataKey='calories' yAxisId='left' fill="#E60000" barSize={7} radius={ [3, 3, 0, 0] }/>
      </BarChart>
    </ResponsiveContainer>    
  </div>
      
  )
}

export default Activity