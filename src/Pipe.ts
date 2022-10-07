import Instances from "./Instances"
import TaskData from "./TaskData"
import {Path, ToolName} from "./type/Pipe";

class Pipe {


    constructor(baseDir: string, filePath: Path) {
        Instances.baseDir = baseDir
        TaskData.init(baseDir, filePath)
    }


    getList() {
        return TaskData.getData()
    }

    getInstance(toolName: ToolName) {
        return Instances.getInstance(toolName);
    }
}

export default Pipe
