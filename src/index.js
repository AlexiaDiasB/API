//index.js
import dotenv from "dotenv";
import express from "express";      // Requisição do pacote do express
import roteadorUsuario from "./routes/usuario.js";
dotenv.config();

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

//"um trem que acontece no meio" - Porto, Arthur 
app.use(express.json());
app.use(roteadorUsuario);

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    message: "API para CRUD usuario: link_gitgub",  
  });
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});