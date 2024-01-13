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

const profileUpdatePage = async(req,res)=>{
    res.render('pfpUpdate')
}

const dashboard =  async(req,res)=>{
    res.render('dashboard')
}


module.exports = { homePage,authPage,genP2IPage,genPandIPage,profileUpdatePage,dashboard }