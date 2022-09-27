class Tap {
    taps = new Map()
    context = null
    // @ts-ignore
    constructor(config: any, context: any) {
        this.context = context
    }

    onTap(name: any, callback: any){
        if(this.taps.has(name)){
            const current = this.taps.get(name)
            this.taps.set(name, [...current, callback])
        }else{
            this.taps.set(name, [callback])
        }
    }

    emit(name:string, data:any){
        const callbacks = this.taps.get(name)
        Array.isArray(callbacks) && callbacks.map(item=>{
            if(typeof item === "function") item(data, this.context)
        })
    }
}


export default Tap
