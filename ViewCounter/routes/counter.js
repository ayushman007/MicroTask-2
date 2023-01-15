const express=require('express')
const router=express.Router()
const fs=require('fs');

router.get('/',(req,res)=>{
    const json=fs.readFileSync('views.json','utf8')
    const obj=JSON.parse(json);
    obj.views=obj.views+1;
    const newJSON=JSON.stringify(obj);
    fs.writeFileSync('views.json',newJSON);

    res.status(200).json({
        pagevisit:obj.views
    })
    
})
module.exports=router