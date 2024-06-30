import React, { useState, useEffect } from 'react';

const CustomerForm = ({ onAdd, onUpdate, editingCustomer }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (editingCustomer) {
      setId(editingCustomer.id);
      setName(editingCustomer.name);
    }
  }, [editingCustomer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCustomer) {
      onUpdate({ id, name });
    } else {
      onAdd({ id, name });
    }
    setId('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit">{editingCustomer ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default CustomerForm;
