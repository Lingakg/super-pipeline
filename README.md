# super pipeline
Task execution pipeline, yaml configuration file method, support independent npm packages and plug-ins, cooperate with context objects and event monitoring, so that your tasks can work together

任务执行管道，yaml配置文件方式，支持独立npm包和插件，配合上下文对象和事件监听，让你的任务可协同工作
###  install
    npm i super-pipeline

###  Quick Start
```yaml
#main.yaml
tasks:
  - type: Tools
    provides:
      - /.pipe/tools.yaml

#tools.yaml
infos:
  - name: console
    icon: fav.ico
    type: command
    process-name: console
    params:
      port: 3306
      host: 0.0.0.0
      中文: 111
    pipe:
      - name: run
        type: OG # OG (Open GUI)  DC (Docker Client) DS (Docker Server) DF (Docker Full) CC(Command Client) CS(Command Server)
        script:
          - run.sh
      - name: ../../pipe/basic/dist/index.js
    plugin:
      - name: ../../plugin/basic/dist/index.js
        server: user-report
```
``` typescript
// index.js
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
