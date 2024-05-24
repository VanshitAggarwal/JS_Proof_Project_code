/*
   Assessment Requirements
   1. Create a variable that can hold a number of NFT's. What type of variable might this be?
   2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
      The metadata values will be passed to the function as parameters. When the NFT is ready, 
      you will store it in the variable you created in step 1
   3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
   4. For good measure, getTotalSupply() should return the number of NFT's you have created
   */
   
   // create a variable to hold your NFT's
   const Products_NFTs_wallet=[]; 
   
   // this function will take in some values as parameters, create an
   // NFT object using the parameters passed to it for its metadata, 
   // and store it in the variable above.
   function mintNFT (_Product_Name, _Product_ID, _Product_Cost, _Product_Type) {
       const NFT={
           "Product_Name":_Product_Name,
           "Product_ID":_Product_ID,
           "Product_Cost":_Product_Cost,
           "Product_Type":_Product_Type
       };
       Products_NFTs_wallet.push(NFT);
       console.log("Minted: "+_Product_Name);
   }
   
   // create a "loop" that will go through an "array" of NFT's
   // and print their metadata with console.log()
   function listNFTs () {
       for(let  i=0; i<Products_NFTs_wallet.length;i++){
           console.log("\nProduct ID: \t"+ Products_NFTs_wallet[i].Product_ID);
           console.log("Product Name: \t"+Products_NFTs_wallet[i].Product_Name);
           console.log("Product Cost: \t"+ Products_NFTs_wallet[i].Product_Cost);
           console.log("Product Type: \t"+ Products_NFTs_wallet[i].Product_Type);
       }
   }
   
   // print the total number of NFTs we have minted to the console
   function getTotalSupply() {
       console.log("\nThe total number of product NFTs minted to the console are: "+Products_NFTs_wallet.length);
   }
   
   // call your functions below this line
   mintNFT("Laptop", "001", 1500, "Electronics");
   mintNFT("Phone", "002", 800, "Electronics");
   mintNFT("Headphones", "003", 150, "Electronics");
   mintNFT("Watch", "004", 300, "Accessories");
   mintNFT("Sneakers", "005", 120, "Footwear");
   mintNFT("T-shirt", "006", 25, "Apparel");
   mintNFT("Backpack", "007", 50, "Accessories");
   mintNFT("Gaming Console", "008", 400, "Electronics");
   mintNFT("Smart Home Device", "009", 200, "Electronics");
   mintNFT("Sunglasses", "010", 80, "Accessories");
   listNFTs();
   getTotalSupply();
