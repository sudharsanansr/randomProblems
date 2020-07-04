const  obj = {
    shool : 'altcampus',
    outerFunc : function(){
        let self = this;
        console.log(this);
        console.log(self);
        console.log(this.school);   
        console.log(self.school);
        function innerFunc(){
            console.log('' + this.school);
            console.log(self.school);
        }
        innerFunc();
    }
};
obj.outerFunc();