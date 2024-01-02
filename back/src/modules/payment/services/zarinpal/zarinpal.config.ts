export const CREATE_GATEWAY_URL =
  'https://api.zarinpal.com/pg/v4/payment/request.json';

export const VERIFY_PAYMENT_URL =
  'https://api.zarinpal.com/pg/v4/payment/verify.json';

export const getMerchantId = () => 'ebfbb319-f0fb-4052-8379-951bd8124150';

export const getGatewayLink = (authority: string) =>
  `https://www.zarinpal.com/pg/StartPay/${authority}`;
