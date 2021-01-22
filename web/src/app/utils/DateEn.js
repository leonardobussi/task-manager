export default function dateen(arg, op, op2){

  var dia =  arg.slice(8,10)
  var mes = arg.slice(5,7)
  var ano = arg.slice(0,4)
  var hora = arg.slice(11,14)
  var  min = arg.slice(14,17)
  var seg = arg.slice(17,19)

if(op == true){
   if (op2 == true){
    return hora+min+seg 
  }
  else{
    return ano+'-'+mes+'-'+dia+':'+hora+min+seg 
  }
  
 
}
else {
  return ano+'-'+mes+'-'+dia
}
  
}