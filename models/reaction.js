const {schema,model}=require('mongoose');
const dateFormat = require('../utils/dateFormat');

const react_schema=new schema(
    {
        reactionId:
        {
            id:schema.Types.ObjectId,
            default:()=>new Types.ObjectId
        },
        reactionBody:
        {
            type:String,
            required:true,
            maxlength:280
        },
        username:
        {
            String:true,
            required:true
        },
        createdAt:
        {
            type:Date,
            default:Date.now,
            get: createdAtVal=>dateFormat(createdAtVal)
        }
    },
    {
        toJSON:
        {
            getters:true
        },
        id:false
    }
);

const Reaction=model('Reaction',react_schema)
module.exports=Reaction;