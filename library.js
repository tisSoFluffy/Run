var carLike = function(obj, loc){
    obj.loc = loc;
    obj.move = function(){
        this.loc++;
    }
    return obj;
}