import mockupData from './data.json'
async function searchByName(query) {
  const lowerCaseQuery = query.toLowerCase();
  return await mockupData.filter(item => item.name.toLowerCase().includes(lowerCaseQuery));
}
export { searchByName };