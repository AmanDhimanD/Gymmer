const sql = require('msnodesqlv8');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectionString =
  'server=DESKTOP-50T6J1U\\SQLEXPRESS;Database=ztester;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{

  const query = "SELECT * FROM EmpDetailsData";
  sql.query(connectionString, query, (err, response) => {
    console.log(response)
    res.send(response);
  });
})

app.get("/alert",(req,res)=>{

  let yourDate = new Date()
  let currentDate = yourDate.toISOString().split('T')[0]

  const query = "SELECT * FROM EmpDetailsData where JoiningDate >'"+currentDate+"'";
  //console.log(query)
  sql.query(connectionString, query, (err, response) => {
    console.log(response)
    res.send(response);
  });
})

// API endpoint for data insertion
app.post("/insert", (req, res) => {
  //name: '3678', phoneNumber: '213434', joiningDate: '2023-06-22', fee: '234', paymentMethod: 'Paytm'
  const { name,phoneNumber ,joiningDate,fee, paymentMethod } = req.body;
  // console.log(name)
  // console.log(phoneNumber)
  // console.log(joiningDate)
  // console.log(fee)
  // console.log(paymentMethod)
  const query = `insert into EmpDetailsData(Name,PhoneNumber,JoiningDate,Fee,PaymentMethod) values('${name}',${phoneNumber},'${joiningDate}',${fee},'${paymentMethod}')`
  sql.query(connectionString, query, (err, response) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Data inserted successfully');
    }
  });

});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
