const { schema, model } = require('mongoose');

const User = new schema(
    {
        username:
        {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email:
        {
            type: String,
            unique: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts:
        {
            type: schema.Types.ObjectId,
            ref: 'Thought'
        },
        friends: [
        {
            type: schema.Types.ObjectId,
            ref: 'User'
        }
        ]


    }
)