import React, { useState } from 'react';
import Contact from './Contact';

const Contacts = () => {
  const [contact, setContact] = useState("")
  const [contactList, setContactList] = useState<string[]>([])

  const handleAdd = () => {
    setContactList([...contactList, contact]);
    setContact("")
  }
  // console.log('contactList', contactList)


  return (
    <div>
      <h1>Contact Name</h1>
      <div>
        <input
          onChange={(e) => setContact(e.target.value)}
          name="name"
          placeholder="Contact Name"
          type="text" />
        <button className="btn btn-primary" onClick={handleAdd}>Add</button>
      </div>
      {
        contactList.map((contactName) => <Contact name={contactName} key={contactName} />
        )
      }

      {/* <Contact name="Abdul Mozid Fahim" email="abdulmozidfahim1@gmail.com" />
      <Contact name="someone" email="someone1@gmail.com" /> */}
    </div>
  );
};

export default Contacts;