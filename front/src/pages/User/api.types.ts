export default interface IPaymentResult {
  id: string;
  gateway: "zarinpal";
  status: "failed" | "successful";
  amount: number;
  transactionNo: number;
  maskedCardNo: string;
  createdAt: string;
  updateAt: string;
}
