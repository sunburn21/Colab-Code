const express = require('express');
const nodemailer = require('nodemailer');
const config = require('../config');

const router = express.Router();
const transporter = nodemailer.createTransport(config.mailer);


router.route('/')
    .get((req, res) => {
        res.send('contact-us');
    })
    .post((req, res) => {
        const mailOptions = {
            from: 'Sunny <noreply>@gmail.com',
            to: 'sunnythesingh21@gmail.com',
            subject: 'You got a new msg!🧛‍',
            text: req.body.message
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err)
                console.log(err);
            else
                res.send(info);
        })
    })

module.exports = router;