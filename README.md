# Trustified.Network :  A smart contract assured Escrow Agreement and Payment platform which helps individuals and businesses to grow globally and increase profit margins. 🤝

## Problem we are solving: 

**“Trust”** is a key factor for successful transactions between parties. To ensure trust, we involve third party freelancing platforms or middlemen and pay hefty commissions which highly affect the overall profit margins of parties involved in a transaction. 

## Sell Digital Services Globally. Accept crypto payments without paying Hefty Commissions.

**Trustified.network** is a smart contract assured Escrow Agreement and Payment platform which helps individuals and businesses to grow globally and increase profit margins in four simple steps: 

**1) List Products,Services or subscription packages.**

**2) Create Escrow agreements with personalize terms as per customers.**

**3) Send/Receive crypto payments in a reliable and secure way without paying hefty commissions to third parties.**

**4) Trust Score: Rate your experience of working with each other and get rewarded for best Trust Score.**  

## Tech Stack

**NEON:** Used Neon Ethereum virtual machine to port our Ethereum based Dapp into Solana ecosystem.

![Screenshot 2022-05-15 at 9 30 20 AM](https://user-images.githubusercontent.com/45895007/168456621-856606de-06b2-4ee6-87f6-4f730475efbd.png)

https://neonscan.org/address/0x0424e290a639e7b93eA37861e206B9E05a65b89F

https://github.com/Trustified-Network/Neo-Solana/blob/master/src/network/Network.js

```javascript

const NEONLABS = {
    chainId: '0x245022926',
    chainName: "neonlabs",
    rpcUrls: ["https://proxy.devnet.neonlabs.org/solana"],
    nativeCurrency: {
        name: "NEON",
        symbol: "NEON",
        decimals: 18,
    },
    blockExplorerUrls: ["https://neonscan.org"],
} 
export { NEONLABS };

```

**💾 IPFS/Filecoin web3.Storage:** We are Using Web3.Storage, to permanently store all the details of user invoices and subscription service on decentralized storage. 

https://github.com/Trustified-Network/Neo-Solana/blob/master/src/modal/CreateSubscribtionModal.js

```javascript

function makeFileObjects(data) {  
    const blob = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });

    const files = [new File([blob], "subscribtion_Details.json")];
    return files;
  }

  async function onChange(e) {
    setUploading(true);
    const file = e.target.files[0];
    try {
      const fileIpfs = await saveFile("trustified", file, { saveIPFS: true });
      const moralisFile = new Moralis.File("trustified_subscribtion", file);

      setFileUrl(fileIpfs);
      toast.success("Image uploaded Successfully!!");
      setUploading(false);
    } catch (error) {
      setUploading(false);
      toast.error("Error uploading file!!");
      console.log("Error uploading file: ", error);
    }
  }

```


 
**Web3Auth:** Used Web3Auth for seamless user on boarding with it's non-custodial auth infrastructure. 

https://github.com/Trustified-Network/Neo-Solana/blob/master/src/context/Web3Context.js

```javascript

const web3Auth = async () => {
       await authenticate({
            provider: 'web3Auth',  
            clientId: 'BBENwjOPTAuM5OJ3bWkmkhpig5Z67iLKCUeDLy-JF6dv4PkYHnwWfL4NQU3S2LscSEV4g-dsUjDj4NgbCgUot4s',
            appLogo: '/images/trustifiednetwork-logo.png',
            loginMethodsOrder: ["google", "facebook", "twitter", "reddit", "github", "linkedin", "email_passwordless"]
        });
        navigate("/dashboard/app");  
    }

```

## Homepage
![Screenshot 2022-05-15 at 12 37 54 AM](https://user-images.githubusercontent.com/45895007/168445378-084aed6c-a2ca-4a7f-8958-abcce9ed27c0.png)

## Web3Auth
![Screenshot 2022-05-15 at 12 38 25 AM](https://user-images.githubusercontent.com/45895007/168445396-f7661c90-7d95-4592-8852-7bad94d3f31c.png)

## Escrow Agreement

![screencapture-trustified-network-dashboard-agreement-2022-05-15-00_36_25](https://user-images.githubusercontent.com/45895007/168445460-e1b5273b-707a-42ad-83a6-a7293afe7d0f.png)

## Invoice

![Screenshot 2022-05-15 at 12 42 40 AM](https://user-images.githubusercontent.com/45895007/168445485-b9a149b0-3db8-43b7-97c2-c22e50c082d8.png)

## Product / Services

![Screenshot 2022-05-15 at 12 42 17 AM](https://user-images.githubusercontent.com/45895007/168445499-d06ebe8e-2e8a-4a05-9ef1-d7bbb8de680c.png)

## Crypto Payment

![Screenshot 2022-05-15 at 12 37 16 AM](https://user-images.githubusercontent.com/45895007/168445507-ab0ad054-7f7b-456d-a477-f69a7db25e6e.png)

## Analytics

![Screenshot 2022-05-15 at 12 35 38 AM](https://user-images.githubusercontent.com/45895007/168445532-beda80f6-380b-44c2-9e5f-567c2d3c5287.png)


## WAGMI 😊🚀∞




