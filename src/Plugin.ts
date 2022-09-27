class Plugin{
    constructor() {
    }

    install(plugin: any, instance: object) {
        Array.isArray(plugin) && plugin.map(item=>{
            import(item.name).then(({default: Current})=>{
                const pluginInstance = new Current()
                pluginInstance.apply(instance, item)
            })
        })
    }
}


export default Plugin
