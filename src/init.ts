import parser from './parser';

export default async function init(argv: string[], cwd: string) {
    const program = await parser(argv, cwd);
    console.log(program);
    // console.log(argv, cwd);
}