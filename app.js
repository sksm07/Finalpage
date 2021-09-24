const fName=document.getElementById("fname");
const btn=document.getElementById("btn");
const customerId=document.getElementById("customerid");
const fullName=document.getElementById("fullname");
const cid=document.getElementById("cid");
const completed=document.getElementById("completed");
const status1=document.querySelector("#status");
const date1=document.getElementById("assigneddate");
const task=document.getElementById("task");
const clientComment=document.getElementById("clientcomment");

function myfunction(){
    for(let i=0;i<clientInfo.length;i++){
        
    


    if(fName.value==clientInfo[i].name || customerId.value==clientInfo[i].id){
        console.log(fName.value);
        fullName.innerHTML=clientInfo[i].name;
        cid.innerHTML=clientInfo[i].id;
        status1.innerHTML=clientInfo[i].workingstatus;
        date1.innerHTML=clientInfo[i].assignedDate;
        clientComment.innerHTML=clientInfo[i].comment;
        if(clientInfo[i].comment=="I QUIT !!!!!!!!" || clientInfo[i].name=="Musa"){
            clientComment.style.transition="all 7s";
            clientComment.style.position="absolute";
            clientComment.style.fontSize="5rem";
            clientComment.style.color="orange";
            clientComment.style.transform="rotate(360deg)";

        }





        console.log(fName.value);
        fName.value="";
        customerId.value="";
            }
            

    }
 
}

const myArray=["Working","Debugging","Completed"]; 
const clientInfo=[];

function clientsInfo(name,id,assignedDate,comment="None"){
    const client={
        name,
        id,
        assignedDate,
        workingstatus:myArray[Math.floor(Math.random()*3)],
        comment

    }
    clientInfo.push(client)
}

clientsInfo("Kumari", 41534,"09-22-2021","Change the color!");
clientsInfo("Nardos",925456,"08-12-2021","Add navigation to last page!");
clientsInfo("Juan", 454234,"07-07-2021","Add backend!");
clientsInfo("Florine",25456,"08-18-2021","Increase the font size!");
clientsInfo("Abdul", 102534,"08-22-2021","Add background image!");
clientsInfo("Gashaw",262336,"09-19-2021","Add video!");
clientsInfo("Cleon", 26834,"08-22-2021","Add opacity to the image!");
clientsInfo("Musa",398156,"09-02-2021","I QUIT !!!!!!!!");
clientsInfo("Jorge", 205234,"07-12-2021","Slack me anytime!!");
clientsInfo("Anusha",920456,"07-22-2021","Data structure");
console.log(clientInfo);

btn.addEventListener("click",myfunction)