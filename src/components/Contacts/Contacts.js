import React from 'react'
import Form from './Form'
import List from './List'
import { useState, useEffect } from 'react'

function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts)
        
    }, [contacts])
    return (
        <>
            <List contacts={contacts}></List>
            <Form addContact={setContacts} contacts={contacts}></Form>
        </>

    )
}

export default Contacts
