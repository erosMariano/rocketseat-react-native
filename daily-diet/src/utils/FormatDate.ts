export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("pt-br").format(date).replaceAll("/", ".");
}

export const formatDateNewStack = (text: string) => {
  // Remove caracteres não numéricos da entrada
  let cleanedText = text.replace(/\D/g, "");

  // Adiciona as barras na formatação da data
  if (cleanedText.length > 2) {
    cleanedText = `${cleanedText.slice(0, 2)}/${cleanedText.slice(2)}`;
  }
  if (cleanedText.length > 5) {
    cleanedText = `${cleanedText.slice(0, 5)}/${cleanedText.slice(5)}`;
  }

  return cleanedText;
};