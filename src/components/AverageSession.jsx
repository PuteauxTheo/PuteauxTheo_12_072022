import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";



function AverageSession( { dataAverageSession }) {

  /**
   * Create ToolTip chart
   * @param {array} paylaod data
   * @param {boolean} active ToolTip active 
   * @returns content when hover the chart
   */
  function customToolTip({ active, payload}){
    if(active && payload && payload.length){
      return (
        <div className="averagesession-custom-tooltip">
          <p className="averagesession-custom-tooltip-text">{payload[0].value} min</p>
        </div>
      )
    }
  }
  /**
   * Matching the day with the first letter of the day 
   * @param {number} day day of the week
   * @returns first character of the day 
   */
  function numberDayInLetter(day){
    switch(day){
      case 1 : return "L";
      case 2 : return "M";
      case 3 : return "M";
      case 4 : return "J";
      case 5 : return "V";
      case 6 : return "S";
      case 7 : return "D";
      default : return null;

    }
  }
  return (
    <div className="averagesession">
      <div className="averagesession-chart">
        <h2 className="averagesession-chart-title">Durée moyenne des sessions</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart  data={dataAverageSession} margin={{ top:100, left:10, right:10, bottom:10}}>          
              <Line dot={false} type="natural" dataKey="sessionLength" stroke='rgb(255,255,255,0.5)' strokeWidth={2} />
              <Tooltip cursor={false}content={customToolTip}/>
              <XAxis dataKey="day" tickFormatter={numberDayInLetter} axisLine={false} tickLine={false} tickMargin={10} stroke='rgb(255,255,255,0.5)' label={{fontSize: 12 , fontWeight: 500}}/>
          </LineChart>
        </ResponsiveContainer>      
      </div>
    </div>
    
      
  )
}

export default AverageSession