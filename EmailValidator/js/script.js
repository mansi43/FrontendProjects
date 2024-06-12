let image = document.querySelector(".logo")
// console.log(image.src)

let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "mansisinghh1407",
    "email": "mansisinghh1407@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,

    "did_you_mean": "",
    "format_valid": true
}
submitBtn.addEventListener("click", async(e) => {
   e.preventDefault()
    console.log("clicked")
    resultCont.innerHTML = '<div class="gif"><img src="img/loading.gif" alt=""></div>'
    let key = "ema_live_wRCXEc4X5JjbtXTgaOKZ7U6hHubHG36crbDA1GEJ"
    let email = document.getElementById("email").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result= await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {  
            str = str + `<div>${key}:${result[key]}</div>`
                image.src = "img/emailVal2.jpg"
                setTimeout(() => {
                    image.src = "img/emailVal.jpg"
                }, 3000);
        }
    }
    // console.log(str)
    resultCont.innerHTML = str
})


