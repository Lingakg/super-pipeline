import util from "./util";


class Context {
    // @ts-ignore
    constructor(config: any) {

    }

    params = {}
    status = 1
    name = ""
    processName = ""
    type = ""
    util = util
}

export default Context
