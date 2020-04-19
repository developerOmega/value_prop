import Execute from './execute';
import Belonging from './components/belonging';

class BelongingExecute extends Execute {
    constructor(pathname){
        super(pathname);
        this.belonging = new Belonging('#table_beloning');
        
    }
}

class BelongingGetExecute extends BelongingExecute {
    
    constructor(pathname){
        super(pathname);
    }

    execute(){
        this.belonging.get();
    }
} 

class BelongingPostExecute extends BelongingExecute {
    constructor(pathname) {
        super(pathname);
    }

    execute(){
        const self = this;

        document.getElementById('form_belonging').addEventListener('submit', function(e){
            e.preventDefault();
            self.belonging.post({
                name: this.name.value,
                value: this.value.value,
                quantity: this.quantity.value,
                active: this.active.checked,
                value_active: this.value_active.value  
            });
            self.belonging.get();

        });

        
    }
}

class BelongingUpdateExecute extends BelongingExecute {
    constructor(pathname){
        super(pathname)
    }

    execute(){
        const self = this;

        document.getElementById('edit_belonging').addEventListener('submit', function(e){
            e.preventDefault();
            
            self.belonging.put(this.id.value, {
                name: this.name.value,
                value: this.value.value,
                quantity: this.quantity.value,
                active: this.active.checked,
                value_active: this.value_active.value  
            });

            // this.submit();
            location.replace('/belongings');
        });
            
    }
}
 
export { BelongingGetExecute, BelongingPostExecute, BelongingUpdateExecute };