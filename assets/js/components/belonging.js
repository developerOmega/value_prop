import Data from './data';

export default class Belonging extends Data {
    constructor(selector, url){
        super(url);
        this.selector = selector;
    }

    get(){
        let content = document.querySelector(this.selector);
        let urlData = `${this.url}/api/v1/belongings`;
        let h = new Headers;
        h.append('Authorization', this.token);

        let req = new Request(urlData, {
            method: 'GET',
            mode: 'cors',
            headers: h
        });


        fetch(req)
            .then(resp => resp.json())
            .then(result => {
                content.innerHTML = '<tr><th>Nombre</th><th>Valor</th><th>Cantidad</th><th>Activo</th><th>Valor por mes</th><th>Editar</th><th>Eliminar</th></tr>';

                result.belongings.forEach(belonging => {
                    let tr = document.createElement('tr');
                    let form = document.createElement('form');
                    let tdForm = document.createElement('td');

                    form.setAttribute('action', `/api/v1/belongings/${belonging._id}?_method=DELETE`);
                    form.setAttribute('method', 'POST');

                    form.innerHTML = `<input type="hidden" name="id" value=${belonging._id}><input type="submit" value="Eliminar">`;
                    tdForm.appendChild(form);
                    

                    tr.innerHTML += `<td>${belonging.name}</td>`;
                    tr.innerHTML += `<td>${belonging.value}</td>`;
                    tr.innerHTML += `<td>${belonging.quantity}</td>`;
                    tr.innerHTML += `<td>${belonging.active == true ? 'Si' : 'No'}</td>`;
                    tr.innerHTML += `<td>${belonging.value_active}</td>`;
                    tr.innerHTML += `<td> <a href="/belongings/${ belonging._id }/edit"> Edtiar </a> </td>`;
                    tr.appendChild(tdForm);

                    content.appendChild(tr);
                    
                });
                
                let tableBeloning = document.getElementById('table_beloning');
                let self = this;

                for(let i = 1; i < tableBeloning.children.length; i++ ){
                    tableBeloning.children[i].children[6].children[0].addEventListener('click', function(e){
                        e.preventDefault();
                        self.delete(this.id.value);
                        self.get();
                    });
                }

            });
    }

    post(value){
        let urlData = `${this.url}/api/v1/belongings`;

        let params = {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Authorization": `${this.token}`
            },
            body: `name=${value.name}&value=${value.value}&quantity=${value.quantity}&active=${value.active}&value_active=${value.value_active}`
        }

        fetch(urlData, params)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    put(belonging_id = '', value){
        let urlData = `${this.url}/api/v1/belongings/${belonging_id}`;

        let params = {
            method: 'PUT',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Authorization": `${this.token}`
            },
            body: `name=${value.name}&value=${value.value}&quantity=${value.quantity}&active=${value.active}&value_active=${value.value_active}`
        }

        fetch(urlData,params)
            .then(resp => resp.json())
            .then(data => {
                console.log(data); 
            })
            .catch(err => console.log(err));
    }

    delete(belonging_id = ''){

        let urlData = `${this.url}/api/v1/belongings/${belonging_id}`;
        let h = new Headers();
        h.append('Authorization', `${this.token}`);

        let params = {
            method: 'DELETE',
            headers: h
        };

        fetch(urlData, params)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            });
    }
}