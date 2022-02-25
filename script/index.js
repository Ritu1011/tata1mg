



// header
var signup_modal = document.getElementById("signup_modal");
var login_modal = document.getElementById("login_modal");
var signup_close = document.getElementById("signup_close");
var login_close = document.getElementById("login_close");

// Get the button that opens the modal
var login_btn = document.getElementById("login_button");


var signup_btn = document.getElementById("signup_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
login_btn.onclick = function() {
  login_modal.style.display = "block";
}

signup_btn.onclick = function() {
    signup_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
login_close.onclick = function() {
  login_modal.style.display = "none";
}

signup_close.onclick = function() {
    signup_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == (login_modal || signup_modal)) {
    login_modal.style.display = "none";
    signup_modal.style.display = "none";
  }
}


let cart_icon = document.getElementById("cart_icon");
cart_icon.onclick = function(){
  console.log(window.location.href);
  window.location.href = "cart.html";
}

let search_input = document.getElementById("search_input");
search_input.oninput = function(){
  console.log(event.target.value);
  localStorage.setItem("searchItem", event.target.value);
}

let login_number_input = document.getElementById("login_number_input");
login_number_input.oninput = function(){
 
  console.log(event.target.value);
  localStorage.setItem("loginNumber", event.target.value);
  
  alert("login successful")
  

}


let signup_number_input = document.getElementById("signup_number_input");
signup_number_input.oninput = function(){
  console.log(event.target.value);
  localStorage.setItem("signupNumber", event.target.value);
}

data=[
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1639374195/ixf4iobikufzvc90ww5p.png",
        name:"Kerela Ayurveda"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1639374256/evscbjzmltxnmmnzmivh.jpg",
        name:"Complan"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1639456268/nedakgub3be2qu7mpm27.png",
        name:"Himalaya Wellness"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1639109883/kcbcfpblnu8aa2cndizy.png",
        name:"Jiya Ayurveda"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1639374176/ahbd8x3m5esq58bh1cpn.jpg",
        name:"Vicks"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1639456291/xboingkg7zlk5iiywdix.png",
        name:"Kapiva Ayurveda"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1639456306/j239avogozk1rzdydtcx.jpg",
        name:"Baidyanath(Nagpur)"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525304/kfyx5kvvn2ai5fwswhsa.png",
        name:"Ayurveda"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525284/cabpuknnlyyzgqfnb4x5.png",
        name:"Vitamins & Supplements"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525147/qjfdkz5njmk9n7vvrbb3.png",
        name:"Healthcare Devices"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525168/p1blaka183nc1zlil8tq.png",
        name:"Sexual Wellness"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525320/j7ruar88gacbzksuadjn.png",
        name:"Homeopathy"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1635138994/jx66k5moct8lavzz0meq.jpg",
        name:"Winter Care"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525219/tfrtydrq6uzeyb42gh08.png",
        name:"Diabetes Care"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524188/hr9vysj9cy0sfjs3mpg0.png",
        name:"Respiratory Care"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524210/ywohqm4txnehsmibypaz.png",
        name:"Bone, Joint & Muscle Care"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524227/hgzkyio2rphkn6wjif94.png",
        name:"Diabetes Care"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524252/hn5bpr1ci2do5kdub51v.png",
        name:"Pain Relief"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524269/zo7sc14nqpt6ebeojkvr.png",
        name:"Cardic Care"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524282/zytsldnf5mvb0u19ydep.png",
        name:"Kidney Care",
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624524293/ttagxlnxulsvkyv9fetr.png",
        name:"Stomach Care"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1637566288/gbkdxqjwnmdtwfyjruh5.jpg",
        name:"Cough & Cold"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1637566315/wefwjo5tr2x6os63bit6.jpg",
        name:"Fever & Headache"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1636530091/y41avjfqcd72bmyvguoi.jpg",
        name:"Green Tea & Herbal Tea"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1637566376/znzzx3ifnckyvevmzdga.jpg",
        name:"Nebulizers & Vaporizers"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1637566347/ztep4eeqanrnccjw76zi.jpg",
        name:"Heating Aids"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1636530109/d4dwz4qot5af1nfnol1t.jpg",
        name:"Immunity Boosters"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1636530119/jstyiix2xxtz4qw6mj7h.jpg",
        name:"Body & Skin Care"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1625646252/ms0vtzfmttlkvfpvhrdv.png",
        name:"Neck & Shoulder Support"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1625646235/idtmj3hqqtdaoqrapzcm.png",
        name:"Knee & Leg Support"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1625646216/oq8q6repr096vmfnkfml.png",
        name:"Hand & Wrist Braces"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1625646201/olrj9gylxjrkfvubavri.png",
        name:"Ankle & Foot Support"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1625646177/lhoeubnngjch8x0byty1.png",
        name:"Arm & Elbow Support"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1625646161/xd8yjvqnfvgoti0irmhw.png",
        name:"Back & Abdomen Support"
    },
    {
        image:"https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1625646275/pbqlbiebjnsocurprqbd.png",
        name:"Cervical Pillows"
    }
]
 
 
 data.map(function(elem){
    var smallbox0=document.querySelector(".smallbox0")
    var smallbox1=document.querySelector(".smallbox1")
    var smallbox2=document.querySelector(".smallbox2")
    var smallbox3=document.createElement("div") // created 
    smallbox3.setAttribute("class","smallbox3")
    var dataImage=document.createElement("img")
    dataImage.setAttribute("src",elem.image)
    var dataName=document.createElement("p")
    dataName.textContent= elem.name

    smallbox3.append(dataImage,dataName)
    smallbox2.append(smallbox3)
    smallbox0.append(smallbox2)
    document.querySelector("#healthCare").append(smallbox0)
 })




// var d = [
//     {
//       brand: "1mg",
//       image:
//         "https://onemg.gumlet.io/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       homeimage:
//         "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       name: "1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       by: "Tata 1mg Healthcare Solutions Private Limited",
//       ratings: "4.2",
//       ratnum: "29",
//       revnum: "10",
//       highlights: [
//         "Assists the body in constructing and supporting a healthy colony of bacteria and other microorganisms",
//         "Probiotics are used to enhance digestion and restore healthy flora",
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Promotes healthy digestion and immunity",
//         "Improves nutrient absorption in the body",
//         "It supports in providing healthy bacteria and creates an environment where different microorganisms can flourish",
//         "How to use: Mix it with water or add in roti dough or salad",
//       ],
//       price: "298",
//       disc: "70",
//       quantity: "1 jar of 200gm powder",
//       info1:
//         "Information about 1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       info2:
//         "contains resistant maltodextrin, inulin and partially hydrolyzed guar gum as active ingredients that help to meet the daily requirement of dietary fibres. The formulation is enhanced with pre-and probiotics, which help in promoting healthier digestion and strong immunity and maximizing nutrient absorption in the body.",
//       keyIndegrients: [
//         "Resistant Maltodextrin",
//         "Inulin",
//         "Partially Hydrolysed Guar Gum",
//         "Probiotics Lactobacillus acidophilus (ATCC: 4356)",
//         "Bifidobacterium lactis (ATCC 27536)",
//         "Lactobacillus rhamnosus (ATCC 21052)",
//       ],
//       keyBenefits: [
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Prebiotics and probiotics assist the body in building and holding up  a healthy community of bacteria and various microorganisms",
//         "Supports gut and aids in the digestion process",
//         "Supports gut and aids in the digestion process",
//       ],
//       directionUse: [
//         "Mix 1 full scoop (6g approx.) in a glass of water (Approx. 200-250ml) and stir occasionally for 1 to 2 mins till the powder dissolves; consume before meals",
//         "1mg High Fiber can also be added to the dough in order to make fibre-rich rotis, or consumed with salad for a nutritious meal",
//         "Recommended 2 servings daily or as advised by the dietitian or physician",
//       ],
//       safetyInfo: [
//         "Read the label carefully before use",
//         "Keep out of reach of the children",
//         "Store in a cool dry place",
//       ],
//     },
//     {
//       brand: "1mg",
//       image:
//         "https://onemg.gumlet.io/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1632484110/hzqtydexskktgnkgv0f8.jpg",
//       homeimage:
//         "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1632484110/hzqtydexskktgnkgv0f8.jpg",
//       name: "1mg Women's Multivitamin, Zinc, Vitamin C, Calcium, Vitamin D, and Iron Immunity Booster Tablet",
//       by: "Tata 1mg Healthcare Solutions Private Limited",
//       ratings: "4.2",
//       ratnum: "226",
//       revnum: "123",
//       highlights: [
//         "Supports Bone, Skin and Eye health ",
//         "Prevents hormonal imbalance ",
//         "Aids in maintaining a healthy lifestyle",
//         "Helps improve immunity",
//         "Improves digestion and restore gut bacteria",
//         "Improves energy levels and supports brain health",
//         "A concoction of Multi-Vitamins, Essential Minerals, Women-centric health blend, and Pre & Pro-biotics complex",
//       ],
//       price: "498",
//       disc: "50",
//       quantity: "1 bottle of 60 tablets",
//       info1:
//         "Information about 1mg Women's Multivitamin, Zinc, Vitamin C, Calcium, Vitamin D, and Iron Immunity Booster Tablet",
//       info2:
//         "is a complete health supplement that supports bone, skin & eye health, prevents hormonal imbalance, and improves immunity. Calcium and Vitamin D3 helps in maintaining healthy bones. Probiotics and prebiotics blend may improve digestion & restore normal flora (gut bacteria). 1mg Women's Multivitamin is useful for a healthy lifestyle for women.",
//       keyIndegrients: [
//         "Vitamin C, Vitamin B3, Vitamin E, Vitamin B5, Vitamin B6, Vitamin B2, Vitamin B1, Vitamin A (Retinyl acetate), Vitamin B9 (Folic acid), Vitamin K1, Vitamin B7 (Biotin), Vitamin D2, and Vitamin B12",
//         "Calcium, Magnesium, Phosphorus, Iron, Zinc, Manganese, Copper, Boron Boron, Proteinate, Iodine, Chromium - Chromium (III) chloride hexahydrate, Selenium - Sodium Selenate, and Molybdenum Sodium molybdate",
//         "Ginkgo biloba leaves ext.- 24% Glycosides, Panax Ginseng root ext.- 10% Ginsenosides, Soya Isoflavone 40%, Garcinia cambogia fruit ext. - 65% HCA, Green coffee bean (Coffea robusta) ext - 45%, chlorogenic acid, L-Lysine HCL, Green tea 98% polyphenols, Citrus Bioflavonoids Extract, Grape (Vitis vinifera) seed extract - 95%, Proanthocyanidin, Lycopene powder, Zeaxanthin 5%, and Lutein",
//         "Lactobacillus acidophilus (20 billion Cfu/g), Lactobacillus rhamnosus (20 billion Cfu/g), Bifidobacterium longum (20 billion Cfu/g), Saccharomyces boulardii (20 billion Cfu/g), and Fructooligosaccharides",
//       ],
//       keyBenefits: [
//         "Helps in maintaining healthy bones",
//         "Useful in maintaining healthy skin and eyes",
//         "May improve digestion and restore normal flora",
//         "Aids in enhancing the immunity level of the body",
//         "Helps in preventing hormonal imbalance",
//         "Supports general health and well being in women",
//       ],
//       directionUse: [
//         "Take one tablet per day or as directed by the healthcare practitioner.",
//       ],
//       safetyInfo: [
//         "Shelf Life: 18 months ",
//         "Read the label carefully before use",
//         "Keep out of the reach of children",
//         "Pregnant/lactating women and children with a medical condition should consult a physician before use",
//         "Do not exceed the recommended daily dosage",
//         "This product is not intended to diagnose, treat, cure or prevent any disease",
//         "Store in a cool, dry place and away from direct sunlight",
//       ],
//     },
//     {
//       brand: "1mg",
//       image:
//         "https://onemg.gumlet.io/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       homeimage:
//         "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       name: "1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       by: "Tata 1mg Healthcare Solutions Private Limited",
//       ratings: "4.2",
//       ratnum: "29",
//       revnum: "10",
//       highlights: [
//         "Assists the body in constructing and supporting a healthy colony of bacteria and other microorganisms",
//         "Probiotics are used to enhance digestion and restore healthy flora",
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Promotes healthy digestion and immunity",
//         "Improves nutrient absorption in the body",
//         "It supports in providing healthy bacteria and creates an environment where different microorganisms can flourish",
//         "How to use: Mix it with water or add in roti dough or salad",
//       ],
//       price: "298",
//       disc: "70",
//       quantity: "1 jar of 200gm powder",
//       info1:
//         "Information about 1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       info2:
//         "contains resistant maltodextrin, inulin and partially hydrolyzed guar gum as active ingredients that help to meet the daily requirement of dietary fibres. The formulation is enhanced with pre-and probiotics, which help in promoting healthier digestion and strong immunity and maximizing nutrient absorption in the body.",
//       keyIndegrients: [
//         "Resistant Maltodextrin",
//         "Inulin",
//         "Partially Hydrolysed Guar Gum",
//         "Probiotics Lactobacillus acidophilus (ATCC: 4356)",
//         "Bifidobacterium lactis (ATCC 27536)",
//         "Lactobacillus rhamnosus (ATCC 21052)",
//       ],
//       keyBenefits: [
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Prebiotics and probiotics assist the body in building and holding up  a healthy community of bacteria and various microorganisms",
//         "Supports gut and aids in the digestion process",
//         "Supports gut and aids in the digestion process",
//       ],
//       directionUse: [
//         "Mix 1 full scoop (6g approx.) in a glass of water (Approx. 200-250ml) and stir occasionally for 1 to 2 mins till the powder dissolves; consume before meals",
//         "1mg High Fiber can also be added to the dough in order to make fibre-rich rotis, or consumed with salad for a nutritious meal",
//         "Recommended 2 servings daily or as advised by the dietitian or physician",
//       ],
//       safetyInfo: [
//         "Read the label carefully before use",
//         "Keep out of reach of the children",
//         "Store in a cool dry place",
//       ],
//     },
//     {
//       brand: "1mg",
//       image:
//         "https://onemg.gumlet.io/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       homeimage:
//         "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       name: "1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       by: "Tata 1mg Healthcare Solutions Private Limited",
//       ratings: "4.2",
//       ratnum: "29",
//       revnum: "10",
//       highlights: [
//         "Assists the body in constructing and supporting a healthy colony of bacteria and other microorganisms",
//         "Probiotics are used to enhance digestion and restore healthy flora",
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Promotes healthy digestion and immunity",
//         "Improves nutrient absorption in the body",
//         "It supports in providing healthy bacteria and creates an environment where different microorganisms can flourish",
//         "How to use: Mix it with water or add in roti dough or salad",
//       ],
//       price: "298",
//       disc: "70",
//       quantity: "1 jar of 200gm powder",
//       info1:
//         "Information about 1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       info2:
//         "contains resistant maltodextrin, inulin and partially hydrolyzed guar gum as active ingredients that help to meet the daily requirement of dietary fibres. The formulation is enhanced with pre-and probiotics, which help in promoting healthier digestion and strong immunity and maximizing nutrient absorption in the body.",
//       keyIndegrients: [
//         "Resistant Maltodextrin",
//         "Inulin",
//         "Partially Hydrolysed Guar Gum",
//         "Probiotics Lactobacillus acidophilus (ATCC: 4356)",
//         "Bifidobacterium lactis (ATCC 27536)",
//         "Lactobacillus rhamnosus (ATCC 21052)",
//       ],
//       keyBenefits: [
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Prebiotics and probiotics assist the body in building and holding up  a healthy community of bacteria and various microorganisms",
//         "Supports gut and aids in the digestion process",
//         "Supports gut and aids in the digestion process",
//       ],
//       directionUse: [
//         "Mix 1 full scoop (6g approx.) in a glass of water (Approx. 200-250ml) and stir occasionally for 1 to 2 mins till the powder dissolves; consume before meals",
//         "1mg High Fiber can also be added to the dough in order to make fibre-rich rotis, or consumed with salad for a nutritious meal",
//         "Recommended 2 servings daily or as advised by the dietitian or physician",
//       ],
//       safetyInfo: [
//         "Read the label carefully before use",
//         "Keep out of reach of the children",
//         "Store in a cool dry place",
//       ],
//     },
//     {
//       brand: "1mg",
//       image:
//         "https://onemg.gumlet.io/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       homeimage:
//         "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       name: "1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       by: "Tata 1mg Healthcare Solutions Private Limited",
//       ratings: "4.2",
//       ratnum: "29",
//       revnum: "10",
//       highlights: [
//         "Assists the body in constructing and supporting a healthy colony of bacteria and other microorganisms",
//         "Probiotics are used to enhance digestion and restore healthy flora",
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Promotes healthy digestion and immunity",
//         "Improves nutrient absorption in the body",
//         "It supports in providing healthy bacteria and creates an environment where different microorganisms can flourish",
//         "How to use: Mix it with water or add in roti dough or salad",
//       ],
//       price: "298",
//       disc: "70",
//       quantity: "1 jar of 200gm powder",
//       info1:
//         "Information about 1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       info2:
//         "contains resistant maltodextrin, inulin and partially hydrolyzed guar gum as active ingredients that help to meet the daily requirement of dietary fibres. The formulation is enhanced with pre-and probiotics, which help in promoting healthier digestion and strong immunity and maximizing nutrient absorption in the body.",
//       keyIndegrients: [
//         "Resistant Maltodextrin",
//         "Inulin",
//         "Partially Hydrolysed Guar Gum",
//         "Probiotics Lactobacillus acidophilus (ATCC: 4356)",
//         "Bifidobacterium lactis (ATCC 27536)",
//         "Lactobacillus rhamnosus (ATCC 21052)",
//       ],
//       keyBenefits: [
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Prebiotics and probiotics assist the body in building and holding up  a healthy community of bacteria and various microorganisms",
//         "Supports gut and aids in the digestion process",
//         "Supports gut and aids in the digestion process",
//       ],
//       directionUse: [
//         "Mix 1 full scoop (6g approx.) in a glass of water (Approx. 200-250ml) and stir occasionally for 1 to 2 mins till the powder dissolves; consume before meals",
//         "1mg High Fiber can also be added to the dough in order to make fibre-rich rotis, or consumed with salad for a nutritious meal",
//         "Recommended 2 servings daily or as advised by the dietitian or physician",
//       ],
//       safetyInfo: [
//         "Read the label carefully before use",
//         "Keep out of reach of the children",
//         "Store in a cool dry place",
//       ],
//     },
//     {
//       brand: "1mg",
//       image:
//         "https://onemg.gumlet.io/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       homeimage:
//         "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       name: "1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       by: "Tata 1mg Healthcare Solutions Private Limited",
//       ratings: "4.2",
//       ratnum: "29",
//       revnum: "10",
//       highlights: [
//         "Assists the body in constructing and supporting a healthy colony of bacteria and other microorganisms",
//         "Probiotics are used to enhance digestion and restore healthy flora",
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Promotes healthy digestion and immunity",
//         "Improves nutrient absorption in the body",
//         "It supports in providing healthy bacteria and creates an environment where different microorganisms can flourish",
//         "How to use: Mix it with water or add in roti dough or salad",
//       ],
//       price: "298",
//       disc: "70",
//       quantity: "1 jar of 200gm powder",
//       info1:
//         "Information about 1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       info2:
//         "contains resistant maltodextrin, inulin and partially hydrolyzed guar gum as active ingredients that help to meet the daily requirement of dietary fibres. The formulation is enhanced with pre-and probiotics, which help in promoting healthier digestion and strong immunity and maximizing nutrient absorption in the body.",
//       keyIndegrients: [
//         "Resistant Maltodextrin",
//         "Inulin",
//         "Partially Hydrolysed Guar Gum",
//         "Probiotics Lactobacillus acidophilus (ATCC: 4356)",
//         "Bifidobacterium lactis (ATCC 27536)",
//         "Lactobacillus rhamnosus (ATCC 21052)",
//       ],
//       keyBenefits: [
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Prebiotics and probiotics assist the body in building and holding up  a healthy community of bacteria and various microorganisms",
//         "Supports gut and aids in the digestion process",
//         "Supports gut and aids in the digestion process",
//       ],
//       directionUse: [
//         "Mix 1 full scoop (6g approx.) in a glass of water (Approx. 200-250ml) and stir occasionally for 1 to 2 mins till the powder dissolves; consume before meals",
//         "1mg High Fiber can also be added to the dough in order to make fibre-rich rotis, or consumed with salad for a nutritious meal",
//         "Recommended 2 servings daily or as advised by the dietitian or physician",
//       ],
//       safetyInfo: [
//         "Read the label carefully before use",
//         "Keep out of reach of the children",
//         "Store in a cool dry place",
//       ],
//     },
//     {
//       brand: "1mg",
//       image:
//         "https://onemg.gumlet.io/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       homeimage:
//         "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
//       name: "1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       by: "Tata 1mg Healthcare Solutions Private Limited",
//       ratings: "4.2",
//       ratnum: "29",
//       revnum: "10",
//       highlights: [
//         "Assists the body in constructing and supporting a healthy colony of bacteria and other microorganisms",
//         "Probiotics are used to enhance digestion and restore healthy flora",
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Promotes healthy digestion and immunity",
//         "Improves nutrient absorption in the body",
//         "It supports in providing healthy bacteria and creates an environment where different microorganisms can flourish",
//         "How to use: Mix it with water or add in roti dough or salad",
//       ],
//       price: "298",
//       disc: "70",
//       quantity: "1 jar of 200gm powder",
//       info1:
//         "Information about 1mg High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
//       info2:
//         "contains resistant maltodextrin, inulin and partially hydrolyzed guar gum as active ingredients that help to meet the daily requirement of dietary fibres. The formulation is enhanced with pre-and probiotics, which help in promoting healthier digestion and strong immunity and maximizing nutrient absorption in the body.",
//       keyIndegrients: [
//         "Resistant Maltodextrin",
//         "Inulin",
//         "Partially Hydrolysed Guar Gum",
//         "Probiotics Lactobacillus acidophilus (ATCC: 4356)",
//         "Bifidobacterium lactis (ATCC 27536)",
//         "Lactobacillus rhamnosus (ATCC 21052)",
//       ],
//       keyBenefits: [
//         "Supports gastrointestinal health and lowers the glycemic index of food",
//         "Prebiotics and probiotics assist the body in building and holding up  a healthy community of bacteria and various microorganisms",
//         "Supports gut and aids in the digestion process",
//         "Supports gut and aids in the digestion process",
//       ],
//       directionUse: [
//         "Mix 1 full scoop (6g approx.) in a glass of water (Approx. 200-250ml) and stir occasionally for 1 to 2 mins till the powder dissolves; consume before meals",
//         "1mg High Fiber can also be added to the dough in order to make fibre-rich rotis, or consumed with salad for a nutritious meal",
//         "Recommended 2 servings daily or as advised by the dietitian or physician",
//       ],
//       safetyInfo: [
//         "Read the label carefully before use",
//         "Keep out of reach of the children",
//         "Store in a cool dry place",
//       ],
//     },
//   ];
  
//   d.map(function (elem) {
//     var brand = document.querySelector(".brand");
  
//     var imagebox = document.createElement("div");
//     imagebox.setAttribute("class", "productimage");
//     var image = document.createElement("img");
//     image.setAttribute("class", "image");
//     image.setAttribute("src", elem.homeimage);
//     imagebox.append(image);
  
//     var details = document.createElement("div");
//     details.setAttribute("class", "details");
//     var name = document.createElement("p");
//     name.setAttribute("class", "name");
//     var quantity = document.createElement("p");
//     quantity.setAttribute("class", "quantity");
//     var ratings = document.createElement("div");
//     ratings.setAttribute("class", "ratings");
//     var ratestar = document.createElement("div");
//     ratestar.setAttribute("class", "ratestar");
//     var ratnum = document.createElement("div");
//     ratnum.setAttribute("class", "ratnum");
  
//     var cost = document.createElement("p");
//     cost.setAttribute("class", "cost");
//     var mrp = document.createElement("p");
//     mrp.setAttribute("class", "mrp");
//     var price = document.createElement("p");
//     price.setAttribute("class", "price");
  
//     name.textContent = elem.name;
//     quantity.textContent = elem.quantity;
//     ratestar.textContent = elem.ratings;
//     ratnum.textContent = elem.ratnum + " ratings";
//     let p = +elem.price;
//     let d = +elem.disc;
//     let m = (p * 100) / d;
//     let mrprice = Math.floor(m);
  
//     mrp.textContent = "MRP ₹" + mrprice + " " + elem.disc + "% off";
//     price.textContent = "₹" + elem.price;
//     ratings.append(ratestar, ratnum);
//     cost.append(mrp, price);
//     details.append(name, quantity, ratings, cost);
  
//     var productbox = document.createElement("div");
//     productbox.addEventListener("click", function () {
//       var pro = [elem];
//       window.location.href = "productDetails.html";
//       localStorage.setItem("pro", JSON.stringify(pro));
//     });
//     productbox.setAttribute("class", "productbox");
//     productbox.append(imagebox, details);
//     brand.append(productbox);
//   });




 