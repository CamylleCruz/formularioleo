import React from 'react';
import './App.css'

function App(){
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [cpf, setCPF] = React.useState('');



  const handleSubmit = (event) => {
    event.preventDefault()  //impede o comportamento padrão de recarregar a página ao clicar no botão.
  
    alert(`Nome: ${nome}, Email: ${email}, Sobrenome: ${sobrenome}, Senha: ${sobrenome}, CPF: ${cpf}`)
    // alert manda mensagem de'erro'
  };

  return (

    <form onSubmit = {handleSubmit}>
      <h1>Forms</h1>


      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" id="nome" value={nome}
      onChange={(e) => setNome(e.target.value)} />
      <br />


      <label htmlFor="sobrenome">Sobrenome:</label>
      <input type="text" name="sobrenome" id="sobrenome" value={sobrenome}
      onChange={(e) => setSobrenome(e.target.value)} />
      <br />

      <label htmlFor="spf">CPF:</label>
      <input type="text" name="cpf" id="cpf" value={cpf}
      onChange={(e) => setCPF(e.target.value)} />
      <br />


      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email" value={email}
      onChange={(e) => setEmail(e.target.value)} />
      <br />

      <label htmlFor="senha">Senha:</label>
      <input type="password" name="senha" id="senha" value={senha}
      onChange={(e) => setSenha(e.target.value)} />
      <br />

      <div className = 'check'>
      <input type="checkbox" name="checkbox" id="check" />
      <label htmlFor="checkbox"> Você aceita nossos termos?</label>
    </div>
      

      <button type="submit">Enviar</button>


</form>
  );

}


export default App;