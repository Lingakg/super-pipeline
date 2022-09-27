export default function BasicPipe(context: any){
  return function(next: Function){
    console.log(context)
    setTimeout(next, 5000)
  }
}
