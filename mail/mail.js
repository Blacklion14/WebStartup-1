const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '586a71e2fb1a6785c8b1b532bfc3fa03',
        domain: 'sandbox2f1786d4aaae42c1bde66889530e7528.mailgun.org'
    }
};


const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'webstartup1014@gmail.com',
        subject: subject,
        text: text
    };


    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("30")
            cb(err, null);
        } else {

            console.log("40")
            cb(null, data);
        }
    });
};
// Exporting the sendmail
module.exports = sendMail;