var express = require('express');
var router = express.Router();
// Register user to check the  user is Registered or not


const Auth=()=>{
    console.log('middlewares to valid the token')
}
router.post("/RegisterUser", async (req, res) => {
    try {
        const { UserInfo } = req.body
        console.log(UserInfo, 'UserInfo')

    }
    catch (Err) {
        return res.json(
            {
                message: Err.message
            }
        )
    }
})

// login user to check the valid user
router.get("/LoginUser",Auth, async (req, res) => {
    try {
        const { UserInfo } = req.query
        console.log(UserInfo, 'UserInfo')

    }
    catch (Err) {
        return res.json(
            {
                message: Err.message
            }
        )
    }
})
module.exports = router;
