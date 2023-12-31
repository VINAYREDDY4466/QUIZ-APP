# QUIZ-APP
The Quiz App is an interactive web application designed to engage users with a combination of video content and quiz questions. The project is structured using HTML, CSS, and JavaScript to provide a user experience.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/x-icon" href="/409163.jpg">
</head>
<body>
    
    <div class="app">
        <video width="500" height="200" controls autoplay>
            <source src="Cristiano Ronaldo - Just No Stopping Him - 4K UHD.mp4" type="video/mp4">
            
          </video>
    <h1>Simple Quiz</h1>
    <div class="quiz">
        <h2 id="question">Question goes from here</h2>
        <div id="answer-buttons">
            <button class="btn">Answer1</button>
            <button class="btn">Answer2</button>
            <button class="btn">Answer3</button>
            <button class="btn">Answer4</button>
        </div>
        <button id="next-btn">next</button>
    </div>
</div>

<script src="javascript.js" ></script>
</body>
</html>
