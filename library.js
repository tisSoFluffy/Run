var carLike = function(obj, loc){
    obj.loc = loc;
    obj.move = function(){
        obj.loc++;
    }
    return obj;
}