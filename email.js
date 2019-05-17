const nodemailer = require('nodemailer');

module.exports={
    send(mailOptions,callback,error){
        let transporter = nodemailer.createTransport({
            service: 'qq',
            auth: {
                user: '2807166910@qq.com',
                pass:"pymvfxryedvoddec"
            }
        });
        let _mailOptions =Object.assign({
            from: '2807166910@qq.com', // 发送者
            to: '', // 接受者,可以同时发送多个,以逗号隔开
            subject: '注册成功', // 标题
            html: ``
        },mailOptions);
        transporter.sendMail(_mailOptions, function (err, info) {
            if (err) {
                error&&error(err);
                return;
            }
            callback&&callback();
        });
    }
};

