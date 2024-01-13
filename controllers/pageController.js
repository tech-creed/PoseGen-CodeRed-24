const homePage = async(req,res)=>{
    res.render('index')
}

const authPage = async(req,res)=>{
    res.render('auth')
}

const genP2IPage = async(req,res)=>{
    res.render('prompt_to_img')
}

module.exports = { homePage,authPage,genP2IPage }