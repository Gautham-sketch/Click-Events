AFRAME.registerComponent('console',{
    schema:{
        message:{type:"string",default:"DEFAULT MESSAGE"},
        counter : {type:"number", default:0},
    },

    init: function(){
        console.log(this.data.message)
    },

    update: function(){
        window.addEventListener("click", e =>{
            this.data.counter = this.data.counter + 1;
            if(this.data.counter === 1){
                const rotation = {x:0, y:20, z:0};
                this.el.setAttribute("rotation", rotation);
            }
            else if(this.data.counter === 2){
                const rotation = {x:0, y:100, z:0};
            }
        })
    },
});