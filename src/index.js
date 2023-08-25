//index.js
import roteadorLogin from "./routes/login.js";
import dotenv from "dotenv";
import express from "express";      // Requisição do pacote do express
dotenv.config();
import roteadorUsuario from "./routes/usuario.js";

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

//"um trem que acontece no meio" - Porto, Arthur 
app.use(express.json());
app.use(roteadorUsuario);
app.use(roteadorLogin);

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    message: "API para CRUD usuario:https://github.com/AlexiaDiasB",  
  });
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});