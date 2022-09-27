import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function KPI( {dataKPI} ) {
    
    function todayScoreFormat(data) {
        if(data.score){
            data.todayScore = data.score
            return data
        }
    }
    todayScoreFormat(dataKPI);

    /**
     * render todayScore in percent 
     */
    const percentScore = dataKPI.todayScore * 100 ;

    return (
        <div className='kpi'>
            <div className='kpi-chart'>
                <h3 className='title-chart'>Score</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart startAngle={90} endAngle={450} /*cx={130} cy={130}*/ innerRadius={100} radius={10} barSize={10} data={[dataKPI]}>
                        <RadialBar fill='#ff0000'  background cornerRadius={150} dataKey='todayScore' />
                        <PolarAngleAxis type='number' domain={[0, 1]} tick={false} />
                    </RadialBarChart>
                </ResponsiveContainer>
                
                <div className='kpi-chart-text'>
                    <p className='kpi-chart-text-percent'>{percentScore}%</p>
                    <p className='kpi-chart-text-name'>de votre objectif</p>
                </div>
            </div>
        </div>
        
    )
}

export default KPI