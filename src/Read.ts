import yaml from 'js-yaml'
import fs from "fs"
import Parse from "./Parse"
import TaskError from "./TaskError"
import * as path from "path";

class Read {
	public provides: any;
	public infos: any;
    list = new Map()
    private baseDir: string;

    constructor(baseDir: string, filePath: string) {
        this.baseDir = baseDir
        // @ts-ignore
        const { tasks } = this.load(filePath)
        // @ts-ignore
        Array.isArray(tasks) && tasks.map((item: any)=>{
            const {provides, infos} = item
            Array.isArray(provides) && provides.map((provide: any) =>{
                const  exists = fs.existsSync(path.join(this.baseDir, '..',provide))
                if(exists){
                    const provideInfo = this.load(provide)
                    this.add(item.type, new Parse(provideInfo))
                }else {
                    console.log(new TaskError(provide + ' not file'))
                }
            })
            if(infos){
                this.add(item.type, new Parse(item))
            }
        })
    }

    load(filePath: string){
        return yaml.load(fs.readFileSync(path.join(this.baseDir, '..', filePath), 'utf-8'))
    }

    add(type: string, data: any){
        if(this.list.has(type)){
            const current = this.list.get(type)
            this.list.set(type, [...current, ...data])
        }else{
            this.list.set(type, data)
        }
    }

}

export default Read
