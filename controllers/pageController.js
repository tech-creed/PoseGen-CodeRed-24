const userModel = require('../database/userModel')

const homePage = async(req,res)=>{
    res.render('index')
}

const authPage = async(req,res)=>{
    res.render('auth')
}

const genP2IPage = async(req,res)=>{
    res.render('prompt_to_img')
}

const genPandIPage = async(req,res)=>{
    res.render('img_to_2d_gen')
}

const dashboard =  async(req,res)=>{
    res.render('dashboard')
}

const recPage = async(req,res)=>{
    const userEmail = req.cookies.email;
    const user = await userModel.getUserByEmail(userEmail)
    res.render('recommendation', { user });
}


module.exports = { homePage,authPage,genP2IPage,genPandIPage,dashboard,recPage }