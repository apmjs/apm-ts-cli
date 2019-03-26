/*
 * @Author: qiansc 
 * @Date: 2019-03-26 14:37:55 
 * @Last Modified by: qiansc
 * @Last Modified time: 2019-03-26 14:59:02
 */
import * as fs from 'fs';
import { question } from './cmd';

export async function isEmptyFloder(path: string) {
    if(!fs.existsSync(path)) {
        return true;
    }
    const info = fs.readdirSync(path);
    if (info.length === 0) {
        return true;
    }
    if((await question(`Floder ${path} is not empty! continue? (Y/N) `)).toUpperCase() !== "Y") {
        console.log('Exit...');
        process.exit();
        return false;
    }
}
