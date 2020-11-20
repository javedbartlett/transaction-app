import axios from "axios";
import find from "lodash.find";

export default async function handler(req, res) {
  const result = await axios(
    `https://m1-production-client-assets.s3.amazonaws.com/project-data/transactions-v1.json`
  );
  const {
    query: { id },
  } = req;
  const transactions = result.data.transactions;
  const transaction = find(transactions, (t) => t.id == id);
  res.json(transaction);
}
