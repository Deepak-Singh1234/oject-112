Webcam.set({
    width : 300,
    height : 300,
    image_format : 'jpg',
    jpg_quality : 100 
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function webcamview(){
    Webcam.snap(function(data_uri){
        document.getElementById("camera").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

    console.log('ml5version',ml5.version);
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);

    function modelLoaded(){
        console.log("modelisawake");
    }

    function snapshotview(){
        img = document.getElementById("captured_image");
        classifier.classify(img,gotResult);
    }

    function gotResult(error, results) 
    { 
        if (error)
         { console.error(error); } 
    else { console.log(results);
         document.getElementById("TD").innerHTML = results[0].label; 
        
        }}




        function webcamview(){
            Webcam.snap(function(data_uri){
                document.getElementById("camera").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
            });
        }
        
            console.log('ml5version',ml5.version);
            classifier = ml5.imageClassifier('Wolfram',modelLoaded);
        
            function modelLoaded(){
                console.log("modelisawake");
            }
        
            function snapshotview(){
                img = document.getElementById("captured_image");
                classifier.classify(img,gotResult);
            }
        
            function gotResult(error, results) 
            { 
                if (error)
                 { console.error(error); } 
            else { console.log(results);
                 document.getElementById("ED").innerHTML = results[0].label; 
                
                }}