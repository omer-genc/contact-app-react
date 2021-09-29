import React from 'react'
import { useState } from 'react';



function List({ contacts }) {
    const [filterText, setfilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            {return item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())})

    })
    return (
        <div>
            <input
                placeholder="Filter Contact"
                value={filterText}
                onChange={(e) => setfilterText(e.target.value)}></input>
            <ul>
                {
                    filtered.map((contact, index) => (
                        <li key={index}>{contact.full_name + " " + contact.phone_number}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List
