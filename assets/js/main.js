import { LoginAuthExecute, LogoutAuthExecute } from './authenticate_execute';
import {BelongingGetExecute, BelongingPostExecute, BelongingUpdateExecute} from './belongings_execute';
import ExecuteAll from './execute_all';

const content = [
    new LoginAuthExecute('/login'),
    new BelongingGetExecute('/belongings'),
    new BelongingPostExecute('/belongings'),
];

let pathnameArr = window.location.pathname.split('/');

if(pathnameArr[1] !== '' && pathnameArr[1] !== 'login' ) {
    const logoutExecute = new LogoutAuthExecute('/');
    logoutExecute.execute();
}


if(pathnameArr.includes('belongings') && pathnameArr.includes('edit')){
    const belongingUpdateExecute = new BelongingUpdateExecute('/');
    belongingUpdateExecute.execute();
}

const executeAll = new ExecuteAll(content);
executeAll.index();

