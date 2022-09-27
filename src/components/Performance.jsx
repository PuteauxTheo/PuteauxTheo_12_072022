import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";


   

function Perfomance( { dataPerformance } ) {

  const reverseData = (array) =>{
    const reverseDataArray = [];
    for(let i = array.length - 1; i>= 0; i--){
      reverseDataArray.push(array[i]);
    }

    return reverseDataArray;
  }

  const dataReversed = reverseData(dataPerformance)

  /**
   * Get the name of categorie 
   * @param {number} kind 
   * @returns performance name in french
   */
  const performanceCategories = (kind) =>{
    switch (kind) {
      case 1: return 'Cardio';
      case 2: return 'Energie';
      case 3: return 'Endurance';
      case 4: return 'Force';
      case 5: return 'Vitesse';
      case 6: return 'Intensité';
      default: return null;
    }
  } 

  return (
    <div className="performance">
      <div className="performance-chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="65%" data={dataReversed} >
              <PolarGrid radialLines={false}/>
              <PolarAngleAxis dataKey='kind' tickFormatter={performanceCategories} fontFamily={'Roboto'} fontSize={12} stroke="#fff" tickLine={false}/>
              <Radar dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6}/>
          </RadarChart>
        </ResponsiveContainer>
      </div>  
    </div>
           
  )
}

export default Perfomance