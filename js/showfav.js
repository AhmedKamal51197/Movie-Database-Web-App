
var xhr =new XMLHttpRequest();
var xhr2=new XMLHttpRequest();
var allMovie=[];
console.log(allMovie);
var x=document.getElementById('top');
console.log(x);
x.addEventListener('load',getData());
x.addEventListener('load',getData2());

function getData()
    {
      //var url="https://api.themoviedb.org/3/trending/movie/day?api_key=36c7c5f7614111edf67ff6e7344f2580";//+ document.getElementById("uID").value;
            xhr.open('GET','https://api.themoviedb.org/3/trending/movie/day?api_key=36c7c5f7614111edf67ff6e7344f2580');
            xhr.send();
      xhr.addEventListener('readystatechange',function() {
                if(xhr.readyState==4 && xhr.status==200)
                {
                    allMovie=JSON.parse(xhr.response).results;
                    console.log(allMovie); 
                    displayInfo();
                }
            })
        
    }
//    var storedArray = JSON.parse(allMovie);
        function displayInfo()
    {
      var cartoona=``;
          
            for(var i=0 ; i<allMovieMovie.length; i++)
            {              		
              cartoona+=`
              <div class="movie-card">
        <a href="./movie-details.html">
          <figure class="card-banner">
            <img src="https://image.tmdb.org/t/p/w200${allMovie[i].poster_path}" onmouseover="bigImg(this)" onmouseleave='normalImg(this)' alt="Movie poster">
          </figure>
        </a>
        <div class="title-wrapper">
          <a href="./movie-details.html">
            <h3 class="card-title">${allMovie[i].title}</h3>
          </a>
          <time datetime="2022">${allMovie[i].release_date}</time>
        </div>
        <div class="card-meta">
          <div class="badge badge-outline">2K</div>
          <div class="duration">
            <ion-icon name="time-outline"></ion-icon>
            <time datetime="PT122M">122 min</time>
          </div>
          <div class="rating">
            <ion-icon name="star"></ion-icon>
            <data>${allMovie[i].popularity}</data>
          </div>
        </div>
      </div>
          `;

              
            }
              document.getElementById("showdata2").innerHTML=cartoona;
              
            }


          
  var allMovieR=[];
            function getData2()
            {
              //var url="https://api.themoviedb.org/3/trending/movie/day?api_key=36c7c5f7614111edf67ff6e7344f2580";//+ document.getElementById("uID").value;
              xhr2.open('GET','https://api.themoviedb.org/3/movie/top_rated?api_key=36c7c5f7614111edf67ff6e7344f2580');
              xhr2.send();
              xhr2.addEventListener('readystatechange',function() {
                        if(xhr2.readyState==4 && xhr2.status==200)
                        {
                            allMovieR=JSON.parse(xhr2.response).results;
                            console.log(allMovieR); 
                            displayInfo2();
                        }
                    })
                
            }
        
                function displayInfo2()
            {
              var cartoona2=``;
                  
                    for(i of allMovieR)
                    {              		
                      cartoona2+=`
            <div class="movie-card">

              <a href="./movie-details.html">
                <figure class="card-banner">
                  <img src="https://image.tmdb.org/t/p/w500${i.poster_path}" onmouseover="bigImg(this)"  onmouseleave='normalImg(this)' onmouseleave='normalImg(this)'alt="Sonic the Hedgehog 2 movie poster">
                </figure>
              </a>

              <div class="title-wrapper">
                <a href="./movie-details.html">
                  <h3 class="card-title">${i.title}</h3>
                </a>

                <time datetime="2022">${i.release_date}</time>
              </div>

              <div class="card-meta">
                <div class="badge badge-outline">2K</div>

                <div class="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT122M">122 min</time>
                </div>

                <div class="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>${i.popularity}</data>
                </div>
              </div>

            </div>
          `
                      
                    }
                      document.getElementById("showdata2").innerHTML+=cartoona2;
                      
                    }
        
                    



  
            function bigImg(x) {
                x.style.transition="all 3s";
                x.style.transform="scale(1,0.5)";
                
              }
              
              function normalImg(x) {
                x.style.transform='scale(1,1)';
              }
   




              var allMovie = localStorage.getItem('movie');
console.log(JSON.parse(allMovie));

// if (!allMovie) {

//   Movies();
// } else {

//   var storedArray = JSON.parse(allMovie);
//   displayInfo(storedArray);
// }

// function Movies() {

//   storedArray = jsonData.results;
//   saveArrayToLocalStorage(storedArray);
//   displayInfo(storedArray);
// }


// // Function to save the entire array to local storage
// function saveArrayToLocalStorage(array) {
//   localStorage.setItem('myArray', JSON.stringify(array));
// }


// function displayInfo(Movie) {
//   var cartoona = ``;

//   for (var i = 0; i < Movie.length; i++) {
//     cartoona += `
//       <div class="movie-card">
//         <a href="./movie-details.html">
//           <figure class="card-banner">
//             <img src="https://image.tmdb.org/t/p/w500${Movie[i].poster_path}" onmouseover="bigImg(this)" onmouseleave='normalImg(this)' alt="Movie poster">
//           </figure>
//         </a>
//         <div class="title-wrapper">
//           <a href="./movie-details.html">
//             <h3 class="card-title">${Movie[i].title}</h3>
//           </a>
//           <time datetime="2022">${Movie[i].release_date}</time>
//         </div>
//         <div class="card-meta">
//           <div class="badge badge-outline">2K</div>
//           <div class="duration">
//             <ion-icon name="time-outline"></ion-icon>
//             <time datetime="PT122M">122 min</time>
//           </div>
//           <div class="rating">
//             <ion-icon name="star"></ion-icon>
//             <data>${Movie[i].popularity}</data>
//           </div>
//         </div>
//       </div>
//     `;
//   }

//   document.getElementById("showdata2").innerHTML = cartoona;
// }
