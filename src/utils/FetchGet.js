export const FetchGet = async (urlWithParams = "") => {
  const result = await fetch(urlWithParams)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err)
      return []
    });

  
  return result;
};
