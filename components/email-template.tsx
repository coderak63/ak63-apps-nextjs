import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: <a href={"mailto:"+email}>{email}</a></p>
    <p>Message:</p>
    <p>{message}</p>
  </div>
);
