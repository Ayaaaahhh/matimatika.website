import React, { useState } from 'react';

const FormulaInput = ({ onSubmit }) => {
  const [formula, setFormula] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formula);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={formula} 
        onChange={(e) => setFormula(e.target.value)} 
        placeholder="Enter mathematical formula" 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormulaInput;
