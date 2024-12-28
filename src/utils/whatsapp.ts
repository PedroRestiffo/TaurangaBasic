export function generateWhatsAppUrl(items: Array<{ name: string; quantity: number; selectedSize: string; price: number }>, total: number): string {
  const phoneNumber = '5491112345678'; // Replace with actual phone number
  
  const message = `¡Hola! Me gustaría comprar:\n\n${items
    .map(item => `- ${item.quantity}x ${item.name} (Talle ${item.selectedSize}) - $${item.price.toLocaleString()}`)
    .join('\n')}\n\nTotal: $${total.toLocaleString()}`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}