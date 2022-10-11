export default function BasicPipe(ctx: any){
  return function(next: Function, option: any){
    ctx.util.log.info(ctx, option)
    setTimeout(next, 5000)
  }
}
