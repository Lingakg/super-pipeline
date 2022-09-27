# super pipeline
Task execution pipeline, yaml configuration file method, support independent npm packages and plug-ins, cooperate with context objects and event monitoring, so that your tasks can work together

任务执行管道，yaml配置文件方式，支持独立npm包和插件，配合上下文对象和事件监听，让你的任务可协同工作
###  install
    npm i super-pipeline

###  Quick Start
``` typescript
import Pipe from 'super-pipeline';

const tool = new Pipe('/Users/chennwanlin/Documents/demo/super-pipeline/examples/use/basic/.pipe/main.yaml')
tool.getList()
const myConsole = tool.getInstance('console')
myConsole.tap.onTap('willStart', (data: any, context: any)=>{
console.log('program',data, context)
})


myConsole.tap.emit('willStart', 'test')
```

### Pipe
```typescript
export default function BasicPipe(context: any){
  return function(next: Function){
    console.log(context)
    setTimeout(next, 5000)
  }
}
```

### Plugin
```typescript
export default class TestPlugin{
    apply(instance: any, option: any){
        console.log('plugin options:',option)
        instance.tap.onTap('willStart', (data: any, context: any)=>{
            console.log('plugin',data, context)
            // instance.tap.emit('willStart', option)
        })
    }
}
```
