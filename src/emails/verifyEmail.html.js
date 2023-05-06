
export const confermEmail = (target='', name='', path='', checkNumber='' )=>{
    if (target == "email") {
      return `
      <div class="inbox-data-content-intro">
        <table width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; margin: 0px; padding: 0px; width: 100%;">
              <tbody>
              <h1 style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; color: #7289DA; font-size: 32px; font-weight: 700; margin-top: 0px; text-align: center; margin-bottom: 6px;">Examico</h1>
        <tr>
          <td width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; background-color: rgb(255, 255, 255); margin: 0px; padding: 0px; width: 100%;">
              <table style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; background-color: rgb(255, 255, 255); border-color: rgb(232, 229, 239); border-radius: 2px; border-width: 1px; margin: 0px auto; padding: 8px 0px; width: 600px;" align="center" width="600" cellpadding="0" cellspacing="0">
                    
                    <tbody><tr>
                        <td style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; max-width: 100vw; padding: 16px 24px;">
                            <h1 style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; color: rgb(21, 34, 52); font-size: 24px; font-weight: 700; margin-top: 0px; text-align: left; margin-bottom: 6px;">Verify email address</h1>
      <p style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; color: rgb(59, 67, 76); font-size: 16px; font-weight: 300; line-height: 145%; margin-top: 0px; text-align: left;">In order to register a new account at Examico, you have to verify your email address.</p>
      <p style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; color: rgb(59, 67, 76); font-size: 16px; font-weight: 300; line-height: 145%; margin-top: 0px; text-align: left;">Please click on the button below to verify your email and continue the registration process.</p>
      <table align="center" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; margin: 30px auto; padding: 0px; text-align: center; width: 100%;">
          <tbody><tr>
              <td align="center" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative;">
                      <tbody><tr>
                          <td align="center" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative;">
                              <table border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative;">
                                  <tbody><tr>
                                      <td style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative;">
                                          <a href=${path} target="_blank" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; font-weight: 700; text-size-adjust: none; border-radius: 999px; color: rgb(255, 255, 255); display: inline-block; overflow: hidden; text-decoration: none; padding: 3px 0px; background-color: rgb(21, 34, 52); border-width: 4px 18px; border-style: solid; border-color: rgb(21, 34, 52);">Verify email and continue with registration</a>
                                      </td>
                                  </tr>
                              </tbody></table>
                          </td>
                      </tr>
                  </tbody></table>
              </td>
          </tr>
      </tbody></table>
      <p style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; color: rgb(59, 67, 76); font-size: 16px; font-weight: 300; line-height: 145%; margin-top: 0px; text-align: left;">Sincerely,<br>
      Examico</p>
      
      
                                      
                                </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>
      
      </div>`
      return `
      <div class="inbox-data-content-intro">
        <table width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; margin: 0px; padding: 0px; width: 100%;">
              <tbody>
              <h1 style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; color: #7289DA; font-size: 32px; font-weight: 700; margin-top: 0px; text-align: center; margin-bottom: 6px;">Examico</h1>
        <tr>
          <td width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; background-color: rgb(255, 255, 255); margin: 0px; padding: 0px; width: 100%;">
              <table style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; background-color: rgb(255, 255, 255); border-color: rgb(232, 229, 239); border-radius: 2px; border-width: 1px; margin: 0px auto; padding: 8px 0px; width: 600px;" align="center" width="600" cellpadding="0" cellspacing="0">
                    
                    <tbody><tr>
                        <td style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; max-width: 100vw; padding: 16px 24px;">
                            <h1 style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; color: rgb(21, 34, 52); font-size: 24px; font-weight: 700; margin-top: 0px; text-align: left; margin-bottom: 6px;">Verify email address</h1>
      <p style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; color: rgb(59, 67, 76); font-size: 16px; font-weight: 300; line-height: 145%; margin-top: 0px; text-align: left;">In order to register a new account at Examico, you have to verify your email address.</p>
      <p style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; color: rgb(59, 67, 76); font-size: 16px; font-weight: 300; line-height: 145%; margin-top: 0px; text-align: left;">Please click on the button below to verify your email and continue the registration process.</p>
      <table align="center" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; margin: 30px auto; padding: 0px; text-align: center; width: 100%;">
          <tbody><tr>
              <td align="center" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative;">
                      <tbody><tr>
                          <td align="center" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative;">
                              <table border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative;">
                                  <tbody><tr>
                                      <td style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative;">
                                          <a href=${path} target="_blank" style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; font-weight: 700; text-size-adjust: none; border-radius: 999px; color: rgb(255, 255, 255); display: inline-block; overflow: hidden; text-decoration: none; padding: 3px 0px; background-color: rgb(21, 34, 52); border-width: 4px 18px; border-style: solid; border-color: rgb(21, 34, 52);">Verify email and continue with registration</a>
                                      </td>
                                  </tr>
                              </tbody></table>
                          </td>
                      </tr>
                  </tbody></table>
              </td>
          </tr>
      </tbody></table>
      <p style="box-sizing: border-box; font-family: Karla, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; position: relative; color: rgb(59, 67, 76); font-size: 16px; font-weight: 300; line-height: 145%; margin-top: 0px; text-align: left;">Sincerely,<br>
      Examico</p>
      
      
                                      
                                </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>
      
      </div>`
    } else {
      return `<head>
      <title></title>
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <style type="text/css">
      #outlook a { padding: 0; }
      .ReadMsgBody { width: 100%; }
      .ExternalClass { width: 100%; }
      .ExternalClass * { line-height:100%; }
      body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
      p { display: block; margin: 13px 0; }
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
      @media only screen and (max-width:480px) {
          @-ms-viewport { width:320px; }
          @viewport { width:320px; }
      }
      </style>
      <!--<![endif]-->
      <!--[if mso]>
      <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if lte mso 11]>
      <style type="text/css">
      .outlook-group-fix {
        width:100% !important;
      }
      </style>
      <![endif]-->
      
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
        <style type="text/css">
      
            @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
      
            // body {
            //   font-family: "Lato", sans-serif;
            //   /* background: #81acc3; */
            // }
            .container{
              margin-bottom: 40px;
            }
            .verification {
              font-weight: bold;
              position: relative;
              padding: 16px 0;
              font-size: 2.5em;
              color: white;
              background-color: #7289DA ;
              border-radius: 4px;
              overflow: hidden;
      
              text-align: center;
              min-width: 280px;
      
              text-shadow: 1px 1px rgba(0, 0, 0, 0.15);
            }
      
            .verification .expire-bar, .verification .color-bar {
              position: absolute;
              left: 0; right: 0; bottom: 0;
              height: 6px;
              background: orange;
            }
      
            .verification.running .color-bar {
                      animation: expire 30s linear;
              -webkit-animation: expire 30s linear;
            }
      
      
        </style>
      <!--<![endif]--><style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100, * [aria-labelledby="mj-column-per-100"] { width:100%!important; }
      }
      </style>
      </head>
      <body style="background: #F9F9F9;">
      <div style="background-color:#F9F9F9;"><!--[if mso | IE]>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="640" align="center" style="width:640px;">
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]-->
      <style type="text/css">
        html, body, * {
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        }
        a {
          color:#1EB0F4;
          text-decoration:none;
        }
        a:hover {
          text-decoration:underline;
        }
      </style>
      <div style="margin:0px auto;max-width:640px;background:transparent;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:transparent;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 0px;"><!--[if mso | IE]>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;">
          <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:138px;"><a href="https://discordapp.com/" target="_blank"><img alt="" title="" height="38px" src="https://cdn.discordapp.com/email_assets/2ec94ed90b8e95d764f2a1c96f33139e.png" style="border:none;border-radius:;display:block;outline:none;text-decoration:none;width:100%;height:38px;" width="138"></a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]-->
          <!--[if mso | IE]>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="640" align="center" style="width:640px;">
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]--><div style="max-width:640px;margin:0 auto;box-shadow:0px 1px 5px rgba(0,0,0,0.1);border-radius:4px;overflow:hidden"><div style="margin:0px auto;max-width:640px;background:#7289DA url(https://cdn.discordapp.com/email_assets/f0a4cc6d7aaa7bdf2a3c15a193c6d224.png) top center / cover no-repeat;"><!--[if mso | IE]>
          <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:640px;">
            <v:fill origin="0.5, 0" position="0.5,0" type="tile" src="https://cdn.discordapp.com/email_assets/f0a4cc6d7aaa7bdf2a3c15a193c6d224.png" />
            <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
          <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#7289DA url(https://cdn.discordapp.com/email_assets/f0a4cc6d7aaa7bdf2a3c15a193c6d224.png) top center / cover no-repeat;" align="center" border="0" background="https://cdn.discordapp.com/email_assets/f0a4cc6d7aaa7bdf2a3c15a193c6d224.png"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:57px;"><!--[if mso | IE]>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:undefined;width:640px;">
          <![endif]--><div style="cursor:auto;color:white;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:36px;font-weight:600;line-height:36px;text-align:center;">Welcome to Examico!</div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]--></td></tr></tbody></table><!--[if mso | IE]>
            </v:textbox>
          </v:rect>
          <![endif]--></div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]-->
          <!--[if mso | IE]>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="640" align="center" style="width:640px;">
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]--><div style="margin:0px auto;max-width:640px;background:#ffffff;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 70px;"><!--[if mso | IE]>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;">
          <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:0px 0px 20px;" align="left"><div style="cursor:auto;color:#737F8D;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;">
                <p><img src="https://cdn.discordapp.com/email_assets/127c95bbea39cd4bc1ad87d1500ae27d.png" alt="Party Wumpus" title="None" width="500" style="height: auto;"></p>
      
      <h2 style="font-family: Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight: 500;font-size: 20px;color: #4F545C;letter-spacing: 0.27px;">Hey ${name},</h2>
      <p>Thank you for using EXAMICO ,will do our best to offer you the best thing.</p>
      <p> number to the service’s reset password .</p>
        <h3>Code :</h3>
        <div class="container">
            <div class="verification">
                <span class="code">${checkNumber}</span>
                <div class="expire-bar">
                    <div class="color-bar"></div>
                </div>
            </div>
        </div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]-->
          <!--[if mso | IE]>
      
          <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
          </td></tr></table>
          <![endif]--></div>
      
      </body>`
      
    }






}
