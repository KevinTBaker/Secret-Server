import Secret from "../models/secret.js";
import bcrypt from 'bcryptjs';

export const getSecret = async(req, res, next) => {
    let secret;
    try {
        secret = await Secret.find().then(secret => secret);
    } catch (err) {
        console.log(err)
    }
    if (!secret) {
        return res.status(404).json({message: "missing secret please create one"})

    }
    if (secret.remainingViews == 0)
        return res.status(404).json({message: "sorry too many people have viewed the secret"})
    const today = new Date();
    if ((today > secret.expiredDate) && secret.expiredDate != 0)
        return res.status(404).json({message: "Sorry the secret is no longer available"})
    secret.remainingViews -= 1;
    // await secret.save();
    return res.status(200).json({ secret });
};

export const addSecret = async(req, res, next) => {
    const { remainingViews, expiredDate, secret} = req.body;

    let existingSecret;
    let hashedSecret;

    try {
        existingSecret = await Secret.findOne({ secret });
    }
    catch (err){
        return console.log(err);
    }
   
    const secrets = new Secret ({
        hash: hashedSecret,
        secret,
        remainingViews,
        expiredDate,
    });
    if (!existingSecret)
    {
    // hashedSecret = await bcrypt.hashSync(secret);
        // existingSecret = await secrets
        try {
            await secrets.save();
        } catch (err) {
           return console.log(err);
        }
        return res.status(404).json({message: "Secret created"})
    }
    else
        return res.status(200).json({ secrets }
    );
};