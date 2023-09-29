import collection from "../models/secret.js";
// import bcrypt from 'bcryptjs';

export const getSecret = async(req, res, next) => {
    
    const secret = await collection.find().then(secret => secret);

    if (!secret) {
        return res.status(404).json({message: "missing secret please create one"})
    }
    if (secret.remainingViews === 0)
        return res.status(404).json({message: "sorry too many people have viewed the secret"})
    const today = new Date();
    if ((today > secret.expiredDate) && secret.expiredDate !== 0)
        return res.status(404).json({message: "Sorry the secret is no longer available"})
    secret.remainingViews -= 1;
    return res.status(200).json({ secret });
    next();
};

export const addSecret = async(req, res, next) => {
    // console.log("request body is:", req.body);
    const { remainingViews, expiredDate, secret} = req.body;
    /*const hashedSecret = await bcrypt.hashSync(secret); */
//    const hashedSecret = "stuff"
   const secrets = {
        // hash: bcrypt.hashSync(secret),
        secret: secret,
        remainingViews: remainingViews,
        expiredDate: expiredDate,
    }
   
    const existingSecret = await collection.create(secrets);
    
    return res.status(200).json({
        hash: secrets.hash,
        secretText: secret,
        createdDate: existingSecret.createdDate,
        expiredDate: existingSecret.expiredDate,
        remainingViews: existingSecret.remainingViews
    });
    next();
};