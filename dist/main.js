"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const Packageroutes_1 = __importDefault(require("./routes/Packageroutes")); // Ensure this is the correct path
const app = (0, express_1.default)();
// Middleware to parse incoming JSON data
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
// Use the employee routes in your app
app.use("/api", Packageroutes_1.default);
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'homepage.html')); // Serve the HTML file
});
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// Set the port and start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
