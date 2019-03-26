/*
 * @Author: qiansc 
 * @Date: 2019-03-26 14:35:04 
 * @Last Modified by: qiansc
 * @Last Modified time: 2019-03-26 16:58:58
 */
import * as readline from 'readline2';
import * as unzip from 'unzip';
import * as fs from 'fs';
import { resolve } from 'path';

export function question(info: string) {
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

export async function untar(file: string, path: string){
    return new Promise(resolve => {
        const zip = unzip.Extract({ path: path});
        fs.createReadStream(file).pipe(zip);
        zip.on('finish', () => {
            process.nextTick(() => {
                console.log('Finish Unzip...');
                setTimeout(() => {
                    resolve();
                }, 300);
            });
        });
    });

}