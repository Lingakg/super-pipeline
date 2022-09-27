import Creator from './Creator'

class Instances {
	public instances: any;
    static instances = new Map()

    static getInstance(name: string){
        if(this.instances.has(name)) return this.instances.get(name)
        this.add(name, new Creator(name))
        return this.instances.get(name)
    }

    static add(name: string, instance: object){
        this.instances.set(name, instance)
    }
}

export default Instances
