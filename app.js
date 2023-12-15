"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'website')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'website', 'index.html'));
});
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});