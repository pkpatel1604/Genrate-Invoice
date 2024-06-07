import express from "express";

const app = express()
const port = 3000

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        items : [
         {
            code : "25316IN-0",
            image : "https://www.inart.co.in/cdn/shop/products/DSC_0009.jpg",
            name : "SPAN SQUARE VESSEL 536X457",
            mrp : 720,
            qty : 1
         }   
        ]
    });
});

app.listen(port, () => {
    console.log(`Server listening for port ${port}`);
});