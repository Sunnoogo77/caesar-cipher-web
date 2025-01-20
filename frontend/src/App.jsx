import React from 'react';
import CaesarForm from './components/CaesarForm';

function App() {
  return (//backgoudcolor bleu foncé
    <div className='text-3xl font-bold bg-slate-600 '>
      <h1>Application de chiffrement César</h1>
      <CaesarForm />
    </div>
  );
}

export default App;
