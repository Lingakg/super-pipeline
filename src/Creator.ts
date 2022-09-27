import Context from "./Context"
import Tap from "./Tap"
import TaskData from "./TaskData"
import TaskInstance from "./TaskInstance"

class Creator {
    context: any
    tap: any

    constructor(name: string) {
        // @ts-ignore
        const [_, tool] = TaskData.getTool(name)
        this.context = new Context(tool)
        this.tap = new Tap(tool, this.context)
        return new TaskInstance(tool, this.context, this.tap)
    }
}

export default Creator
