function checkDate(){
    const s = document.getElementById("pdate").value;
    const pdate = new Date(s);
    const today = new Date();
    const diff = today.getTime() - pdate.getTime();
    const days = Math.floor(diff /(1000*60*60 *24));
    if(days >30){
        alert("교환 기간이 지났습니다.");
    }

}