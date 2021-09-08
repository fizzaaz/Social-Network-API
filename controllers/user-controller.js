const { User,Thought }=require('../models');

const userController={

// GET all users
getAllUser(req,res){
    User.find({})
    .then(dbUserData=>res.json(dbUserData))
    .catch(err=>
        {
            console.log(err);
            res.status(400).json(err)
        });
},

// GET a single user by its _id and populated thought and friend data
getUserById({params},res){
User.findOne({ _id:params.id})
.then(dbUserData=>{
    if(!dbUserData){
        res.status(404).json({ message: 'Opps! No user found with this id!' });
        return;
    }
    res.json(dbUserData);
})
.catch(err=>
    {
        console.log(err);
        res.status(400).json(err)
    });
}

}