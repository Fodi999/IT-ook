"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = __importDefault(require("path"));
var router = (0, express_1.Router)();
router.get('/news', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../views/news.html'));
});
exports.default = router;
