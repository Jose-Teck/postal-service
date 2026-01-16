import bodyParser from "body-parser";
import path from 'path';
import express from "express";

import employeeRoutes from "./routes/Packageroutes";  // Ensure this is the correct path

const app = express();

// Middleware to parse incoming JSON data
app.use(bodyParser.json());
app.use(express.json());

// Use the employee routes in your app
app.use("/api", employeeRoutes);

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public', 'homepage.html')); // Serve the HTML file
  
})
app.use(express.static(path.join(__dirname, "public")));


// Set the port and start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
