class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    area(){
        return this.height * this.width;
    }
}

 const r = new Rectangle(50,20)
 console.log(r);
 console.log(r.area())
