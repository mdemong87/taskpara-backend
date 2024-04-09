const { User } = require('../../model/schemaANDmodel');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');


async function loginController(req, res) {


    try {
        const { email, pass } = req.body;


        //find the user
        const userData = await User.find({});


        //check user exist in the system or not
        const isuserExist = userData.filter((singleUser) => {
            return singleUser.email === email;
        })


        if (isuserExist.length > 0) {


            // const isvalidpass = await bcrypt.compare(pass, isuserExist[0].password);
            const isvalidpass = true;


            if (isvalidpass) {

                //ganarate token
                const token = jwt.sign({
                    userId: isuserExist[0].userId,
                    email: isuserExist[0].email,
                }, process.env.NEXT_PUBLIC_JWT_SECRECT, {
                    expiresIn: process.env.NEXT_PUBLIC_JWT_EXPIRER
                });


                // set cookie
                res.cookie(process.env.NEXT_PUBLIC_JWT_NAME, token, {
                    maxAge: process.env.NEXT_PUBLIC_JWT_EXPIRER,
                    httpOnly: true,
                });


                //send the final response
                res.status(200).json({
                    success: true,
                    message: 'Login successfull'
                });



            } else {
                res.status(500).json({
                    success: false,
                    message: 'Authenticaton Failed'
                });
            }

        } else {
            res.status(500).json({
                success: false,
                message: 'Authenticaton Failed'
            });
        }


    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Authenticaton Failed'
        });
    }
}

module.exports = loginController;