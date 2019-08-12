const Task = require('../../Models/task/task');

exports.upload = (req,res)=>{
    let task = new Task({
        user :req.body.user,
        img: req.protocol+"://"+req.get('host')+"/"+req.file.path,
    });
    
    task.save();
    res.json({
        success:true,
        msg:"An image is successfully uploaded"
    });
};
exports.list = (req,res)=>{
    Task.find({'status':'pending'}).populate('User').populate({ path: 'user', select: ['username','phone_no'] }).exec(function(err,tasks){
        if(err) throw err;
        if(tasks){
            res.json({
                success:true,
                tasks:tasks
            });
        }
        else{
            res.json({
            success:false,
            msg:"No tasks are available yet"
            });
        }
    });
            
}
exports.update =(req,res)=>{
    let id = req.params.id;
    Task.findById({_id:id}).exec((err,task)=>{
        if (err) throw err;
        if(task){
            task.status="approved";
            task.save();
            res.json({
                success:true,
                msg:'This task is approved'
            });
        }
        else{
            res.json({
                success:false,
                msg:"There is not task info of this id `{id}`"
            });
        }
    })
}
