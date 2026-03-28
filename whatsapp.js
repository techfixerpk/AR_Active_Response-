
export const sendWhatsAppMessage = (itemOrService) => {
  const phoneNumber = '923472241304';
  const message = `Hello AR (Active Response) Care, I am interested in: ${itemOrService}. Please provide details regarding availability and pricing.`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};
