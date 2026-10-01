import { useState } from 'react';

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => setEndereco(data));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Buscar CEP</h1>

      <input 
        type="text" 
        placeholder="Digite o CEP" 
        value={cep} 
        onChange={(e) => setCep(e.target.value)} 
      />
      
      <br /><br />
      <button onClick={buscarCep}>Buscar</button>

      {endereco && (
        <div style={{ marginTop: '20px' }}>
          <p><b>CEP:</b> {endereco.cep}</p>
          <p><b>Rua:</b> {endereco.logradouro}</p>
          <p><b>Bairro:</b> {endereco.bairro}</p>
          <p><b>Cidade:</b> {endereco.localidade}</p>
          <p><b>Estado:</b> {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}