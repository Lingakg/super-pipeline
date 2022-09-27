import Instances from "./Instances"
import TaskData from "./TaskData"
import {Path, ToolName} from "./type/Pipe";

class Pipe {


    constructor(filePath: Path) {
        TaskData.init(filePath)
    }


    getList() {
        return TaskData.getData()
    }

    getInstance(toolName: ToolName) {
        return Instances.getInstance(toolName);
    }
}

export default Pipe
