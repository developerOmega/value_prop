export default class ExecuteAll{
    constructor(content){
        this.content = content;
    }

    index(){
        this.content.forEach( data => {
            if(data.pathname == window.location.pathname){
                data.execute();
            }
        });
    }
}