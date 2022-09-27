import Pipe from 'super-pipeline';

const tool = new Pipe('/Users/chennwanlin/Documents/demo/super-pipeline/examples/use/basic/.pipe/main.yaml')
tool.getList()
const myConsole = tool.getInstance('console')
myConsole.tap.onTap('willStart', (data: any, context: any)=>{
  console.log('program',data, context)
})


myConsole.tap.emit('willStart', 'test')


setTimeout(()=>{
  myConsole.run()
}, 1000)
