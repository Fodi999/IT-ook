"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//server.ts
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./routes/index"));
var about_1 = __importDefault(require("./routes/about"));
var business_1 = __importDefault(require("./routes/business"));
var news_1 = __importDefault(require("./routes/news"));
var login_1 = __importDefault(require("./routes/login"));
var register_1 = __importDefault(require("./routes/register"));
var app = (0, express_1.default)();
var PORT = 3000;
// Middleware to serve static files
app.use(express_1.default.static(path_1.default.join(__dirname, '../')));
// Routes
app.use('/', index_1.default);
app.use('/', about_1.default);
app.use('/', business_1.default);
app.use('/', news_1.default);
app.use('/', login_1.default);
app.use('/', register_1.default);
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
