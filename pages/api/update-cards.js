import axios from 'axios'
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      const result = await axios.post(`${baseUrl}/cards/collection`, data)
      res.status(200).json(result.data);
    } catch (e) {
      console.log(e)
      res.status(e.response.data.code).json(e.response.data);
    }
  }
}
