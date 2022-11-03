// const user = require('../models/UserModel');
// const adminMiddlware = async (req, res, next) => {
//     try {
//         const user = await Person.findById(req.userId);
//         if (user.enum === 'admin') next();
//         else res.status(401).json({ msg: 'you are not autorized'});
//     } catch (error) {
//         res.status(400).json({ msg: 'unvalid token $(error)'});
//     }
//     };
//     module.exports = adminMiddlware
