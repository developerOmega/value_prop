export default class Data {
    constructor(url){
        this.url = 'http://localhost:3000';
        this.token = !localStorage.getItem('tokenLogin') || localStorage.getItem('tokenLogin') == undefined ? '' : JSON.parse(localStorage.getItem('tokenLogin'));
    }

    get(){
        return this.url;
    }

    post(){
        return this.url;
    }

    put(){
        return this.url;
    }

    delete(){
        return this.url;
    }

    
}