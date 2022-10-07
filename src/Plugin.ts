import * as path from "path";

class Plugin{
    private baseDir: string;

    constructor(baseDir: string) {
        this.baseDir = baseDir
    }

    install(plugin: any, instance: object) {
        Array.isArray(plugin) && plugin.map(item=>{
            import(path.join(this.baseDir,'..',item.name)).then(({default: Current})=>{
                const pluginInstance = new Current()
                pluginInstance.apply(instance, item)
            })
        })
    }
}


export default Plugin
