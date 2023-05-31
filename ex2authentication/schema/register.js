const Joi = require('joi');
const schema = Joi.object({

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    firstname: Joi.string()
        .alphanum()
        .min(3)
        .max(10)
        .required(),
    lastname: Joi.string()
        .alphanum()
        .min(3)
        .max(10)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    // repeat_password: Joi.ref('password'),

    // email: Joi.string()
    //     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

// try {
//     const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
// }
// catch (err) { }