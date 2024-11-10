/**
 * Formata um número como uma string de preço em reais (BRL).
 * @param amount O valor numérico a ser formatado.
 * @param currency A moeda a ser usada na formatação, por padrão "BRL".
 * @param locale A localidade para a formatação, por padrão "pt-BR".
 * @returns O valor formatado como uma string de moeda.
 */
export function formatPrice(
  amount: number,
  currency: string = "BRL",
  locale: string = "pt-BR"
): string {
  return amount.toLocaleString(locale, {
    style: "currency",
    currency,
  });
}
