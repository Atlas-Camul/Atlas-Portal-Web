import {} from '../src/database/entities/User';
//const User = require('../src/database/entities/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = 'seu_secret_key_aqui'; // Chave secreta para assinar os tokens JWT

const inputPassword = "senha de entrada";
const storedPassword = "senha armazenada";

const user = new User(req.body);

// Função para criar um token JWT

function generateToken(user) 
{
  return jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
}

// Função para comparar a senha fornecida com a senha armazenada no banco de dados

async function comparePassword(inputPassword, storedPassword) 
{
  return await bcryptjs.compare(inputPassword, storedPassword);
}

module.exports = { generateToken, comparePassword };






//-------------------------------------------------------------------------------------

// Teste de autenticação
async function testAuthentication() {
  const password = 'senha123'; // Senha a ser testada
  const hashedPassword = await hashPassword(password); // Gerar hash da senha

  console.log('Senha original:', password);
  console.log('Senha hasheada:', hashedPassword);

  const isMatch = await comparePassword(password, hashedPassword); // Comparar senha

  if (isMatch) {
    console.log('As senhas coincidem. Autenticação bem-sucedida!');
  } else {
    console.log('As senhas não coincidem. Autenticação falhou!');
  }
}

// Chamar a função de teste de autenticação
testAuthentication().catch((error) => console.error('Erro no teste de autenticação:', error));
