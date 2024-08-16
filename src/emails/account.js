const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = ( email , name) => {
    sgMail.send({
        to:email,
        from:'jainaadish023@gmail.com',
        subject: 'Thanks for joining in!',
        text : `Welcome to the app, ${name}. Let me know how you get along with the app.`  //injecting a value using ``
    })
}

const sendCancelationEmail = ( email, name ) => {
    sgMail.send({
        to:email,
        from:'jainaadish023@gmail.com',
        subject:'Sorry to see you go',
        text: `${name} we are sorry that you are leaving. Please do tell what we could have done better `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}


