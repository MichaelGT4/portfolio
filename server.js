const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("Server Running"));

let contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        // Your Gmail password or App Password
        pass: process.env.USER_PASSWD
    }
});

contactEmail.verify((e) =>{
    if (e) {
        console.log(e);
    } else {
        console.log("Ready to Send");
    }
});

router.get("/", (req, res) => {
    res.send('Connected to Server');
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: process.env.DESTINATION_EMAIL,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error){
            res.json(error);
        } else{
            res.json({code: 200, status: "Message Sent"});
        }
    });
});