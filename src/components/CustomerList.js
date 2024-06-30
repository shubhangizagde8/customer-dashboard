import React, { useState, useEffect } from 'react';
import { getCustomers, addCustomer, deleteCustomer, updateCustomer } from '../services/customerService';
import CustomerForm from './CustomerForm';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  const handleAdd = async (customer) => {
    await addCustomer(customer);
    loadCustomers();
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    loadCustomers();
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
  };

  const handleUpdate = async (customer) => {
    await updateCustomer(customer);
    loadCustomers();
    setEditingCustomer(null);
  };

  return (
    <div>
      <h3>Customer List</h3>
      <CustomerForm onAdd={handleAdd} onUpdate={handleUpdate} editingCustomer={editingCustomer} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>
                <button onClick={() => handleEdit(customer)}>Edit</button>
                <button onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
