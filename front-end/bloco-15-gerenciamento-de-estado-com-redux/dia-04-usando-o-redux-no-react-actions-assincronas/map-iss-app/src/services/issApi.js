const ISS_URL = 'http://api.open-notify.org/iss-now.json'

export const getCurrentIssLocation = async () => {
  const response = await fetch(ISS_URL); // await retorna uma promise
  const responseJson = response.json(); // também é uma promise

  return responseJson;
}