import TaskError from "./TaskError"
import * as path from "path";

class Starter {
	public name: any;
	public type: any;
    main: any
    before: any
    after: any
    instance: any
    index = 0
    baseDir: string

    constructor(baseDir: string, instance: object, pipe: any) {
        this.baseDir = baseDir
        this.main = pipe
        this.instance = instance
    }

    setBefore(before: any) {
        this.before = before
    }

    setAfter(after: any) {
        this.after = after
    }

    run() {
        this.runPipe()
    }

    runPipe() {
        if (!Array.isArray(this.main)) {
            console.log(new TaskError(""))
            return
        }

        const current = this.main[this.index]
        const {name, type} = current
        if (type) {
            // todo run .sh
            this.next()
        } else {
            const baseDir = this.baseDir
            if(/\//.test(name)){
                import(path.join(baseDir,'..',name)).then(({default: pipe})=>{
                    this.runPipeItem(pipe, current)
                })
            }else {
                import(name).then(({default: pipe})=>{
                    this.runPipeItem(pipe, current)
                })
            }
        }
    }

    next(){
        if(this.index >= this.main.length - 1) return
        this.index = this.index + 1
        this.runPipe()
    }

    runPipeItem(pipe: any, option: any) {
        // @ts-ignore
        const run = pipe(this.instance.context, option)
        run(()=>{
            console.log('next')
            this.next()
        })
    }


}

export default Starter
