import React, { useState } from 'react';
import Contact from './Contact';

interface IContact {
  name: string,
  email: string
}

const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact)
  const [contactList, setContactList] = useState<IContact[]>([])

  const handleAdd = () => {
    setContactList([...contactList, contact]);
    setContact({
      name: "",
      email: ""
    })
  }

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setContact({...contact, [e.target.name]: e.target.value})
  }

  const handleRemove = (email: string) =>{
    const newContactList = contactList.filter(c => c.email !== email)
    setContactList(newContactList)
  }

  return (
    <div>
      <h1>Contact Name</h1>
      <div>
        <input
          value={contact.name}
          onChange={onChange}
          name="name"
          placeholder="Contact Name"
          type="text" required />
        <input
          value={contact.email}
          onChange={onChange}
          name="email"
          placeholder="Contact Email"
          type="email" required />
        <button className="btn btn-primary" onClick={handleAdd}>Add</button>
      </div>
      {
        contactList.map((con) => <Contact name={con.name} email={con.email} key={con.email} handleRemove={handleRemove} />
        )
      }

      {/* <Contact name="Abdul Mozid Fahim" email="abdulmozidfahim1@gmail.com" />
      <Contact name="someone" email="someone1@gmail.com" /> */}
    </div>
  );
};

export default Contacts;