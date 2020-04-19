const hbs = require('hbs');

hbs.registerHelper('selected', (value, auth) => {
    return value == auth ? 'selected' : '';
});

hbs.registerHelper('checked', (value, auth) => {
    return value == auth ? 'checked' : '';
});

hbs.registerHelper('typeUser', (user, type) => {
    return user == type ? true : false;
});