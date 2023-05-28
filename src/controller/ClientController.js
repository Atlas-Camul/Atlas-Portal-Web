

//import {} from '../databaseConnect/UserCrud';
/*export async function AddClient(clientName, clientEmail, clientPhone, clientPassword)
{
    //insertUser(clientName, clientEmail, clientPhone, clientPassword);
}*/


//-----------------------------parte que eu criei-------------------------------------------------
import { hash } from 'bcryptjs';
const { generateToken, comparePassword } = require('../auth'); 


// Resto do seu código
// ...
// Função para registrar um novo cliente
async function registerClient(req, res) 
{
  const { name, email, password } = req.body;
  const newClient = {name, email, password};

  try {
    // Verifique se o cliente já está registrado no banco de dados
    
     const userRepository = getRepository(User);
     const user = await userRepository.findOne(email);

    if (!user)
    {
        // Se o cliente não existir, crie uma hash da senha antes de armazená-la
        const hashedPassword = await hashPassword(password, 8);
        // Salve o cliente no banco de dados
       
        export async function AddClient(clientName, clientEmail, /*clientPhone,*/ clientPassword)
            {
                //insertUser(clientName, clientEmail, /*clientPhone,*/ clientPassword: hashPassword);
            }

                // Gere um token JWT para o cliente recém-registrado
                const token = generateToken(newClient);

               // Envie a resposta com o token
                res.status(200).json({ token });

     
    }
     res.status(400).json({ error: 'Client already exists' });
      
  } catch (error) {
    // Lida com erros de registro
    res.status(500).json({ error: 'Failed to register client' });
  }
}

// Função para autenticar um cliente
async function authenticateClient(req, res) {
  const { email, password } = req.body;

  try {
    // Verifique se o cliente existe no banco de dados
     const userRepository = getRepository(User);
     const user = await userRepository.findOne(email);

    if (!user) 
    {
      
        // Compare a senha fornecida com a senha armazenada no banco de dados
        const isPasswordMatch = await comparePassword(body.password, user.password);
         if (!isPasswordMatch) 
         {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
         }
             // Gere um token JWT para o cliente autenticado
             const token = generateToken(storedClient);

             // Envie a resposta com o token
             res.status(200).json({ token });

    }

    
            res.status(401).json({ error: 'Invalid credentials' });
   
    
  } catch (error) {
            // Lide com erros de autenticação
            res.status(500).json({ error: 'Authentication failed' });
  }
}

            module.exports = { registerClient, authenticateClient };
