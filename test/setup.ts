import { rm } from 'fs/promises';
import { join } from 'path';
import { DataSource, getConnection } from 'typeorm'

global.beforeEach(async ()=>{
    try {
        await rm(join(__dirname, '..', 'test.sqlite'))
    } catch (error) {
        
    }
})

global.afterEach(async ()=>{
    const conn = new DataSource({type: 'sqlite', database: join(__dirname, '..', 'test.sqlite')}, )
    await conn.initialize()
    await conn.destroy()
})