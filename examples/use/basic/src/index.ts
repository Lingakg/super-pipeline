import Pipe from 'super-pipeline';

const tool = new Pipe(__dirname, '/.pipe/main.yaml')
tool.getList()
const myConsole = tool.getInstance('console')
myConsole.tap.onTap('willStart', (data: any, context: any)=>{
  console.log('program',data, context)
})


myConsole.tap.emit('willStart', 'test')


setTimeout(()=>{
  myConsole.run()
}, 1000)
