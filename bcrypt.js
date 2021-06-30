const bcrypt = require('bcryptjs');

async function generateHash(password){
    console.log(await bcrypt.hash(password, 10))
}

// async function checkPassword(password, hash){
//     const isPassword = await bcrypt.compare(password, hash)
//     if(isPassword){
//         console.log('Success!')
//     } else {
//         console.log('Failure!')
//     }
// }
