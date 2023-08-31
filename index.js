const scrapeIt = require("scrape-it");

// Promise interface
scrapeIt("https://www.land.com/United-States/all-land/over-250000/zoom-4/bounds-10.009743101726063-n152.8628311522594-63.56704174504707-n59.6987686522594/?sk=oi|aH|{`hUvjw_Aun`GytvMo}go@wiqo@}clLmhbKfmiw@f}sIzclL", {
    lands: {
        listItem: ".d086e",
        data: {
            // Get the article date and convert it into a Date object
            price: {
                selector: "._0e5d5 > a",
            },
        },
    },
}).then(({ data, status }) => {
    console.log(`Status Code: ${status}`);
    console.log(data);
});
