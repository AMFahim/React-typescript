import React from 'react';

interface IProps {
  name: string,
  email?: string,
  handleRemove: (email: string) => void 
}

const Contact = ({ name, email="N/A", handleRemove }: IProps) => {
  return (
    <div className="pt-3">
      <div className="card p-3">
        <p>
          <strong>Name: </strong> {name}
        </p>
        <p>
          <strong>Email: </strong> {email}
        </p>
        <button onClick={() => handleRemove(email)} className="btn btn-danger">Remove</button>
      </div>
    </div>
  );
};

export default Contact;