import * as path from 'path';
import { question } from './cmd';

interface IProgram{
    action: string;
    project: string;
    path: string;
}

/**
 * 返回命令行收集的信息IProgram
 */
export default async function parser(argv: string[], cwd: string) {
    const program: IProgram = {
        action: argv[2],
        project: '',
        path: '',
    };
    // init 的辅助参数
    if (argv[3]) {
        program.path = path.resolve(cwd, argv[3]);
    } else {
        program.path = path.resolve(cwd);
    }
    program.project =  path.basename(program.path);


    console.log(`Install path - ${program.path}`);
    // console.log(`Project name - ${program.project}`);

    if (await confirmProjectName(program.project)) {
        return program;
    } else {
        program.project = await enterNewProjectName();
        if (!await confirmProjectName(program.project)) {
            // 如果还不能确认那就结束进程
            console.log('Exit..');
            process.exit();
        }
    }
    return program;
}

/**
 * 确定ProjectName
 */
async function confirmProjectName(project: string) {
    const key = await question(`Project Name [${project}] ? (Y/N) `);
    return (key.toUpperCase() === 'Y' || key.toUpperCase() === 'YES' || key === '');
}

/**
 * 输入新ProjectName
 */
async function enterNewProjectName() {
    const key = await question(`Enter New Project Name ?`);
    return key;
}

