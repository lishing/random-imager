const arrayOfPics = [
  "https://cjmart.jp/en/upload/save_image/0126_190824_mp4otl_y_3.jpg",
  "https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/0/1/0130_190824_mp4otl_y_3.jpg",
  "https://cjmart.jp/en/upload/save_image/0128_190824_mp4otl_y_3.jpg",
  "https://www.pngfind.com/pngs/m/407-4072533_despicable-me-minion-popcorn-xfinity-voice-commands-cartoon.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHAOicv_c8mM9izCBvHPCA7Nm3oNdTDeLQpQYzKpGhy8mJGLEd&usqp=CAU",
  "https://p7.hiclipart.com/preview/557/853/304/5bbc53fe29020.jpg"
];

$(() => { 
    const addDiv = $("<div>").addClass("image").text("Add random image");
    $("body").append(addDiv);

    const generateRandomImage = () =>{
      const randomPic = arrayOfPics[(Math.round(Math.random()*(arrayOfPics.length - 1)))];
      //write function to generate image element append to body, that has attribute
      const addPic = $('<img>').addClass("image").attr("src", `${randomPic}`);
      $("body").append(addPic);

      
    }
    
  $(".image").on("click", generateRandomImage);

  
  
});