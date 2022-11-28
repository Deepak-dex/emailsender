let html = ""

function generateOneWayFlightMail(data){

    let passengerList = ``
    data.passengerDetails.forEach(elem => {
        passengerList = passengerList.concat(
            `<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content" role="presentation" style="border-bottom:1px solid #e9d8d8;border-left:1px solid #e9d8d8;border-radius:0;border-right:1px solid #e9d8d8;border-top:0 solid #e9d8d8;color:#000;width:550px" width="550">
            <tbody>
            <tr>
            <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;padding-left:10px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
            <tbody>
            <tr>
            <td style="padding-bottom:15px;padding-left:10px;padding-top:15px">
            <div style="color:#101112;direction:ltr;font-family:Montserrat,'Trebuchet MS','Lucida Grande','Lucida Sans Unicode','Lucida Sans',Tahoma,sans-serif;font-size:14px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
            <p style="margin:0">${elem.name}
            </p>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
            <tbody>
            <tr>
            <td style="padding-bottom:15px;padding-left:10px;padding-top:15px">
            <div style="color:#101112;direction:ltr;font-family:Montserrat,'Trebuchet MS','Lucida Grande','Lucida Sans Unicode','Lucida Sans',Tahoma,sans-serif;font-size:14px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
            <p style="margin:0">${elem.confirmationNo}
            </p>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
            <tbody>
            <tr>
            <td style="padding-bottom:15px;padding-left:10px;padding-top:15px">
            <div style="color:#101112;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:14px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
            <p style="margin:0">${elem.ticketId}
            </p>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>`
        )
    });

 html = 
 `<div id=":1nm" class="ii gt" jslog="20277; u014N:xr6bB; 4:W251bGwsbnVsbCxbXV0.">
 <div id=":1nl" class="a3s aiL msg-2665923044573620170 adM">
 <div class="HOEnZb">
 <div class="adm">
 <div id="q_30" class="ajR h4" data-tooltip="Hide expanded content" aria-label="Hide expanded content" aria-expanded="true">
 <div class="ajT"></div>
 </div>
 </div>
 <div class="im"><u></u>
 <div style="background-color:#f9f9f9;margin:0;padding:0">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f9f9f9" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170image_block" role="presentation" width="100%">
 <tbody>
 <tr>
 <td style="padding-left:25px;width:100%;padding-right:0;padding-top:5px;padding-bottom:5px">
 <div align="left" style="line-height:10px"><img alt="Alternate text" src="https://ci6.googleusercontent.com/proxy/nFTsodclpomWbPCxoZqtZ4iFl2Y2JWTvt2maV8sqac5Orh3XxQyT-F8RsciIzMK_a6b5sx5VE1jzmOxy2DM=s0-d-e1-ft#https://img1.niftyimages.com/umdh/vphr/jbri" style="display:block;height:auto;border:0;width:96px;max-width:100%" title="Alternate text" width="96" class="CToWUd" data-bit="iit"></div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-top:5px;padding-bottom:5px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#555;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:12px;text-align:center">
 <span style="color:#ce138c">system
 Booking ID:
 ${data.systemBookingId}</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170image_block" role="presentation" width="100%">
 <tbody>
 <tr>
 <td style="width:100%;padding-right:0;padding-left:0">
 <div align="center" style="line-height:10px"><img alt="Alternate text" class="m_-2665923044573620170big CToWUd" src="https://ci3.googleusercontent.com/proxy/eCQfkFUbeWunb9sxRYbhkUJT27B30A0SAZ_2dDti82GECiuFo8n38OqsdNbgMSx-koNH7jWWWQ1uNMUwCSM=s0-d-e1-ft#https://img1.niftyimages.com/umdh/16or/ch5i" style="display:block;height:auto;border:0;width:550px;max-width:100%" title="Alternate text" width="550" data-bit="iit">
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="background-color:#a9e0ff;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#1678ac;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:center">
 <strong><span style="font-size:16px">Flight
 Confirmation</span></strong>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="background-color:#fff;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px">
 <span style="font-size:17px">Confirmation
 Code</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:10px;padding-left:35px;padding-right:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#f84d80;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px">
 <strong><span style="font-size:20px">${data.confirmationCode}</span></strong>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content" role="presentation" style="background-color:#f84d80;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:10px;padding-top:55px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#fff;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:center">
 <span style="font-size:42px"><strong>${data.originTitle}</strong></span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:45px;padding-left:10px;padding-right:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#fff;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <span style="font-size:17px">${data.origin}</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170image_block" role="presentation" width="100%">
 <tbody>
 <tr>
 <td style="width:100%;padding-right:0;padding-left:0;padding-top:65px">
 <div align="center" style="line-height:10px"><img alt="Alternate text" src="https://ci4.googleusercontent.com/proxy/DfRSo5lZ1pQLWkPhY0g04AokJ1JY_bDmAmxd-MA3qkgC-PfOBwaIz0iVE0vDhXkFsn1ZoQspnkkjchfBKdwH1WSl7luyDldB060ym6IT7p8RETRcmCO0QfJChDBcSCsiWj8wPKb_guSW8m2sIqGP9zS4BZVohwW-LbMWcA=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/898170_882457/Airplane2_1.gif" style="display:block;height:auto;border:0;width:138px;max-width:100%" title="Alternate text" width="138" class="CToWUd" data-bit="iit"></div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-left:10px;padding-right:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#f0efef;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:center">
 <span style="font-size:12px">Flight
 Duration</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:5px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#f0efef;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:center">
 <span style="font-size:12px">${data.duration}</span></p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:10px;padding-top:55px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#fff;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:center">
 <span style="font-size:42px"><strong>${data.destinationTitle}</strong></span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:45px;padding-left:10px;padding-right:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#fff;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <span style="font-size:17px">${data.destination}</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="background-color:#f84d80;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="10" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <div align="center">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="90%">
 <tbody>
 <tr>
 <td style="font-size:1px;line-height:1px;border-top:1px solid #fff">
 <span> </span>
 </td>
 </tr>
 </tbody>
 </table>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="background-color:#f84d80;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="25%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#fff;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <span style="font-size:15px">Terminal</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#fff;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <strong><span style="font-size:18px">${data.terminal}</span></strong>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#fff;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <span style="font-size:15px">Boarding
 Time</span></p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#fff;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <strong><span style="font-size:18px">${data.onBoardingTime}</span></strong>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="25%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#fff;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <span style="font-size:15px">Class</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#fff;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <strong><span style="font-size:18px">${data.class}</span></strong>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="background-color:#f84d80;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <div style="height:5px;line-height:5px;font-size:1px">
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content" role="presentation" style="background-color:#fff;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="10" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td>
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <span style="font-size:15px">Flight</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:15px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <strong><span style="font-size:18px">${data.flightNo}</span></strong>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="10" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td>
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <span style="font-size:15px">Date</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <strong><span style="font-size:18px">${data.flightDate}</span></strong>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="10" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td>
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <span style="font-size:15px">Plane</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;text-align:center">
 <strong><span style="font-size:18px">${data.planeNo}</span></strong>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170image_block" role="presentation" width="100%">
 <tbody>
 <tr>
 <td style="width:100%;padding-right:0;padding-left:0">
 <div align="center" style="line-height:10px"><img alt="Alternate text" class="m_-2665923044573620170big CToWUd" src="https://ci4.googleusercontent.com/proxy/f1bc_9CGZNWqK639XikL0kcNBTvaJIfKK283cTMiLunEkkSgDT3B6uho9Kx4_Uhv8kDNPZvEb_BA5uFBE8o=s0-d-e1-ft#https://img1.niftyimages.com/umdh/k6or/_h5i" style="display:block;height:auto;border:0;width:550px;max-width:100%" title="Alternate text" width="550" data-bit="iit">
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="background-color:#fff;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:10px;padding-left:30px;padding-right:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px">
 <span style="font-size:17px">Booking
 Details</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content" role="presentation" style="background-color:#fff;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-left:35px;padding-right:10px;padding-top:15px;padding-bottom:5px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.5;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:left">
 <span style="font-size:14px">Luggage</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="66.66666666666667%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-left:30px;padding-right:25px;padding-top:15px;padding-bottom:5px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.5;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:left">
 <span style="font-size:14px">${data.luggage} </span></p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content" role="presentation" style="background-color:#fff;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-left:35px;padding-right:10px;padding-top:15px;padding-bottom:5px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.5;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:left">
 <span style="font-size:14px">Class</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="66.66666666666667%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-left:30px;padding-right:25px;padding-top:15px;padding-bottom:5px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.5;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:left">
 <span style="font-size:14px">${data.class}</span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170image_block" role="presentation" width="100%">
 <tbody>
 <tr>
 <td style="width:100%;padding-right:0;padding-left:0">
 <div align="center" style="line-height:10px"><img alt="Alternate text" class="m_-2665923044573620170big CToWUd" src="https://ci6.googleusercontent.com/proxy/BKK5_paI_Gn8refPp7EZclk7Cb4NDh8fERqG9Q8dbyrlS2pn85EfXMDYb36ZUBtCS8SPVYZUvn9f2fOSTb6MPvkG30GICRLSd7LcmgFGDFZanJ8iqeLA4lFxOILLQy9cDjtj=s0-d-e1-ft#https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1661/round_corners_2.png" style="display:block;height:auto;border:0;width:550px;max-width:100%" title="Alternate text" width="550" data-bit="iit">
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="background-color:#fff;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:20px;padding-left:20px;padding-top:25px;text-align:center;width:100%">
 <h1 style="margin:0;color:#000;direction:ltr;font-family:Montserrat,'Trebuchet MS','Lucida Grande','Lucida Sans Unicode','Lucida Sans',Tahoma,sans-serif;font-size:17px;font-weight:400;letter-spacing:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0">
 <span>Passenger Details</span>
 </h1>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content" role="presentation" style="background-color:#fff;border-bottom:1px solid #e9d8d8;border-left:1px solid #e9d8d8;border-radius:2px;border-right:1px solid #e9d8d8;border-top:1px solid #e9d8d8;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;padding-left:10px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:5px;padding-left:30px;padding-top:10px">
 <div style="color:#101112;direction:ltr;font-family:Montserrat,'Trebuchet MS','Lucida Grande','Lucida Sans Unicode','Lucida Sans',Tahoma,sans-serif;font-size:14px;font-weight:700;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">Name</p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:10px;padding-left:15px;padding-top:15px">
 <div style="color:#101112;direction:ltr;font-family:Montserrat,'Trebuchet MS','Lucida Grande','Lucida Sans Unicode','Lucida Sans',Tahoma,sans-serif;font-size:14px;font-weight:700;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">Confirmation
 Number</p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:10px;padding-left:30px;padding-top:15px">
 <div style="color:#101112;direction:ltr;font-family:Montserrat,'Trebuchet MS','Lucida Grande','Lucida Sans Unicode','Lucida Sans',Tahoma,sans-serif;font-size:14px;font-weight:700;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">Ticket id
 </p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 ${passengerList}
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="background-color:#fff;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:20px;padding-left:20px;padding-right:15px;padding-top:25px">
 <div style="color:#101112;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:17px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">Passenger
 Contact Details&nbsp;</p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content" role="presentation" style="background-color:#fff;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-left:30px;padding-top:15px;padding-bottom:5px">
 <div style="color:#101112;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:14px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">Mobile
 number</p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="66.66666666666667%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-left:30px;padding-top:15px;padding-bottom:5px">
 <div style="color:#101112;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:16px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">${data.passengerPhone}
 </p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content" role="presentation" style="background-color:#fff;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-left:30px;padding-top:15px;padding-bottom:5px">
 <div style="color:#101112;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:14px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">Email id</p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="66.66666666666667%">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td style="padding-left:30px;padding-top:15px;padding-bottom:5px">
 <div style="color:#101112;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:14px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0"><span id="m_-2665923044573620170da037f97-3fc4-4ce7-9c98-b61fb949d2f7">${data.passengerEmail}</span>
 </p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="background-color:#fff;border-radius:0 0 20px 20px;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <div style="height:35px;line-height:35px;font-size:1px">
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170image_block" role="presentation" width="100%">
 <tbody>
 <tr>
 <td style="padding-bottom:15px;width:100%;padding-right:0;padding-left:0;padding-top:35px">
 <div align="center" style="line-height:10px"><img alt="Alternate text" src="https://ci6.googleusercontent.com/proxy/nFTsodclpomWbPCxoZqtZ4iFl2Y2JWTvt2maV8sqac5Orh3XxQyT-F8RsciIzMK_a6b5sx5VE1jzmOxy2DM=s0-d-e1-ft#https://img1.niftyimages.com/umdh/vphr/jbri" style="display:block;height:auto;border:0;width:120px;max-width:100%" title="Alternate text" width="120" class="CToWUd" data-bit="iit"></div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="10" cellspacing="0" class="m_-2665923044573620170social_block" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <div align="center">
 <table border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170social-table" role="presentation" style="display:inline-block" width="168px">
 <tbody>
 <tr>
 <td style="padding:0 5px 0 5px">
 <a href="https://m.facebook.com/kleio.me/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://m.facebook.com/kleio.me/&amp;source=gmail&amp;ust=1669362399702000&amp;usg=AOvVaw1BKRdlEe91mTcejocToa4J"><img alt="Facebook" height="32" src="https://ci6.googleusercontent.com/proxy/C_sYcj5sX3-0oQ0so-WWXkWja3sKXgrMs98Z0E3GiAZPk9TRwXLZxQoD60hND9osNZBISaxU7OGJb-dXD3EZxAJ9kWG7TjtxnS5l78as3X9hznRU0cubKtjHDaf22setsgOo2ndl1uGwU8pK6N-Jquz8mdPuq6Va2JrSe0a1=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/facebook@2x.png" style="display:block;height:auto;border:0" title="Facebook" width="32" class="CToWUd" data-bit="iit"></a>
 </td>
 <td style="padding:0 5px 0 5px">
 <a href="https://mobile.twitter.com/kleio_me" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://mobile.twitter.com/kleio_me&amp;source=gmail&amp;ust=1669362399702000&amp;usg=AOvVaw2LDW_nGhFNBLXrtCZl__tp"><img alt="Twitter" height="32" src="https://ci3.googleusercontent.com/proxy/2KehlxDRuivJK2BCduZAQTJvBJusSt9DxzRVldw1JejLP4XUsR5auDAjxHaW5i1EafUaGT7bwUnWDxb5kmNhJk7kVUYbVtOzbzNoYnVK1FMs6LPJspxLEgp1vv_-O-G58kxfWAwiJPJKqtTuo4j0NtXHOb70KQXTcYOfvXY=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/twitter@2x.png" style="display:block;height:auto;border:0" title="Twitter" width="32" class="CToWUd" data-bit="iit"></a>
 </td>
 <td style="padding:0 5px 0 5px">
 <a href="https://www.instagram.com/kleio.me/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/kleio.me/&amp;source=gmail&amp;ust=1669362399703000&amp;usg=AOvVaw1mt4a28c6p1d0LeLi9CMGO"><img alt="Instagram" height="32" src="https://ci6.googleusercontent.com/proxy/1OmVA7ilI1DUNy8do2uWJdIdvQ-sLFP9O_zBNHReGFMFDzj6IgsBLiosXkzY4rvvrOB12WsdHd6lgK8PxCcX94AMku5fJ_BsyRxcxYRKRWVR6Gc0JMXGpIxrkE_W4bRq0o1d_NnRpcSSkJDeftcBVUOasBRyrg1U4D7KfpQTWg=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png" style="display:block;height:auto;border:0" title="Instagram" width="32" class="CToWUd" data-bit="iit"></a>
 </td>
 <td style="padding:0 5px 0 5px">
 <a href="https://www.linkedin.com/company/kleio-innovation-labs-pvt-ltd/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/company/kleio-innovation-labs-pvt-ltd/&amp;source=gmail&amp;ust=1669362399703000&amp;usg=AOvVaw3lLaK3rlAI8dd70QKTDbWP"><img alt="LinkedIn" height="32" src="https://ci6.googleusercontent.com/proxy/g4dEpwAtpBZDHU_D26cz1OH9W1kFmE2tEoqwBPctDEzXBB5I5v5t82VRIxU3yxfXkL2l2XGWH8MReiGdS5Ttv8fbjrZgaCP_HGCamWfi9I_2LmzzA3jrHOCGRF3VojgXw5jaZN77l7MC5f_JRQKnM7KjG9kB2-KDNRZYoVG_=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/linkedin@2x.png" style="display:block;height:auto;border:0" title="LinkedIn" width="32" class="CToWUd" data-bit="iit"></a>
 </td>
 </tr>
 </tbody>
 </table>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="10" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <div align="center">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="95%">
 <tbody>
 <tr>
 <td style="font-size:1px;line-height:1px;border-top:1px dashed #bbb">
 <span> </span>
 </td>
 </tr>
 </tbody>
 </table>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-2665923044573620170row-content m_-2665923044573620170stack" role="presentation" style="border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_-2665923044573620170column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="10" cellspacing="0" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td>
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:center">
 <a href="mailto:contact@kleio.me?subject=Air%20ticket%20booking%20query" rel="noopener" style="text-decoration:none;color:#626262" title="contact@kleio.me" target="_blank">Need
 Help ? contact us at
 <span style="color:#f84d80">contact@kleio.me</span></a>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
 </div>
 </div>
 </div>`

return html
}

module.exports = generateOneWayFlightMail