export const FetchPost = async (url = "", data = {}) => {
  const POST = "POST";
  const rawResponse = await fetch(url, {
    method: POST,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((dataJson) => {
      return dataJson.json() ;
    })
    .catch((err) => {
      console.log(err);
      return { data: {} };
    });

  const result = await rawResponse;

  return result;
};
