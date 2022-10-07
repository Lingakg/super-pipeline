const {default: Pipe} = require("../../../dist/index");

const tool = new Pipe(__dirname, '/test/.pipe/main.yaml')
tool.getList()
const myConsole = tool.getInstance('console')
myConsole.tap.onTap('willStart', (data, context)=>{
    console.log('program',data, context)
})


myConsole.tap.emit('willStart', 'test')


setTimeout(()=>{
    myConsole.run()
}, 1000)
