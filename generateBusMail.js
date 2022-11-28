let html = ""

function generateBusMail(data){

    let passengerList = ``
    let passengerSeatList = ``
    data.passengerDetails.forEach(elem => {
        passengerList = passengerList.concat(
            `<table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-3" role="presentation" style="word-break:break-word" width="100%">
            <tbody>
            <tr>
            <td class="m_1552384026248449136pad" style="padding-left:35px;padding-right:5px;padding-top:5px">
            <div style="font-family:sans-serif">
            <div style="font-size:12px;color:#232323;line-height:1.5;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
            <p style="margin:0;font-size:14px;text-align:left">
            <strong><span style="font-size:16px">${elem.name}</span></strong></p>
            </div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-4" role="presentation" style="word-break:break-word" width="100%">
            <tbody>
            <tr>
            <td class="m_1552384026248449136pad" style="padding-bottom:5px;padding-left:35px;padding-right:5px">
            <div style="font-family:sans-serif">
            <div style="font-size:12px;color:#232323;line-height:1.5;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
            <p style="margin:0;font-size:14px;text-align:left">
            <span style="font-size:14px">${elem.age}Yrs,
            ${elem.gender}</span>
            </p>
            </div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>`
        )
        passengerSeatList = passengerSeatList.concat(
            `<table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-3" role="presentation" style="word-break:break-word" width="100%">
            <tbody>
            <tr>
            <td class="m_1552384026248449136pad" style="padding-bottom:15px;padding-top:15px">
            <div style="font-family:sans-serif">
            <div style="font-size:12px;color:#232323;line-height:1.5;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
            <p style="margin:0;font-size:14px;text-align:center">
            <strong><span style="font-size:16px"><span style="font-size:17px">${elem.seatNo}</span></span></strong>
            </p>
            </div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>`
        )
    });

 html = 
 `<div id=":16h" class="a3s aiL msg1552384026248449136"><u></u>
 <div style="background-color:#f9f9f9;margin:0;padding:0">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f9f9f9" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136image_block m_1552384026248449136block-2" role="presentation" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-left:15px;width:100%;padding-right:0;padding-top:5px;padding-bottom:5px">
 <div align="left" style="line-height:10px"><img alt="Alternate text" src="https://ci6.googleusercontent.com/proxy/nFTsodclpomWbPCxoZqtZ4iFl2Y2JWTvt2maV8sqac5Orh3XxQyT-F8RsciIzMK_a6b5sx5VE1jzmOxy2DM=s0-d-e1-ft#https://img1.niftyimages.com/umdh/vphr/jbri" style="display:block;height:auto;border:0;width:96px;max-width:100%" title="Alternate text" width="96" class="CToWUd" data-bit="iit"></div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_1552384026248449136column m_1552384026248449136column-2" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:20px;padding-left:15px;padding-right:20px;padding-top:20px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#f84d80;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:12px">
 &nbsp;</p>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136image_block m_1552384026248449136block-1" role="presentation" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="width:100%;padding-right:0;padding-left:0">
 <div align="center" style="line-height:10px">
 <img alt="Alternate text" class="m_1552384026248449136big CToWUd" src="https://ci5.googleusercontent.com/proxy/m5QzEPWD1MA4vPV-xQkvTaBpvL9r_UUZSdKplsJVeWFwLaVGhxmi2cLRo0-Ha9BNnGk7I3EgRSpZHmZnJxNSs-K7gu0QlSo5EskCF9MSlhb94irTuLQSwjmr4H3xQr1B-RgZdA=s0-d-e1-ft#https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1661/top_round_corner.png" style="display:block;height:auto;border:0;width:550px;max-width:100%" title="Alternate text" width="550" data-bit="iit"></div>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="background-color:#a9e0ff;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-1" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#1678ac;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:center">
 <strong><span style="font-size:16px">Bus
 Ticket
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-4" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content" role="presentation" style="background-color:#fff;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:15px">
 <div style="color:#101112;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:17px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">Ticket Number</p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-3" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:15px;padding-left:40px;padding-right:10px;padding-top:10px">
 <div style="color:#f84d80;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:20px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0"><strong>${data.ticketNo}</strong>
 </p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_1552384026248449136column m_1552384026248449136column-2" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:15px">
 <div style="color:#101112;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:17px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">PNR Number</p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-3" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:15px;padding-left:40px;padding-right:10px;padding-top:10px">
 <div style="color:#f84d80;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:20px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0"><strong>${data.pnrNo}</strong>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-5" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content" role="presentation" style="background-color:#f84d80;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:bottom;border-top:0;border-right:0;border-bottom:0;border-left:0" width="25%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136image_block m_1552384026248449136block-2" role="presentation" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="width:100%;padding-right:0;padding-left:0;padding-top:5px;padding-bottom:5px">
 <div align="center" style="line-height:10px">
 <img src="https://ci5.googleusercontent.com/proxy/TkP3yoqgimhWDtKzcdmapcJ1CBUFWaqbVQLRntIX_kzs_22EdotyMZ2uOL7f6VB4h1yk1OTt7d8yeg286tuaEizK6ZEycuL5M0v-x_v50yhLfNvjTILpcwBjfNxFOsJHImOVUKCWYpE33-d6XGhcY6E8sWUShIRGOtFT47GU4HxTHvArlaea-FXgKyA=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/898170_882457/editor_images/Bus%20%281%29.png" style="display:block;height:auto;border:0;width:65px;max-width:100%" width="65" class="CToWUd" data-bit="iit"></div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_1552384026248449136column m_1552384026248449136column-2" style="font-weight:400;text-align:left;vertical-align:bottom;border-top:0;border-right:0;border-bottom:0;border-left:0" width="75%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:5px;padding-right:5px;padding-top:10px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:15px;font-weight:700;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">${data.busStop}
 </p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-3" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:10px;padding-right:5px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:15px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">${data.busType}</p>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="background-color:#f84d80;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="10" cellspacing="0" class="m_1552384026248449136block-1" role="presentation" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad">
 <div align="center">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="90%">
 <tbody>
 <tr>
 <td style="font-size:1px;line-height:1px;border-top:1px solid #fff">
 <span> </span></td>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-7" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content" role="presentation" style="background-color:#f84d80;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-left:5px;padding-right:5px;padding-top:10px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:15px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center">
 <p style="margin:0"><strong>${data.startDate}</strong></p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-3" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-top:5px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:34px;font-weight:700;letter-spacing:0;line-height:120%;text-align:center">
 <p style="margin:0">
 <strong>${data.startTime}</strong>
 </p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-4" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:5px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:16px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center">
 <p style="margin:0"><strong>${data.startTimeMeridiem}</strong></p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_1552384026248449136column m_1552384026248449136column-2" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:5px;padding-top:5px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:15px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center">
 <p style="margin:0">Jorney Duration</p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-3" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:15px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center">
 <p style="margin:0">${data.jorneyDuration}</p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136image_block m_1552384026248449136block-4" role="presentation" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="width:100%;padding-right:0;padding-left:0;padding-bottom:5px">
 <div align="center" style="line-height:10px">
 <img src="https://ci6.googleusercontent.com/proxy/7PGxchOM-WsenusucVdo1gKjM7jWhjFgImUC_8luo6d94md-6LvnaF3m2xd8YNQ7T6BJiELZOxCNggo63dQWnWZwesyLw4_2PsxVqVR1hudjz_rsodmKCgEUErP-QB6s8I9F974I9lc9bInoiztCf-0IqGUNMy37NUcMoW18agBaOLOOHSJ4BNUqRQVAUUN9kA2lHo3KQ0MgN6ETWMHpx87gUxc=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/898170_882457/editor_images/e87134d1-8212-41c3-a6cb-206cdf7dec89.png" style="display:block;height:auto;border:0;width:183px;max-width:100%" width="183" class="CToWUd" data-bit="iit"></div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_1552384026248449136column m_1552384026248449136column-3" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-left:5px;padding-right:5px;padding-top:10px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:15px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center">
 <p style="margin:0"><strong>${data.endDate}</strong></p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-3" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-top:5px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:34px;font-weight:700;letter-spacing:0;line-height:120%;text-align:center">
 <p style="margin:0"><strong>${data.endTime}</strong>
 </p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-4" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:5px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:16px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center">
 <p style="margin:0"><strong>${data.endTimeMeridiem}</strong></p>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-8" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="background-color:#f84d80;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:10px;padding-left:30px;padding-right:10px;padding-top:15px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:17px;font-weight:700;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0"><strong>${data.sourceCity}</strong>
 </p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-3" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-left:30px;padding-right:10px;padding-bottom:5px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:15px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left">
 <p style="margin:0">${data.sourceAddress}</p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_1552384026248449136column m_1552384026248449136column-2" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:10px;padding-left:10px;padding-right:30px;padding-top:15px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:17px;font-weight:700;letter-spacing:0;line-height:120%;text-align:right">
 <p style="margin:0">
 <strong>${data.destinationCity}</strong></p>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136paragraph_block m_1552384026248449136block-3" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-left:10px;padding-right:30px;padding-bottom:5px">
 <div style="color:#fff;direction:ltr;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;font-size:16px;font-weight:400;letter-spacing:0;line-height:120%;text-align:right">
 <p style="margin:0">${data.destinationAddress}</p>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="background-color:#f84d80;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <div style="height:5px;line-height:5px;font-size:1px"> </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 </tbody>
 </table>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-10" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="background-color:#fff;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-1" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:10px;padding-left:30px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:left">
 <span style="font-size:18px"><strong><span>Bus
 Contact
 Details</span></strong></span>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-11" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content" role="presentation" style="background-color:#fff;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-left:35px;padding-right:5px;padding-top:10px;padding-bottom:5px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#757575;line-height:1.5;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:left">
 <strong><span style="font-size:16px">Contact
 No</span></strong>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_1552384026248449136column m_1552384026248449136column-2" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:10px;padding-top:10px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.5;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:center">
 <strong><span style="font-size:16px"><span style="font-size:17px">${data.busContact}</span></span></strong>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136image_block m_1552384026248449136block-1" role="presentation" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="width:100%;padding-right:0;padding-left:0">
 <div align="center" style="line-height:10px">
 <img alt="Alternate text" class="m_1552384026248449136big CToWUd" src="https://ci6.googleusercontent.com/proxy/BKK5_paI_Gn8refPp7EZclk7Cb4NDh8fERqG9Q8dbyrlS2pn85EfXMDYb36ZUBtCS8SPVYZUvn9f2fOSTb6MPvkG30GICRLSd7LcmgFGDFZanJ8iqeLA4lFxOILLQy9cDjtj=s0-d-e1-ft#https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1661/round_corners_2.png" style="display:block;height:auto;border:0;width:550px;max-width:100%" title="Alternate text" width="550" data-bit="iit"></div>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-13" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content" role="presentation" style="background-color:#fff;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:10px;padding-left:30px;padding-top:15px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px">
 <span style="font-size:18px"><strong><span>Passenger
 Details</span></strong></span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 ${passengerList}
 </td>
 <td class="m_1552384026248449136column m_1552384026248449136column-2" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:10px;padding-left:30px;padding-right:10px;padding-top:15px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:center">
 <span style="font-size:18px"><strong><span>Seat
 Number</span></strong></span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 ${passengerSeatList}
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="background-color:#fff;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136image_block m_1552384026248449136block-1" role="presentation" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="width:100%;padding-right:0;padding-left:0">
 <div align="center" style="line-height:10px">
 <img alt="Alternate text" class="m_1552384026248449136big CToWUd" src="https://ci6.googleusercontent.com/proxy/BKK5_paI_Gn8refPp7EZclk7Cb4NDh8fERqG9Q8dbyrlS2pn85EfXMDYb36ZUBtCS8SPVYZUvn9f2fOSTb6MPvkG30GICRLSd7LcmgFGDFZanJ8iqeLA4lFxOILLQy9cDjtj=s0-d-e1-ft#https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1661/round_corners_2.png" style="display:block;height:auto;border:0;width:550px;max-width:100%" title="Alternate text" width="550" data-bit="iit"></div>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-15" role="presentation" width="100%">
 <tbody>
 <tr>
 <td>
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content" role="presentation" style="background-color:#fff;border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-left:35px;padding-top:5px;padding-bottom:5px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#e55881;line-height:1.5;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:left">
 <span style="font-size:18px"><strong><span>Total
 Fare</span></strong></span>
 </p>
 </div>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </td>
 <td class="m_1552384026248449136column m_1552384026248449136column-2" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-2" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-top:5px;padding-bottom:5px">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#e55881;line-height:1.5;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:center">
 <span style="font-size:18px"><strong><span>₹ ${data.totalFare}</span></strong></span>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136image_block m_1552384026248449136block-1" role="presentation" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="width:100%;padding-right:0;padding-left:0">
 <div align="center" style="line-height:10px">
 <img alt="Alternate text" class="m_1552384026248449136big CToWUd" src="https://ci3.googleusercontent.com/proxy/1-gNOn4haghiRcsND4vYma8fpS8UNXwP_Oeht50iK227Wy8Jz_5w1rAdKzLcfbCL-uWVWCEEDhGEpiRmGTP1NfxWdMEFowb_5_zv1cVxFFkeqT3Il4Bla1WkrV97sg=s0-d-e1-ft#https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1661/down_round.png" style="display:block;height:auto;border:0;width:550px;max-width:100%" title="Alternate text" width="550" data-bit="iit"></div>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136image_block m_1552384026248449136block-2" role="presentation" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad" style="padding-bottom:15px;width:100%;padding-right:0;padding-left:0;padding-top:35px">
 <div align="center" style="line-height:10px">
 <img alt="Alternate text" src="https://ci6.googleusercontent.com/proxy/nFTsodclpomWbPCxoZqtZ4iFl2Y2JWTvt2maV8sqac5Orh3XxQyT-F8RsciIzMK_a6b5sx5VE1jzmOxy2DM=s0-d-e1-ft#https://img1.niftyimages.com/umdh/vphr/jbri" style="display:block;height:auto;border:0;width:120px;max-width:100%" title="Alternate text" width="120" class="CToWUd" data-bit="iit"></div>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="10" cellspacing="0" class="m_1552384026248449136social_block m_1552384026248449136block-1" role="presentation" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad">
 <div align="center">
 <table border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136social-table" role="presentation" style="display:inline-block" width="168px">
 <tbody>
 <tr>
 <td style="padding:0 5px 0 5px">
 <a href="https://m.facebook.com/kleio.me/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://m.facebook.com/kleio.me/&amp;source=gmail&amp;ust=1669553871346000&amp;usg=AOvVaw3feW3HPxT34MU2rtklY9Vj"><img alt="Facebook" height="32" src="https://ci6.googleusercontent.com/proxy/C_sYcj5sX3-0oQ0so-WWXkWja3sKXgrMs98Z0E3GiAZPk9TRwXLZxQoD60hND9osNZBISaxU7OGJb-dXD3EZxAJ9kWG7TjtxnS5l78as3X9hznRU0cubKtjHDaf22setsgOo2ndl1uGwU8pK6N-Jquz8mdPuq6Va2JrSe0a1=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/facebook@2x.png" style="display:block;height:auto;border:0" title="Facebook" width="32" class="CToWUd" data-bit="iit"></a>
 </td>
 <td style="padding:0 5px 0 5px">
 <a href="https://mobile.twitter.com/kleio_me" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://mobile.twitter.com/kleio_me&amp;source=gmail&amp;ust=1669553871346000&amp;usg=AOvVaw00RueaUUnlO-rDRlnkWRCR"><img alt="Twitter" height="32" src="https://ci3.googleusercontent.com/proxy/2KehlxDRuivJK2BCduZAQTJvBJusSt9DxzRVldw1JejLP4XUsR5auDAjxHaW5i1EafUaGT7bwUnWDxb5kmNhJk7kVUYbVtOzbzNoYnVK1FMs6LPJspxLEgp1vv_-O-G58kxfWAwiJPJKqtTuo4j0NtXHOb70KQXTcYOfvXY=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/twitter@2x.png" style="display:block;height:auto;border:0" title="Twitter" width="32" class="CToWUd" data-bit="iit"></a>
 </td>
 <td style="padding:0 5px 0 5px">
 <a href="https://www.instagram.com/kleio.me/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/kleio.me/&amp;source=gmail&amp;ust=1669553871346000&amp;usg=AOvVaw3BGOslLVbWHw32pHBaaao3"><img alt="Instagram" height="32" src="https://ci6.googleusercontent.com/proxy/1OmVA7ilI1DUNy8do2uWJdIdvQ-sLFP9O_zBNHReGFMFDzj6IgsBLiosXkzY4rvvrOB12WsdHd6lgK8PxCcX94AMku5fJ_BsyRxcxYRKRWVR6Gc0JMXGpIxrkE_W4bRq0o1d_NnRpcSSkJDeftcBVUOasBRyrg1U4D7KfpQTWg=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png" style="display:block;height:auto;border:0" title="Instagram" width="32" class="CToWUd" data-bit="iit"></a>
 </td>
 <td style="padding:0 5px 0 5px">
 <a href="https://www.linkedin.com/company/kleio-innovation-labs-pvt-ltd/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/company/kleio-innovation-labs-pvt-ltd/&amp;source=gmail&amp;ust=1669553871346000&amp;usg=AOvVaw08SUtEbTRkF_x92iTluGbs"><img alt="LinkedIn" height="32" src="https://ci6.googleusercontent.com/proxy/g4dEpwAtpBZDHU_D26cz1OH9W1kFmE2tEoqwBPctDEzXBB5I5v5t82VRIxU3yxfXkL2l2XGWH8MReiGdS5Ttv8fbjrZgaCP_HGCamWfi9I_2LmzzA3jrHOCGRF3VojgXw5jaZN77l7MC5f_JRQKnM7KjG9kB2-KDNRZYoVG_=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/linkedin@2x.png" style="display:block;height:auto;border:0" title="LinkedIn" width="32" class="CToWUd" data-bit="iit"></a>
 </td>
 </tr>
 </tbody>
 </table>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 <table border="0" cellpadding="10" cellspacing="0" class="m_1552384026248449136block-2" role="presentation" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad">
 <div align="center">
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="95%">
 <tbody>
 <tr>
 <td style="font-size:1px;line-height:1px;border-top:1px dashed #bbb">
 <span> </span></td>
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
 <table align="center" border="0" cellpadding="0" cellspacing="0" class="m_1552384026248449136row-content m_1552384026248449136stack" role="presentation" style="border-radius:0;color:#000;width:550px" width="550">
 <tbody>
 <tr>
 <td class="m_1552384026248449136column m_1552384026248449136column-1" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
 <table border="0" cellpadding="10" cellspacing="0" class="m_1552384026248449136text_block m_1552384026248449136block-1" role="presentation" style="word-break:break-word" width="100%">
 <tbody>
 <tr>
 <td class="m_1552384026248449136pad">
 <div style="font-family:sans-serif">
 <div style="font-size:12px;color:#232323;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">
 <p style="margin:0;font-size:14px;text-align:center">
 <a href="mailto:contact@kleio.me?subject=Air%20ticket%20booking%20query" rel="noopener" style="text-decoration:none;color:#626262" title="contact@kleio.me" target="_blank">Need Help ?
 contact us at <span style="color:#f84d80">contact@kleio.me</span></a>
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
 </div>`

return html
}

module.exports = generateBusMail