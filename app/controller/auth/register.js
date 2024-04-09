// const bcrypt = require('bcrypt');
const { User } = require('../../model/schemaANDmodel');
const uId = require('../../../helper/uniqueId');
const ConnectDB = require('../../model/connectDB');

async function registerController(req, res) {

   try {

      //distructure the from data from the body
      const { fName, lName, email, country, pass } = req.body;

      //ganarate unique user id
      const userId = uId();

      //hashing password via bcrypt
      // const heshedPassword = await bcrypt.hash(pass, 10);

      //create user object
      const userObject = {
         userId: userId,
         fristName: fName,
         lastName: lName,
         email: email,
         country: country,
         password: pass,
      }

      //connected Data
      ConnectDB();

      //insert data into the database
      await User.create(userObject, (err) => {

         if (!err) {

            //send the final response
            res.status(200).json({
               success: true,
               message: "User created Successfully"
            });

         } else {

            //send the error response
            res.status(500).json({
               success: false,
               message: "There was a server side problem"
            });

         }
      })

   } catch (error) {

      //send the error response
      res.status(500).json({
         success: false,
         message: "There was a server side problem"
      });
   }
}

module.exports = registerController;