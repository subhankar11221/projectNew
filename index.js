const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");
form.addEventListener("click", () =>{
  fileInput.click();
});

fileInput.onchange = ({target})=>{
  let file = target.files[0];
  if(file){
    let fileName = file.name;
    if(fileName.length >= 12){
      let splitName = fileName.split('.');
      fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
    }
    uploadFile(fileName);
  }
}

function uploadFile(name){
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/upload.php");
  xhr.upload.addEventListener("progress", ({loaded, total}) =>{
    let fileLoaded = Math.floor((loaded / total) * 100);
    let fileTotal = Math.floor(total / 1000);
    let fileSize;
    (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
    let progressHTML = `<li class="row">
                          <i class="fas fa-file-alt"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name} • Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                              <button class="click" onclick="showImage()">Open</button>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;
    uploadedArea.classList.add("onprogress");
    progressArea.innerHTML = progressHTML;
    if(loaded == total){
      progressArea.innerHTML = "";
      let uploadedHTML = `<li class="row">
                            <div class="content upload">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                                <span class="name">${name} • Uploaded</span>
                                <span class="size">${fileSize}</span>
                              </div>
                            </div>
                            <i class="fas fa-check"></i>
                          </li>`;
      uploadedArea.classList.remove("onprogress");
      uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
    }
  });
  let data = new FormData(form);
  xhr.send(data);
}
// 1 22 b3 I4 6
const reader=new FileReader();
const image_input=document.querySelector(".file-input");
const btn=document.querySelector(".open");
const pass=sessionStorage.getItem("pass");
    var uploaded_image="";
    image_input.addEventListener("change",function(){    
        reader.addEventListener("load",()=>{
            uploaded_image=reader.result;
            console.log(uploaded_image);
            sessionStorage.setItem("image",uploaded_image);
            document.querySelector("#display_image").style.backgroundImage=`url(${uploaded_image})`;
        })
        btn.addEventListener("click",()=>{
            let password=prompt("Enter the Decrypt Key: ");
            if(password===pass) {
                alert("Decryption Successfull");
                reader.readAsDataURL(this.files[0]);} 
            else{
                alert("Key is Wrong!");
                uploaded_image="";
                document.querySelector("#display_image").style.backgroundImage=`url(${uploaded_image})`;
            }
            
        })
        
    })

    // 
    
function passwords(pass){
    let password=prompt("Enter The decrypt key?")
    if(password===pass){
        alert("Decryption successfull");
        reader.readAsDataURL(this.files[0]);
    }else{
        alert('Wrong key entered');
    }
}

    
    // reader.readAsDataURL(this.files[0]);
    

