import axios from 'axios';

export const fetchTransactions = async () => {
    const result = await axios(`/api/transactions`);
    return result?.data.transactions;
}

export const findTransaction = async (id) => (await axios(`/api/transaction/${id}`)).data;
