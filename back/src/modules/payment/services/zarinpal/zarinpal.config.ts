export const CREATE_GATEWAY_URL =
  'https://api.zarinpal.com/pg/v4/payment/request.json';

export const getGatewayLink = (authority: string) =>
  `https://www.zarinpal.com/pg/StartPay/${authority}`;
