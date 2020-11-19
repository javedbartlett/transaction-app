import axios from 'axios';
import find from "lodash.find";

export const fetchTransactions = async () => {
    const result = await axios(`https://cors-anywhere.herokuapp.com/https://m1-production-client-assets.s3.amazonaws.com/project-data/transactions-v1.json`);
    return result?.data.transactions;
}

export const findTransaction = async (id) => {
    const transactions = await fetchTransactions();
    return find(transactions, t => t.id == id);
}


