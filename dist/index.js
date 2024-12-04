"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const page_1 = require("./page");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.static("dist"));
app.get("/", (req, res) => {
    res.send((0, page_1.generateHTML)());
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map