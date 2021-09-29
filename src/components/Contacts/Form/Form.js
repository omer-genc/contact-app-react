import React, { useEffect } from 'react'
import { useState } from 'react'

const initialFormValue = { full_name: "", phone_number: "" };


function Form({ addContact, contacts }) {
    const [form, setForm] = useState(initialFormValue)

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }

    useEffect(() => {
        setForm(initialFormValue);

    }, [contacts])

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.full_name === "" || form.phone_number === "")
            return false;
        addContact([...contacts, form])
    }


    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name="full_name" placeholder="Full Name" onChange={onChangeInput} value={form.full_name} />
            </div>
            <div>
                <input name="phone_number" placeholder="Phone Number " onChange={onChangeInput} value={form.phone_number} />
            </div>
            <div>
                <button>Add</button>
            </div>

        </form>
    )
}

export default Form
