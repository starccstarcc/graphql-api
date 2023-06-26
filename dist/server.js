"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express = require("express");
const schemasMap_1 = __importDefault(require("./graphql/schemasMap"));
const db_1 = __importDefault(require("./db"));
const api = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.default)();
    const app = express();
    const server = new apollo_server_express_1.ApolloServer({
        schema: schemasMap_1.default,
    });
    server.applyMiddleware({ app });
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is runnig at http://localhost:${PORT}`);
    });
});
api();
//# sourceMappingURL=server.js.map