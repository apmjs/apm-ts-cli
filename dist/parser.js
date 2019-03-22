"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const readline = require("readline2");
/**
 * 返回命令行收集的信息IProgram
 */
function parser(argv, cwd) {
    return __awaiter(this, void 0, void 0, function* () {
        const program = {
            action: argv[2],
        };
        // init 的辅助参数
        if (argv[3]) {
            program.path = path.resolve(cwd, argv[3]);
        }
        else {
            program.path = path.resolve(cwd);
        }
        program.project = path.basename(program.path);
        console.log(`Install path - ${program.path}`);
        // console.log(`Project name - ${program.project}`);
        if (yield confirmProjectName(program.project)) {
            return program;
        }
        else {
        }
        return program;
    });
}
exports.default = parser;
/**
 * 确定ProjectName
 */
function confirmProjectName(project) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = yield read(`Project Name [${project}] ? (Y/N) `);
        return (key.toUpperCase() === 'Y' || key.toUpperCase() === 'YES');
    });
}
function read(info) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        rl.question(info, (key) => {
            rl.close();
            resolve(key);
        });
    });
}
