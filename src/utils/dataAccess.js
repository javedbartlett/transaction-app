import axios from 'axios';
import find from "lodash.find";

export const fetchTransactions = async () => {
    const result = await axios(`/api/transactions`);
    return result?.data.transactions;
}

export const findTransaction = async (id) => {
    const transactions = await fetchTransactions();
    return find(transactions, t => t.id == id);
}
