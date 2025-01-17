import jwt from 'jsonwebtoken';

export const authenticate = (req, res,next) =>{

  try{
    // console.log("Authenticating",req.headers.authorization)
    const token =req.headers.authorization.split(' ')[0];
    // console.log(token, " Ashissss ",process.env.JWT_TOKEN)
    if(!token) return res.status(400).json({message:"Access Denied",desc:"Testing"})
    const verification=jwt.verify(token,process.env.JWT_TOKEN)
    console.log(verification)
    req.user = verification
    next();
    }catch(err){
            res.status(400).json({message:"Inavlid Token",error:err})
    }
}

export const authorize = (role) => (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: 'Access Denied' });
    }
    next();
  };