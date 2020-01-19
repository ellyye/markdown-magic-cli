#!/usr/bin/env node

const fs =require('fs')
const path =require('path')

const [,,command,param] =process.argv

if(command === 'init'){
    if(param === 'clog'){
        const srcClog=path.join(__dirname,'../tpl','CHANGELOG.md')
        const targetClog=path.resolve('CHANGELOG.md')
    
        const { COPYFILE_EXCL } = fs.constants
        fs.copyFileSync(srcClog, targetClog, COPYFILE_EXCL)
    
        console.log(`成功初始化CHANGELOG ${targetClog}`);
    }
} else if (command === 'magic'){
    require('../src/index.js')
}else{
    console.log(`command ${command} not found`)
}
