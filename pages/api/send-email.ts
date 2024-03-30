import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != 'POST') {
    return res.status(400).json("Method not allowed");
  } 

  const { data, error } = await resend.emails.send({
    from: 'AK63 <onboarding@resend.dev>',
    to: ['abhishek.mnnit.mca2k22@gmail.com'],
    subject: 'EMail from AK63 Contact Us',
    react: EmailTemplate({ name: req.body.name, email: req.body.email, message: req.body.message }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
