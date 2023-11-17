var arr=[{image:"images/rand-1.jpg",name:"Bharathiyar",details:"He was known as Mahakavi Bharathiyar and the laudatory epithet Mahakavi means a great poet. He is considered as one of India's greatest poets. "},{image:"images/rand-2.jpg",name:"Gandhiji",details:"Indian lawyer, politician, social activist, and writer who became the leader of the nationalist movement against the British rule of India."},{image:"images/rand-3.jpg",name:"Kamarajar",details:"Kamaraj was born on 15 July 1903 in Virudhunagar, Tamil Nadu, to Kumaraswami Nadar and Sivakami Ammal. His name was originally Kamatchi, later changed to Kamarajar. His father Kumaraswami Nadar was a merchant. Kamaraj had a younger sister named Nagammal."},{image:"images/rand-4.jpg",name:"Abdul Kalam",details:"Abdul Kalam, (born Oct. 15, 1931, Rameswaram, India—died July 27, 2015, Shillong), Indian president (2002–07). After graduating from the Madras Institute of Technology, Kalam played a leading role in the development of India's missile and nuclear weapons programs."},{image:"images/rand-5.jpg",name:"Nehru",details:"Jawaharlal Nehru was born in Allabahad on November 14, 1889. He received his early education at home under private tutors."}];

var row=document.createElement("div");
row.classList.add("row");

var btn=document.createElement("button");
btn.classList.add("btn");
btn.innerHTML="Click Here";

var con=document.getElementById("con");
con.appendChild(row);

var card=document.createElement("div");
card.classList.add("card");

var cardImage=document.createElement("div");
cardImage.classList.add("cardImage");

var image=document.createElement("img");

var cardName=document.createElement("h3");
cardName.classList.add("cardName");

var cardPara=document.createElement("p");
cardPara.classList.add("cardPara");
row.appendChild(btn);
row.appendChild(card);
card.appendChild(cardImage);
cardImage.appendChild(image);
card.appendChild(cardName);
card.appendChild(cardPara);

btn.addEventListener("click",function(){
   card.style.boxShadow="0 0 10px #000";
   card.style.backgroundColor="#fff";
    arr.forEach(function(e)
    {
        x=Math.floor(Math.random()*arr.length);
        image.setAttribute("src",arr[x].image);
        cardName.innerHTML=arr[x].name
        cardPara.innerHTML=arr[x].details;

    });
});


