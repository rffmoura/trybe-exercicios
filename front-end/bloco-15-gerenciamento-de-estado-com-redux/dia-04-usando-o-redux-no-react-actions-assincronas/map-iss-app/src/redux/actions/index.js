export const RECEIVE_ISS_LOCATION = 'RECEIVE_ISS_LOCATION'

//1) action inicial
// a action precisa retornar um objeto, por isso temos uma função (action creator)
export const receiveIssLocation = () => ({
  type: RECEIVE_ISS_LOCATION,
  latitude: -21.75128,
  longitude: -41.33169,
})