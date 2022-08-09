const  app = Vue.createApp({
    data(){
        return{
            x:0,
            y:0,            
            showbooks:true,
            title:"boof koor",
            author:"sadegh hedayat",
            age:45,
            books:[
                {title:"boof koor" , author:"sadgh hedayat"},
                {title:"sag velgard" , author:"sadgh hedayat"},
                {title:"kelider" , author:"mahmood dolatabadi"},
            ]
        }
    },

    methods:{
        changetitle(abc){
            this.title=abc
        },
        changeshowBook(){
            this.showbooks=!this.showbooks
        },
        handleevent(event){
            console.log(event)
        },
        handlemovemouse(event){
            this.x=event.offsetX
            this.Y=event.offsetY               
        }
    }
});
app.mount("#app");