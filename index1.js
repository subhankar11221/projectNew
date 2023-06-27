
// alert(str.value);
function randomChar(length){
    const characters ='ABC@!&*()_+=DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function randomGen() { // LBH QVQ VG!
    const str=document.getElementById("pass").value;
    var string = "";
    for(var i = 0; i < str.length; i++) {
      var temp=str.charAt(i);
      temp+=randomChar(1);
      string+=temp
    }
    alert("Your Key is : "+string);
    sessionStorage.setItem("pass",string);
  }

  