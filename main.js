var drophistory = [];
const row = document.querySelector(".row");

const usernameInput = document.querySelector(".username-input");
const numInput = document.querySelector(".num-input");
const descInput = document.querySelector(".desc-input");
const iconInput = document.querySelector(".iconshape")


function clicked(event) {


    var objects =
    {
        name: usernameInput.value,
        num: numInput.value,
        desc: descInput.value,
        icon: $(".form-select").val()
    }


    if (JSON.parse(localStorage.getItem("server"))) {
        console.log("nullll");

        drophistory = JSON.parse(localStorage.getItem("server"));
    }
    else {
        console.log("deleted");

    }
    drophistory.push(objects);

    localStorage.setItem("server", JSON.stringify(drophistory));

    document.getElementById("anchor").addEventListener("click", function (event) {
        event.preventDefault()
    });


}

if (JSON.parse(localStorage.getItem("server"))) {
    drophistory = JSON.parse(localStorage.getItem("server"));


    for (let i = 0; i < drophistory.length; i++) {


        const col4 = document.createElement("div");
        col4.className = "col-md-3"
        row.appendChild(col4);

        const card = document.createElement("div");
        card.className = "card p-3 mb-2 bg-c-blue"
        col4.appendChild(card);

        const topBorder = document.createElement("div");
        topBorder.className = "top-border"
        // topBorder.innerHTML="AAAAAAAAAAAAA"
        col4.appendChild(topBorder);

        const wrapperBetween = document.createElement("div");
        wrapperBetween.className = "d-flex justify-content-between"
        card.appendChild(wrapperBetween);

        const wrapperCenter = document.createElement("div");
        wrapperCenter.className = "d-flex flex-row align-items-center justify-content-center mx-auto"
        wrapperBetween.appendChild(wrapperCenter);

        const iconWrapper = document.createElement("i");
        iconWrapper.className = "iconwrapper"
        // iconWrapper.innerHTML="hi"
        wrapperCenter.appendChild(iconWrapper);

        const details = document.createElement("div");
        details.className = "ms-2 c-details"
        wrapperCenter.appendChild(details);

        const username = document.createElement("h6");
        username.className = "mb-0 username page-view"
        details.appendChild(username);


        const mt3 = document.createElement("div");
        mt3.className = "mb-3"
        card.appendChild(mt3);

        const num = document.createElement("h1");
        num.className = "heading text-center num overview-num2 fw-bolder"
        mt3.appendChild(num);

        const desc = document.createElement("h6");
        desc.className = "desc text-center mt-2 page-view"
        mt3.appendChild(desc);

        const date = document.createElement("h6");
        date.className = "mt-3 text-center percentage fw-bold"
        date.innerHTML =`
        <span class="fa-solid fa-caret-up" style="color: #2bff00;"></span>
        12 Today
        `;
        mt3.appendChild(date);

        username.innerHTML = "@" + drophistory[i].name;
        num.innerHTML = drophistory[i].num;
        desc.innerHTML = drophistory[i].desc;
        desc.style.letterSpacing="3px"
        

        if(drophistory[i].icon == 1){
            iconWrapper.innerHTML =`
            <i class="fa-brands fa-instagram" style="color: #d416bb;"></i>        
            `
            card.style.borderTop="3px solid #f81ed0"

        }
        else if(drophistory[i].icon == 2){
            iconWrapper.innerHTML =`
            <i class="fa-brands fa-square-facebook" style="color: #397ff9;"></i>        
            `
            card.style.borderTop="3px solid blue"

        }

        else if(drophistory[i].icon == 3){
            iconWrapper.innerHTML=`
            <i class="fa-brands fa-twitter" style="color: #5f97f7;"></i>
            `
            card.style.borderTop="3px solid blue"

        }
        else if(drophistory[i].icon == 4){
            iconWrapper.innerHTML=`
            <i class="fa-brands fa-square-youtube" style="color: #f70808;"></i>        
            `
            card.style.borderTop="3px solid red"

        }

        

    }

}
