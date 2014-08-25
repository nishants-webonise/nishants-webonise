var  DataStructure = function(){
  this.data = [];
  this.length = 0;
};

DataStructure.prototype.add = function(){
  var i, j;
  for(i = 0, j = arguments.length; i < j; i++){
    this.data.push(arguments[i]);
  }
  this.length = this.data.length;
  return this.data.length;
};

DataStructure.prototype.getValue = function(index){
  return this.data[index];
};

DataStructure.prototype.setValue = function(index, value) {
  this.data[index] = value;
  return this.data[index];
};

DataStructure.prototype.remove = function(){ return null; };

var Stack = function(){};
Stack.prototype.remove = function() {
    this.data.pop();
    this.length = this.data.length;
    return this.data.length;
};

var Queue = function() {};
Queue.prototype.remove = function(){
  this.data.splice(0, 1);
  this.length = this.data.length;
  return this.data.length;
};

Stack.prototype = new DataStructure();
Queue.prototype = new DataStructure();