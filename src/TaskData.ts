import Read from "./Read"
import TaskError from "./TaskError"
import {Path, ToolName} from "./type/Pipe";

class TaskData {
	public data: any;
	public list: any;
    static data: any;

    static getData(){
        return this.data
    }

    static getTool(name: ToolName): any {
        if(!TaskData.data){
            console.log(new TaskError("data not init"))
            return
        }
        for (const [key, value] of TaskData.data) {
            for (const tool of value) {
                if(tool.name === name) {
                    return [key, tool]
                }
            }
        }
    }

    static init(filePath: Path): void {
        const {list}: Read = new Read(filePath)
        this.data = list
    }
}

export default TaskData
