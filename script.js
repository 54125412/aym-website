function checkPassword()
{

    let password = document.getElementById("password").value;

    if(password === "AYM@2026"){
    window.location.href="dashboard.html";
 }
   else{
        alert("Wrong Password!");
   }
   
}
const photos=[
   "photo1.jpg",
   "photo2.jpg",
   "photo3.jpg",
   "photo4.jpg",
   "photo5.jpg",
];
const gallery=
document.getElementById("photoGallery");

if(gallery){
   photos.forEach(photo =>{
      const img=
   document.createElement("img");
   img.src="images/"+photo;
   img.alt=photo;
   gallery.appendChild(img);
});
}

// Graph Page
const graphCanvas=
document.getElementById("expenseChart");

if(graphCanvas){
   
   new Chart(graphCanvas,{
      type:"bar",

      data:{
         labels:[
            "Ganpati Chanda",
            "AYM Members",
            "Ganpati Murti",
            "Mandap",
            "DJ & Sound",
            "Extra Kharcho",
         ],

         datasets:[{
            label:"Amount($)",

            data:[
              50000,
              10000,
              8000,
              10000,
              15000,
              3000,
              
            ],
            backgroundColor:"#ef9898",
            borderColor:"#5c0000",
            borderWidth:2,
            borderRadius:10
         }]
      },
      options:{
         responsive:true,

         plugins:{
            legend:{
               display:false
            }
         },
         scales:{
            y:{
               beginAtZero:true
            }
         }
      }
   });
}

const dailyCanvas=
document.getElementById("dailyChart");

if(dailyCanvas){


   new Chart(dailyCanvas,{

      type:"bar",

      data:{

         labels:[
            "Day 1",
            "Day 2",
            "Day 3",
            "Day 4",
            "Day 5",
            "Day 6",
            "Day 7",
         ],
         datasets:[{

            label:"Daily Kharcho",

            data:[
               500,
               300,
               700,
               600,
               2000,
               400,
               3000
            ],
            backgroundColor:"#ef9898",
            borderColor:"#5c0000",
            borderWidth:2,
            borderRadius:10
                        
}
      ]
      },
      options:{

         responsive:true,
         plugins:{
            legend:{
               display:false
            }
         },
         scales:{

            y:{
               beginAtZero:true
            }
         }
      }
   });
}
const totalCollection = 60000;

const totalKharcho =
8000+       // Ganpati Murti
10000+      // Mandap
15000+      // DJ & Sound
3000+       // Extra Kharcho
500+        // Day 1
300+        // Day 2
700+        // Day 3
600+        // Day 4
2000+       // Day 5
400+        // Day 6
3000;       // Day 7

const remaining = totalCollection-totalKharcho;

document.getElementById("totalCollection").innerText="$"+totalCollection;
document.getElementById("totalKharcho").innerText="$"+totalKharcho;
document.getElementById("remainingBalance").innerText="$"+remaining;

