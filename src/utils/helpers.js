export const addDataToLocalStorage = data => localStorage.setItem('to-do-items', JSON.stringify(data));

export const getDataFromLocalStorage = () => localStorage.getItem('to-do-items');
