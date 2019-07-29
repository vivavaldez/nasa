// var apiKey = "g53YdQiW0uCK0aNTE6FQUxKKEO4eOFMZizL8yb44"
//
//
// var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
//
//
//
//
//
// function sendApiRequest(){
// //FOR THE TEXT
//   var text = document.createElement("div");
//   text.src = json[""]
//   newChild.innerText = text;
//   document.body.appendChild(newChild);
//
//   fetch(url)//FOR THE PICTURE
//     .then(function(response){
//       return response.json();
//     })
//     .then(function(json){
//       console.log(json)
//       var img = document.createElement("img");
//       img.src = json["url"];
//       document.body.appendChild(img);
//     })
//   }
// 
//   sendApiRequest()
  var nasaApiKey="IZd4W98yc2HrRP8aPOyedYlIRVOfgn9XHKf1oXyw"


  var nasaApiUrl= `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`;
  console.log(nasaApiUrl);
  function nasaPic(){
    fetch(nasaApiUrl)
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        // console.log(json);
        var img =document.createElement("img");
        img.src=json["url"];
        document.body.appendChild(img);

        var desc = document.createElement("div");
        desc.innerText = json["explanation"];
        document.body.appendChild(desc);


      })
  }
  nasaPic()
