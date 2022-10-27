const mongoose = require('mongoose');


mongoose.connect('mongodb://0.0.0.0:27017/regisTable',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(()=>{
    console.log(`connection successfull`)
}).catch((e)=>{
    console.log(`no connection ${e}`)

})