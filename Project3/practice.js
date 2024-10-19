const userdiv = document.getElementById('userdiv');



async function api(){
    try{
    const url = await fetch (`https://jsonplaceholder.typicode.com/users`);
    return await  url.json();
    console.log(url.json())
    }
    catch(error){
        console.log(error);
    }

}
let apidata =[];

async function printUser(){
    apidata =  await api();
    
    apidata.forEach((element) => {
        
        
        let ol = document.createElement('ol')
        let h1= document.createElement('h1')
        h1.innerText = "User Data";
        let li1 = document.createElement('li')
        let h3 = document.createElement('h2');
        h3.innerText = element.name;
        ol.appendChild(h1)
        li1.appendChild(h3);
        ol.appendChild(li1);
        let li2 = document.createElement('li')
        let h4 = document.createElement('h4');
        h4.innerText= element.email;
        li2.appendChild(h4);
        ol.appendChild(li2);
        let li3 = document.createElement('li')
        let p = document.createElement('p');
        p.innerText= element.address.street + ", " + element.address.city;
        li3.appendChild(p);
        ol.appendChild(li3);
        userdiv.appendChild(ol)

        
    });



}
printUser();



