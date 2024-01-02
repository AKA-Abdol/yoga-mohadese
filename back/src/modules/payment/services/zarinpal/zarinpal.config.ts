export const CREATE_GATEWAY_URL =
  'https://api.zarinpal.com/pg/v4/payment/request.json';

export const VERIFY_PAYMENT_URL =
  'https://api.zarinpal.com/pg/v4/payment/verify.json';

export const MERCHANT_ID = process.env.ZARINPAL_MERCHANT_ID ?? '';

export const getGatewayLink = (authority: string) =>
  `https://www.zarinpal.com/pg/StartPay/${authority}`;
