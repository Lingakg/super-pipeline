export default class TestPlugin{
  apply(instance: any, option: any){
    console.log('plugin options:',option)
    instance.tap.onTap('willStart', (data: any, context: any)=>{
      console.log('plugin',data, context)
      // instance.tap.emit('willStart', option)
    })
  }
}
