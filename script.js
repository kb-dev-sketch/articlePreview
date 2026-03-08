 const shareButton=document.getElementById("pop");
    const push=document.getElementById("popup");
    const avatar=document.querySelector(".avatar");
    shareButton.addEventListener("click",(()=>
        {
            push.classList.toggle("active");
            avatar.classList.toggle("active");
        }
    ))