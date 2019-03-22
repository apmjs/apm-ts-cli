import * as path from 'path';
import * as readline from 'readline2';

interface IProgram{
    action: string;
    project?: string;
    path?: string;
}

/**
 * 返回命令行收集的信息IProgram
 */
export default async function parser(argv: string[], cwd: string) {
    const program: IProgram = {
        action: argv[2],
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

    }

    return program;
}

/**
 * 确定ProjectName
 */
async function confirmProjectName(project: string) {
    const key = await read(`Project Name [${project}] ? (Y/N) `);
    return (key.toUpperCase() === 'Y' || key.toUpperCase() === 'YES');
}

function read(info: string) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise<string>((resolve) => {
        rl.question(info, (key: string) => {
            rl.close();
            resolve(key);
        });
    });
}