const jwt = require('jsonwebtoken');

exports.authAdmin = async (req, res, next) => {
  try {
    const  adminToken  = req.cookies.adminToken;

    if (!adminToken) {
      return res.status(401).json({
        success: false,
        message: 'JWT not found'
      });
    }

    const verifiedToken = jwt.verify(adminToken, process.env.SECRET_KEY);    //destructred token is genuine or not vrifying
    if(!verifiedToken){
        res.status(401).json({message:'Admin not authorized'})
    }

    if(verifiedToken.role!=="admin"){
        return res.status(401).json({error:'Access denied'})
    }

    req.admin =verifiedToken._id;

    next();

  } catch (err) {
    return res.status(401).json({
      success: false,
      message: err.message
    });
  }
};