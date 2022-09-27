import { USER_MAIN_DATA , USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../dataMock/mock.js'

/**
 * Get the main data of user from mock data 
 * @param {string} id user Id
 * @returns main data
 */
function getUserMainData(id){
    const data = USER_MAIN_DATA.find( value => value.id.toString() === id );
    const mainData = {data}
    return mainData;
}

/**
 * Get the activity data of user from mock data
 * @param {string} id user Id
 * @returns activity data
 */
function getUserActivity(id){
    const data = USER_ACTIVITY.find( value => value.userId.toString() === id)
    const dataActivity = {data}
    return dataActivity;
}

/**
 * Get the average-session data of user from mock data
 * @param {string} id user Id
 * @returns average-sessions data
 */
function getUserAverageSessions(id){
    const data = USER_AVERAGE_SESSIONS.find( value => value.userId.toString() === id)
    const dataAverageSession = {data}
    return dataAverageSession;
}

/**
 * Get the performance data of user from mock data
 * @param {string} id user Id
 * @returns performace data
 */
function getUserPerformance(id){
    const data = USER_PERFORMANCE.find( value => value.userId.toString() === id)
    const dataPerformance = {data};
    return dataPerformance;
}

/**
 * Get data of user according to categorie selected
 * @param {string} id user Id
 * @param {string} categorie categorie selected
 * @returns mock data who match with categorie
 */
const getData = async (id, categorie) => {
    switch (categorie) {
        case 'activity': return getUserActivity(id);
        case 'average-sessions': return getUserAverageSessions(id);
        case 'performance': return getUserPerformance(id);
        default: return getUserMainData(id);
    }
}

export default getData