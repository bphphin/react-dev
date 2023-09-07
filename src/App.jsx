import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
function App() {
    const [formData, setFormData] = useState({
        id: null,
        name: "",
        address: "",
        date: "",
        conduct: "",
    });
    const [users, setUsers] = useState([]);
    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        if (formData.id) {
            const newUser = users.map((item) =>
                item.id === formData.id ? formData : item
            );
            setUsers(newUser);
        } else {
            formData.id = Date.now();
            setUsers([...users, formData]);
        }
        setFormData({
            id: null,
            name: "",
            address: "",
            date: "",
            conduct: "",
        });
    };

    const handleDelete = (id) => {
        const newUsers = users.filter((item) => item.id !== id);
        setUsers(newUsers);
    };

    const handleUpdate = (user) => {
        setFormData(user);
    };

    return (
        <>
            <Form
                formData={formData}
                handleSubmit={handleSubmit}
                handleFormData={handleFormData}
            />
            <Table
                data={users}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
            />
        </>
    );
}

export default App;
