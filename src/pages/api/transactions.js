import axios from "axios";

export default async function handler(req, res) {
    const result = await axios(`https://m1-production-client-assets.s3.amazonaws.com/project-data/transactions-v1.json`);
    res.json(result.data);
}
