let obj = (function(){
  let objInstance
  function create() {
    return {pet: 'dog'}
  }
  return {
    getInstance: function() {
      if(!objInstance) {
        objInstance = create()
      }
      return objInstance
    },
    setInstance: function () {
      objInstance = { pet: 'cat'}
    }
  }
})()


let objInstance1 = obj.getInstance()
obj.setInstance()
let objIsntance2 = obj.getInstance()
console.log(objInstance1)
console.log(objIsntance2)
