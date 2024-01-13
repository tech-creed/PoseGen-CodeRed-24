const homePage = async(req,res)=>{
    res.render('index')
}

const authPage = async(req,res)=>{
    res.render('auth')
}


module.exports = { homePage,authPage }