// 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
var axios = require('axios');
const express = require('express')
const app = express()
app.use(express.json())

const generateOneWayFlightMail = require('./generateOneWayFlightMail')
const generateRoundTripFlightMail = require('./generateRoundTripFlightMail')
const generateBusMail = require('./generateBusMail')

app.post('/sendFlightConfirmationEmail',(req,res)=>{
    console.log(req.body)
    let receivers = req.body.receivers
    let mail = ""
    if (req.body.data.flightType === "oneWay")
      mail = generateOneWayFlightMail(req.body.data)
    else
      mail = generateRoundTripFlightMail(req.body.data)


    let data = JSON.stringify({
        "sender": {
          "name": "Kpay",
          "email": "contact@kleio.me"
        },
        "to": receivers,
        "subject": "Flight Booking Confirmation",
        "htmlContent":mail
    })

    var config = {
        method: 'post',
        url: 'https://api.sendinblue.com/v3/smtp/email',
        headers: {
          'accept': 'application/json',
          'api-key': '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',
          'content-type': 'application/json'
        },
        data: data
      };
      
    axios(config).then(response=> {
        console.log('successfully send',response)
        res.send('API called successfully');
      }, error => {
        console.error(error);
        res.send("API called Failed")
      });
})

app.post('/sendBusConfirmationEmail',(req,res)=>{
    console.log(req.body)

    let receivers = req.body.receivers
    let mail = generateBusMail(req.body.data)

    let data = JSON.stringify({
        "sender": {
          "name": "Kpay",
          "email": "contact@kleio.me"
        },
        "to": receivers,
        "subject": "Flight Booking Confirmation",
        "htmlContent":mail
    })

    var config = {
        method: 'post',
        url: 'https://api.sendinblue.com/v3/smtp/email',
        headers: {
          'accept': 'application/json',
          'api-key': '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',
          'content-type': 'application/json'
        },
        data: data
      };
      
    axios(config).then(response=> {
        console.log('successfully send',response)
        res.send('API called successfully');
      }, error => {
        console.error(error);
        res.send("API called Failed")
      });
})

app.listen(5000,()=>console.log('running on port 5000'))


let flightOneWayTemplate = {
    flightType: "oneWay",
    systemBookingId: "KL-2145-556654646",
    confirmationCode:"WTH34LT",
    origin: "Bucharest",
    originTitle: "OTP",
    destination: "London",
    destinationTitle: "LHR",
    duration: "2h 54m",
    terminal: "A",
    onBoardingTime: "16:45",
    class: "Economy",
    flightNo: "WT897",
    flightDate: "14Jan",
    planeNo: "A320",
    luggage: "1 x 24kg",
    passengerDetails:[
        {
            name: "Hamsika Iyer",
            confirmationNo: "1234567989",
            ticketId: "123456789"
        }
    ],
    passengerPhone: "123456789",
    passengerEmail: "someEmail@gmail.com"
}
// ${data.systemBookingId}
let flightRoundTemplate = {
    flightType: "roundTrip",
    systemBookingId: "KL-2145-556654646",

    // for departure
    departureConfirmationCode:"WTH34LT",
    departureOrigin: "Bucharest",
    departureOriginTitle: "OTP",
    departureDestination: "London",
    departureDestinationTitle: "LHR",
    departureDuration: "2h 54m",
    departureDerminal: "A",
    departureOnBoardingTime: "16:45",
    departureClass: "Economy",
    departureFlightNo: "WT897",
    departureFlightDate: "14Jan",
    departurePlaneNo: "A320",
    departureLuggage: "1 x 24kg",

    // for return
    returnConfirmationCode:"WTH34LT",
    returnOrigin: "Bucharest",
    returnOriginTitle: "OTP",
    returnDestination: "London",
    returnDestinationTitle: "LHR",
    returnDuration: "2h 54m",
    returnDerminal: "A",
    returnOnBoardingTime: "16:45",
    returnClass: "Economy",
    returnFlightNo: "WT897",
    returnFlightDate: "14Jan",
    returnPlaneNo: "A320",
    returnLuggage: "1 x 24kg",

    passengerDetails:[
        {
            name: "Hamsika Iyer",
            confirmationNo: "1234567989",
            ticketId: "123456789"
        }
    ],
    passengerPhone: "123456789",
    passengerEmail: "someEmail@gmail.com"
}

let busTemplate = {
  ticketNo: "WTH34LT",
  pnrNo: "21377",

  busStop: "Prasanna Purple Grand",
  busType: "Ac Sleeper (2+1)",

  startDate: "30 Sep, Monday",
  startTime: "08:00",
  startTimeMeridiem: "pm",
  sourceCity: "Nagpur",
  sourceAddress: "Dharampeth - Prasanna purple, Near Bhole petrol pump, Nagpur 07122529603",

  jorneyDuration: "2h 54m",

  endDate: "31 Sep, Monday",
  endTime: "06:00",
  endTimeMeridiem: "am",
  destinationCity: "Aurangabad",
  destinationAddress: "Parsanna Purple, Mahada Complex Nr Baba Petrol Pump",

  busContact: "928963235",

  passengerDetails:[
    {
      name: "Deepak Tiwari",
      age: "21",
      gender: "MALE",
      seatNo: "13"
    }
  ],

  totalFare: "450"
}