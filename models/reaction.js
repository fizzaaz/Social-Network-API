const {schema,model}=require('mongoose');
const dateFormat = require('../utils/dateFormat');

const react_schema=new schema(
    {
        reactionId:
        {
            id:schema.Types.ObjectId,
            default:()=>new Types.ObjectId
        }
    }
)