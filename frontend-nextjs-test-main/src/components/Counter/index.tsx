// Counter.tsx

import React, { useState, useEffect } from 'react';

type CounterProps = {
  initialCount: number;
  onCounterUpdate: (updatedCount: number) => void;
};

export const Counter: React.FC<CounterProps> = ({ initialCount, onCounterUpdate }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    onCounterUpdate(count); // Dispara onCounterUpdate quando o componente é montado
    console.log('Componente montado!');

    return () => {
      console.log('Componente desmontado!');
    };
  }, []);

  useEffect(() => {
    onCounterUpdate(count); // Dispara onCounterUpdate quando o componente é atualizado
    console.log('Componente atualizado!');
  }, [count, onCounterUpdate]);

  const handleIncrement = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);

    if (updatedCount === 10) {
      // Dispara onCounterUpdate e desmonta o componente quando o valor chega a 10
      onCounterUpdate(updatedCount);
      window.dispatchEvent(new CustomEvent('onCounterUnmount'));
    }
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar +</button>
    </div>
  );
};
