
address=JSON.parse(localStorage.getItem("customerAddress")) ||[]

document.querySelector("#save").addEventListener("click",addressDetail)

function addressDetail(){
    var customerAddress=document.querySelector("#AddressFilltextare")
    var landmark=document.querySelector("#AddressFilltextbox")
    var pincode=document.querySelector("#pincode")
    var locality=document.querySelector("#locality")
    var city=document.querySelector("#city")
    var state=document.querySelector("state")
    var customerName=document.querySelector("#customerName")
    var mobileNumber=document.querySelector("#mobileNumber")
    
    obj={
        address1:customerAddress,
        landmark1:landmark,
        pincode1:pincode,
        locality1:locality,
        city1:city,
        state1:state,
        customerName1:customerName,
        mobileNumber1:mobileNumber
    }
    console.log(obj)
    address.push(obj)
    
    localStorage.setItem("customerAddress",JSON.stringify(address))
    window.location.href="payment2.html"

}






