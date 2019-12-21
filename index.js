// Write your solution in this file!
 let driver = {}

function updateDriverWithKeyAndValue(obj,key,value){
   const newObj = Object.assign({},obj,{[key]:value})
   return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
   Object.assign(obj, {{[key]:value}})
}

function deleteFromDriverByKey(){

}

function destructivelyDeleteFromDriverByKey(){

}
