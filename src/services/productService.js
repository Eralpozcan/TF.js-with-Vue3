import mockupData from './data.json'
function searchByName(query) {
  const lowerCaseQuery = query.toLowerCase();
  return mockupData.filter(item => item.name.toLowerCase().includes(lowerCaseQuery));
}
export { searchByName };