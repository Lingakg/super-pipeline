import TaskError from "./TaskError"

class Starter {
	public name: any;
	public type: any;
    main: any
    before: any
    after: any
    instance: any
    index = 0

    constructor(instance: object, pipe: any) {
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

        const {name, type} = this.main[this.index]
        if (type) {
            // todo run .sh
            this.next()
        } else {
            console.log(__dirname)
            import(name).then(({default: pipe})=>{
                this.runPipeItem(pipe)
            })
        }
    }

    next(){
        if(this.index >= this.main.length - 1) return
        this.index = this.index + 1
        this.runPipe()
    }

    runPipeItem(pipe: any) {
        // @ts-ignore
        const run = pipe(this.instance.context)
        run(()=>{console.log('next')
            this.next()
        })
    }


}

export default Starter
