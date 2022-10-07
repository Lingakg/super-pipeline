import Read from "./Read"
import TaskError from "./TaskError"
import {Path, ToolName} from "./type/Pipe";

class TaskData {
	public data: any;
	public list: any;
    static data: any;
    public static baseDir: string;

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

    static init(baseDir: string, filePath: Path): void {
        this.baseDir = baseDir;
        const {list}: Read = new Read(baseDir, filePath)
        this.data = list
    }
}

export default TaskData
