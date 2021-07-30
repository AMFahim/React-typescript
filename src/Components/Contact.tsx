import React from 'react';

interface IProps {
  name: string,
  email?: string
}

const Contact = ({ name, email="N/A" }: IProps) => {
  return (
    <div className="pt-3">
      <div className="card p-3">
        <p>
          <strong>Name: </strong> {name}
        </p>
        <p>
          <strong>Email: </strong> {email}
        </p>
      </div>
    </div>
  );
};

export default Contact;