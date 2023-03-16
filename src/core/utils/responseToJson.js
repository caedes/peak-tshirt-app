export default async function responseToJson(response) {
  let data;

  try {
    data = await response.json();
  } catch (error) {
    data = {};
  }

  return data;
}
