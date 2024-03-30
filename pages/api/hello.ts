import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello from Next.js Get Request!' })
}else if (req.method === 'POST') {
    res.status(200).json({ message: 'Hello from Next.js Post Request!' })
} else {
    // Handle any other HTTP method
  }
}