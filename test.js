const { generateToken, comparePassword } = require('./auth');

async function testAuthentication() {
  // Teste de registro
  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const password = 'password123';

  // Simule a chamada da função de registro
  try {
    const token = generateToken({ name, email });
    console.log('Registro bem-sucedido. Token gerado:', token);
  } catch (error) {
    console.error('Erro ao registrar:', error);
  }

  // Teste de autenticação
  const loginEmail = 'johndoe@example.com';
  const loginPassword = 'password123';

  // Simule a chamada da função de autenticação
  try {
    // Compare a senha fornecida com a senha armazenada (simulada)
    const isPasswordMatch = await comparePassword(loginPassword, storedPassword);

    if (!isPasswordMatch) {
      console.log('Credenciais inválidas');
      return;
    }

    const token = generateToken({ name, email });
    console.log('Autenticação bem-sucedida. Token gerado:', token);
  } catch (error) {
    console.error('Erro ao autenticar:', error);
  }
}

// Chame a função de teste
testAuthentication();
