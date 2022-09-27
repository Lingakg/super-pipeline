import Plugin from './Plugin'
import Starter from "./Starter"

class TaskInstance {
	public plugin: any;
	public pipe: any;
	public before: any;
	public after: any;
    name: any;
    tap: any;
    context: any;
    info: any;

    constructor(info: any, context: any, tap: any) {
        const {name, plugin} = info
        this.info = info
        this.name = name

        this.tap = tap
        this.context = context
        this.loadPlugin(plugin)
    }

    loadPlugin(info: any){
        const plugin = new Plugin()
        plugin.install(info, this)
    }

    run(){
        const {pipe, before, after} = this.info
        const starter = new Starter(this, pipe)
        starter.setAfter(after)
        starter.setBefore(before)
        starter.run()
    }
}

export default TaskInstance
