import { sum, substrin } from './function.js';
import {readFile, writeFile,appendFile} from 'fs/promises';

sum(10,20)
substrin(30,40)

const readFileContent = async(filepath)=>{
    try{
        const data = await readFile(filepath,'utf-8');
        console.log(data)
    }catch(error){
        console.error(error)
    }
}

await readFileContent('simple.txt');

const writeFileContent = async(fileName,content)=>{
    await writeFile(fileName, content)
    console.log('file create succeffully');
}

await writeFileContent('java.txt', 'This java file');

const appendFileContent = async (filePath, content) =>{
    await appendFile(filePath, content);
    console.log('New content eddit successfully')
}

await appendFileContent('simple.txt', 'This is barnd new Content.');