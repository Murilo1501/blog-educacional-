const bodyParser = require('body-parser');
const usersComon = require('./users/ComonRoute');

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(usersComon)
}