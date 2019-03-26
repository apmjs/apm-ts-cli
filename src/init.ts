import parser from './parser';
import { isEmptyFloder } from './validate';
import { untar } from './cmd';
import * as path from 'path';
import * as replace from 'replace-in-file';
const config = require('../package.json');

export default async function init(argv: string[], cwd: string) {
    const program = await parser(argv, cwd);
    await isEmptyFloder(program.path);
    const file = path.resolve(__dirname, '../dist/gulp.zip');
    await untar(file, program.path);
    await replace({
        files: `${program.path}/*`,
        from: /\{\{\$tittle\}\}/g,
        to: program.project,
    });
    await replace({
        files: `${program.path}/README.md`,
        from: /\{\{\$version\}\}/g,
        to: config.version,
    });

    console.log(`Successful complete!`);
}