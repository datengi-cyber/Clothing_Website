const express = require("express");
const { main } = require("./models/index");
const productRoute = require("./router/product");
const storeRoute = require("./router/store");
const purchaseRoute = require("./router/purchase");
const salesRoute = require("./router/sales");
const cors = require("cors");
const User = require("./models/users");
const Product = require("./models/product");


const app = express();
const PORT = 4000;
main();
app.use(express.json());
app.use(cors());

// Store API
app.use("/api/store", storeRoute);

// Products API
app.use("/api/product", productRoute);

// Purchase API
app.use("/api/purchase", purchaseRoute);

// Sales API
app.use("/api/sales", salesRoute);

// ------------- Signin --------------
let userAuthCheck;
app.post("/api/login", async (req, res) => {
  console.log(req.body);
  // res.send("hi");
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log("USER: ", user);
    if (user) {
      res.send(user);
      userAuthCheck = user;
    } else {
      res.status(401).send("Invalid Credentials");
      userAuthCheck = null;
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// Getting User Details of login user
app.get("/api/login", (req, res) => {
  res.send(userAuthCheck);
});
// ------------------------------------

// Registration API
app.post("/api/register", (req, res) => {
  let registerUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    imageUrl: req.body.imageUrl,
  });

  registerUser
    .save()
    .then((result) => {
      res.status(200).send(result);
      alert("Signup Successfull");
    })
    .catch((err) => console.log("Signup: ", err));
  console.log("request: ", req.body);
});


app.get("/testget", async (req,res)=>{
  const result = await Product.findOne({ _id: '661e85616c9d1515ad6fbf6d'})
  res.json(result)

})

// Here we are listening to the server
app.listen(PORT, () => {
  console.log(`Server is running on port, ${PORT}`);
});



// // without the authication
// const express = require("express");
// const { main } = require("./models/index");
// const productRoute = require("./router/product");
// const storeRoute = require("./router/store");
// const purchaseRoute = require("./router/purchase");
// const salesRoute = require("./router/sales");
// const cors = require("cors");
// const Product = require("./models/product");

// const app = express();
// const PORT = 4000;
// main();
// app.use(express.json());
// app.use(cors());

// // Store API
// app.use("/api/store", storeRoute);

// // Products API
// app.use("/api/product", productRoute);

// // Purchase API
// app.use("/api/purchase", purchaseRoute);

// // Sales API
// app.use("/api/sales", salesRoute);

// // This route is not necessary anymore
// // app.post("/api/login", async (req, res) => { ... });

// // This route is not necessary anymore
// // app.get("/api/login", (req, res) => { ... });

// // This route is not necessary anymore
// // app.post("/api/register", (req, res) => { ... });

// app.get("/testget", async (req,res)=>{
//   const result = await Product.findOne({ _id: ''})
//   res.json(result)
// })

// app.get("/",(req,res)=>{
//   res.send("connection successfully")
// })

// // Here we are listening to the server
// app.listen(PORT, () => {
//   console.log("Server is running on port", PORT);
// });