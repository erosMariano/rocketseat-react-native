export function formatDate(date: string) {

  const dateFormatted = new Date(date);
  const day = String(dateFormatted.getDate()).padStart(2, '0');
  const month = String(dateFormatted.getMonth() + 1).padStart(2, '0');
  const year = String(dateFormatted.getFullYear()).slice(-2);
  
  return `${day}.${month}.${year}`;
}

export const formatDateNewStack = (text: string) => {
  let formattedDate = text.replace(/\D/g, ''); // Remove caracteres não numéricos

  if (formattedDate.length > 2 && formattedDate.length <= 4) {
    formattedDate = formattedDate.replace(/^(\d{2})(\d{0,2})/g, '$1/$2');
  } else if (formattedDate.length > 4) {
    formattedDate = formattedDate.replace(/^(\d{2})(\d{2})(\d{0,4})/g, '$1/$2/$3');
  }
  return formattedDate;
};
