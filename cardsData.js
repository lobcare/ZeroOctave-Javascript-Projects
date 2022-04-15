const cardItems = [

  `        <!--This column is for Analog clock-->
        <div class="card card1">
            <!--Analog Clock-->
            <img class="card-img-top" src="assets/Images/analog.jpg" alt="Card analog">
            <div class="card-body">
                <div id="analoclock">
                    <h5 class="card-title">Analog Clock</h5>
                    <p>The best time on a clock is 6:30, hands down.</p>
                    <a href="Public/Analog_clock.html" class="btn btn-outline-primary">Try Now</a>
                </div>
            </div>
        </div>
        <!--End of Analog clock column-->`,
  `  <!--This column is for Shell game-->
        <div class="card card1">
            <!--Shell game-->
            <img class="card-img-top" src="assets/Images/shell_game.png" alt="Card shell game">
            <div class="card-body">
                <div id="shell-game">
                    <h5 class="card-title">Shell Game</h5>
                    <p>Wanna shoot along a parabolic trajectory? You are at just the right place!!</p>
                    <a href="Public/shell_game.html" class="btn btn-outline-primary">Try Now</a>
                </div>
            </div>
        </div>
        <!--End of Shell game column-->`,
  `   <!--This column is for auto write text-->
        <div class="card card1">
            <!--Start of auto-write-text-->
            <img class="card-img-top" src="assets/Images/auto-write.jpg" alt="Card auto-write">
            <div class="auto-write">
                <h4 style="color: crimson;" id="auto-write-target" class="auto-write-target-class"></h4>
            </div>
            <!--End of auto write text-->
            <div class="card-body" id="auto-write-text">
                <h6 class="card-title">Auto Write Text</h6>
                <p>Typing? Nah! I'm just gonna make my computer type for me.</p>
                <a href="Public/auto-write-text.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of auto write text column-->`,
  `
         <!--This column is for Word Definition-->
        <div class="card">
            <!--Start of Word Definition-->
            <img class="card-img-top" src="assets/Images/word_definition.jpg" alt="Word Definition">
            <div class="card-body">
                <h5 class="card-title">Word Definition</h5>
                <p>Always get the right definition of the words!!</p>
                <a href="Public/word_definition.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of Word Definition-->
        `,

  `<!--This column is for calculator-->
        <div class="card">
            <!--Start of Calculator-->
            <img class="card-img-top" src="assets/Images/calculator.jpg" alt="Card calculator">
            <div class="card-body">
                <h5 class="card-title">Calculator</h5>
                <p>Always trust on calculator. You can count on it!!</p>
                <a href="Public/calculator.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of calculator-->`,

`<!--This column is for Dial Code Fetcher-->
        <div class="card">
            <!--Start of Dial Code Fetcher-->
            <img class="card-img-top" src="assets/Images/DialCodeFetcher.png" alt="Card DialCodeFetcher">
            <div class="card-body">
                <h5 class="card-title">Country Dial Code Fetcher</h5>
                <p>Dial Code, Country Code, Country Name and Flag Fetcher at your fingertips!</p>
                <a href="Public/DialCodeFetcher.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of Dial Code Fetcher-->`,

  ` <!--This column is for color_flipper_1-->
        <div class="card">
            <img class="card-img-top" src="assets/Images/color-flipper-1.jpg" alt="Card calculator">
            <div id=Color_flipper_1>

                <div class="card-body">
                    <h5>Color Flipper 1</h5>
                    <p> Explore amazing colors in just a single click !</p>

                    <!-- javascript -->
                    <script src="assets/js/color_flipper_1_1.js" defer></script>

                    <a href="Public/color_flipper_1.html" class="btn btn-outline-primary">Try now</a>
                </div>
            </div>
        </div>
        <!--End of color_flipper_1-->`,

  `<!--This column is for color_flipper_2-->
        <div class="card">
            <img class="card-img-top" src="assets/Images/color-flipper-2.jpg" alt="Card calculator">
            <!--colorflipper-->
            <div class="colorflipper2 card-body">
                <h5>Color Flipper 2</h5>
                <p>Explore some more amazing colors in just a single click !</p>

                <a href="Public/color_flipper_2.html" class="btn btn-outline-primary">Try now</a>

            </div>
        </div>
        <!--End of color_flipper_2-->`,

  `<!--This column is for digital_clock-->
        <div class="card">
            <img class="card-img-top" src="assets/Images/digital.jpg" alt="Card calculator">
            <div class="digitalclock">
                <div id="MyClockDisplay" class="clock1" onload="showTime()"></div>
                <script src="assets/Js/digital_clock.js"></script>
            </div>
            <div class="card-body">
                <h5 class="card-title">Digital Clock</h5>
                <p>Digital clocks... They're just a sign of the times.</p>
                <a href="Public/digital_clock.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of digital_clock-->`,

  `<!--This column is for loginform-->
        <div class="card">
            <img class="card-img-top" src="assets/Images/login.jpg" alt="Card image cap">
            <div class="card-body" id="loginform">
                <h5 class="card-title">Log-in Form</h5>
                <p>Log-in form template you might want to use..</p>
                <a href="Public/loginform.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of loginform-->`,

  `<!--This column is for quiz-->
        <div class="card">
            <img class="card-img-top" src="assets/Images/quiz.jpg" alt="Card calculator">
            <!--Start of quiz-->
            <div class="card-body" id="quizappid">

                <h5 class="card-title">Take Quiz</h5>
                <p>Quizes - A way of fun learning!</p>
                <a href="Public/quiz.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of quiz-->`,

  `        <!-- This column is for purple_hurt-->
        <div class="card">
            <img class="card-img-top" src="assets/Images/purple_heart.jpg">

            <!-- This script is causing hearts to flow from top in every page remove it if needed -->
            <!-- <script src="assets/Js/purple_heart.js"></script> -->

            <div class="card-body" id="purpleheart">
                <h5 class="card-title">Purple Heart Animation</h5>
                <p>Who doesn't want a heart floating for them !!</p>
                <a href="Public/purple_heart.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of purple_hurt -->`,
        
        ` <!--This column is for tap_music-->
        <div class="card">
            <img class="card-img-top" src="assets/Images/music.jpg" alt="Card image cap">
            <div class="card-body" id="music">
                <h5 class="card-title">Music</h5>
                <p>Remedy to every your stress - Music</p>
                <a href="Public/tap_music.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of tap_music-->`,

  `<!--This column is for toast_notification-->
        <div class="card">
            <!--Start of notification-->

            <img class="card-img-top" src="assets/Images/notification.jpg">

            <!--End of notification-->
            <div class="card-body" id="notification">
                <h5 class="card-title">Notification</h5>
                <p>Pretty notfication template for your website.</p>
                <a href="Public/toast_notification.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of toast_notification-->`,

  `<!--This column is for speech_to_text_program-->
        <div class="card">
            <!--start of speech_to_text_program-->
            <img class="card-img-top" src="assets/Images/speech.png">

            <div class="card-body">
                <h5 class="card-title">Speech-to-Text-Converter</h5>
                <p>A good program that writes whatever you say.</p>
                <a href="Public/Speech-to-Text-Converter.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of speech_to_text Program-->`,

  `<!--This column is for weather_app-->
        <div class="card">
            <img class="card-img-top" src="assets/Images/weather.jpg" alt="Card image cap">
            <main id="main"></main>
            <div class="card-body">
                <h5 class="card-title">Check Weather</h5>
                <p>Making plans? You might wanna check weather first!</p>
                <a href="Public/weather_app.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of weather_app-->`,

  `<!--This column is for guess_color-->
        <div class="card">
            <img class="card-img-top" src="assets/Images/guess_color.png" alt="Card image cap">
            <div class="card-body" id="guess_color">
                <h5 class="card-title">Guess Color</h5>
                <p>Have fun with color guessing game.</p>
                <p></p>
                <a href="Public/guess_color.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!--End of guess_color-->`,

  `<!-- add new projects here inside a div with class card and inside that add image with class card-img-top and after that make a div with class card-body and write heading <h5> and <p> inside that div-->

        <!-- This is for typing test -->
        <div class="card">
            <!--Start of Speed Typer-->
            <img class="card-img-top" src="assets/Images/speed_typer.jpg" alt="Card speed_typer">
            <div class="card-body">
                <h5 class="card-title">Speed Typer</h5>
                <p>How fast can you type??</p>
                <a href="Public/Speed_Typer.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!-- end of speed typer -->`,

  `<!-- This is for Caesar Cipher -->
        <div class="card">
            <!-- Start of Caesar Cipher -->
            <img class="card-img-top" src="assets/Images/CaesarCipher.png" alt="Card Caesar-Cipher">
            <div class="card-body">
                <h5 class="card-title">Caesar Cipher</h5>
                <p>Now Encrypt and Decrypt passwords at your own comfort!</p>
                <a href="Public/CaesarCipher.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!-- end of Caesar Cipher -->`,

  `<!-- This is for restaurant website -->
        <div class="card">
            <!--Start of Restaurant Website-->
            <img class="card-img-top" src="assets/Images/restaurant.jpg" alt="Card restaurant">
            <div class="card-body">
                <h5 class="card-title">Restaurant Website</h5>
                <p>A Restaurant website template that you can use..</p>
                <a href="Public/restaurant/restaurant.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!-- end of Restaurant website -->`,

  `<!-- This is for Rock Paper Scissor -->
        <div class="card">
            <!--Start of Rock Paper Scissor-->
            <img class="card-img-top" src="assets/Images/i3.png" alt="Card restaurant">
            <div class="card-body">
                <h5 class="card-title">Rock Paper Scissor</h5>
                <p>Have fun playing rock paper scissor game..!</p>
                <a href="Public/rock-paper-scissor/rock-paper-scissor.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!-- end of Rock Paper Scissor -->`,
  `<!-- This is for Incrementinator 2.0-->
        <div class="card">
            <!--Start of incrementinator 2.0-->
            <img class="card-img-top" src="assets/Images/incrementinator.png" alt="Card restaurant">
            <div class="card-body">
                <h5 class="card-title">Incrementinator 2.0</h5>
                <p id="inc-p">Beginners project using html,css,js!!</p>
                <a href="Public/incrementinator.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!-- end of incrementinator 2.0 -->`,
  `<!--This column is for accordion-->
        <div class="card card1">

            <img class="card-img-top" src="assets/Images/accordion.png" alt="Quotes">
            <div class="card-body">
                <h5 class="card-title">Quotes</h5>
                <p>Get some best quotes here!</p>
                <a href="Public/accordion.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of accordion column-->`,
  ` <!--This column is for aipanart-->
        <div class="card card1">

            <img class="card-img-top" src="assets/Images/aipanart.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Aipan Art Handcraft</h5>
                <p>Art From The Hills With full dedications and great skills!</p>
                <a href="Public/aipanArt.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of aipanart column-->`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/autoimageslider.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Auto image slider</h5>
                <p>Background animation changes automatically!</p>
                <a href="Public/auto_image_slider.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="./assets/Images/BMI_Calculator_image_landing_page.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">BMI Calculator</h5>
                <p>Calculate your BMI!</p>
                <a href="Public/bmi-calculator.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/countdownclock.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Count Down Timer</h5>
                <p>Counting!</p>
                <a href="Public/countdown-timer.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/counter.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Counter</h5>
                <p>You can increment, decrement and reset.</p>
                <a href="Public/counter.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/drumkit.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Drum kit</h5>
                <p>Hear the music of the drums !</p>
                <a href="Public/drum_kit.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  ` <div class="card card1">
            <img class="card-img-top" src="assets/Images/foodwebsite.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Food Recepie center</h5>
                <p>Best place to search for recipies!</p>
                <a href="Public/food_website.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/heightconverter.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Height Converter</h5>
                <p>Convert your height from feet to centimeter.</p>
                <a href="Public/height-converter.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/hulu.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Hulu</h5>
                <p>wanna binge watch ?</p>
                <a href="Public/hulu.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/imageeditor.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Image Editor</h5>
                <p>You wonldn't search for other websites to edit your images, after using me!</p>
                <a href="Public/image_editor.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/loancalculator.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Loan calculator</h5>
                <p>Calculate the monthly loan to pay with me!</p>
                <a href="Public/loan-calculator.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/mathformule.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Maths Formulae website</h5>
                <p>Get your math Homework done!</p>
                <a href="Public/maths-formulae.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/modalwindow.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Modal window generator</h5>
                <p>wanna see how I work ?</p>
                <a href="Public/Modal.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/ngo.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">An NGo Website</h5>
                <p>Get into our website!</p>
                <a href="Public/NGO.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/noteapp.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Note app</h5>
                <p>Take your notes!</p>
                <a href="Public/noteapp.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/popup.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Popup</h5>
                <p>Popupppp!</p>
                <a href="Public/popup.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/randomcolorgenerator.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Random Color Generator</h5>
                <p>Get the RGB values for different colours generated randomly!</p>
                <a href="Public/random_color_generator.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/responsivenavbar.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Responsive Navigation Bar</h5>
                <p>see how it works!</p>
                <a href="Public/responsive_nav.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/resumebuilder.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Resume Builder</h5>
                <p>Build a beautiful resume with me, dont buy unnecessary resume templates!!</p>
                <a href="Public/resume_builder.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/rolldice.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Dice Game</h5>
                <p>Will see who wins!</p>
                <a href="Public/dice_game.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/speed.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Speed typing</h5>
                <p>Calculate your speed in typing.</p>
                <a href="Public/speed.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/spotifyclone.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Spotify clone</h5>
                <p>Wanna listen to beautiful music!!</p>
                <a href="Public/spotify-clone.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/stonepaperscissor.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Stone Paper Scissors</h5>
                <p>Play me!</p>
                <a href="Public/stone_paper_scissors.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/tipcalculator.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Tip Calculator</h5>
                <p>Calculate the total amount to be paid</p>
                <a href="Public/tip_calculator.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/3dsolarsystem.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">3D Solar System</h5>
                <p>See how a 3d solar system is!!</p>
                <a href="Public/solar.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/primeCalc.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Prime Factor Calculator</h5>
                <p>Calculate your primes now!!</p>
                <a href="Public/primeCalc.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/magicnote.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Magic Note</h5>
                <p>Take the notes.</p>
                <a href="Public/todo.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/weather.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Weather Calculator</h5>
                <p>See the weather at different places.</p>
                <a href="Public/weather_app.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/weightconverter.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Weight Converter</h5>
                <p>Convert the weight to different units.</p>
                <a href="Public/weight_conv.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
  `<div class="card card1">
            <img class="card-img-top" src="assets/Images/wordcountcalculator.png" alt="Art">
            <div class="card-body">
                <h5 class="card-title">Word Count Calculator</h5>
                <p>Calculate the word count while you type.</p>
                <a href="Public/word-count-calculator.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>`,
`<!-- This is for Palindrome Checker -->
        <div class="card">
            <!--Start of Palindrome Checker-->
            <img class="card-img-top" src="assets/Images/Palindrome Checker.png" alt="Card restaurant">
            <div class="card-body">
                <h5 class="card-title">Palindrome Checker</h5>
                <p>Enter a name or number, Know it is palindrome or not!!!!</p>
                <a href="Public/palindrome.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!-- end of Palindrome Checker -->`,
  `<!--This div is for crypto-app website-->
        <div class="card card1">
            <img class="card-img-top" src="assets/Images/crypto.jpg" alt="Library">
            <div class="card-body">
                <h5 class="card-title">Crypto-App</h5>
                <p>Know the prices and many more about crypto!</p>
                <a href="Public/crypto_app.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of crypto-app website-->`,

  `<!--This div is for scientific calculator website-->
        <div class="card card1">
            <img class="card-img-top" src="assets/Images/scientific_calculator.png" alt="scientific_calculator">
            <div class="card-body">
                <h5 class="card-title">Scientific Calculator</h5>
                <p>Lets do some calculations!</p>
                <a href="Public/scientific_calculator.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of scientific calculator website-->`,

  `<!--This div is for GitHub Profiles website-->
        <div class="card card1">
            <img class="card-img-top" src="assets/Images/GitHub-Profiles.jpeg" alt="GitHub-Profiles">
            <div class="card-body">
                <h5 class="card-title">GitHub-Profiles</h5>
                <p>Find some GitHub Profiles!</p>
                <a href="Public/GitHub-Profiles.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of GitHub Profiles website-->`,

  `<!--This div is for Library website-->
        <div class="card card1">
            <img class="card-img-top" src="assets/Images/booksLibrary.png" alt="Library">
            <div class="card-body">
                <h5 class="card-title">Books Library</h5>
                <p>Add Books or delete books from a list.</p>
                <a href="Public/BooksLibrary.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of Library website-->`,

  `<!-- This is for Guess the Number -->
        <div class="card card1">
            <!--Start of Guess the Number-->
            <img class="card-img-top" src="assets/Images/guess-the-number.png" alt="guess-the-number">
            <div class="card-body">
                <h5 class="card-title">Guess The Number</h5>
                <p>Is your guess correct?</p>
                <a href="Public/guess-the-number.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
        <!-- end of guess the number -->`,

  `<!-- This is for Simon Game -->
        <div class="card card1">
            <!--Start of Simon Game-->
            <img class="card-img-top" src="assets/Images/simon_game.png" alt="simon_game">
            <div class="card-body">
                <h5 class="card-title">Simon Game</h5>
                <p>Do you remember</p>
                <a href="Public/Simon_game.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!-- end of Simon Game -->`,

  `<!--This is for Pong Game -->
        <div class="card card1">
            <!--Start of Simon Game-->
            <img class="card-img-top" src="assets/Images/Pong-Game.PNG" alt="pong_game">
            <div class="card-body">
                <h5 class="card-title">Pong Game</h5>
                <p></p>
                <a href="Public/pong.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of Pong Game-->`,

  `<!--This is for Dictionary App-->
        <div class="card card1">
            <!--Start of Simon Game-->
            <img class="card-img-top" src="assets/Images/Dictionary.PNG" alt="dictionary">
            <div class="card-body">
                <h5 class="card-title">Dictionary App</h5>
                <p>Dictionary</p>
                <a href="Public/dictionary.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of Dictionary App-->`,

  `<!--This is for Custom Ice Cream Make-->
        <div class="card card1">
            <!--Start of Simon Game-->
            <img class="card-img-top" src="assets/Images/Ice-Cream.PNG" alt="dictionary">
            <div class="card-body">
                <h5 class="card-title">Custom Ice Cream Maker</h5>
                <p>Change the flavor of the ice cream according to your convienience</p>
                <a href="Public/icecream.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of Ice Cream Maker-->`,

  `<!--This is for Sneaker Site-->
        <div class="card card1">
            <!--Start of Sneaker Site-->
            <img class="card-img-top" src="assets/Images/Nike1.PNG" alt="sneaker">
            <div class="card-body">
                <h5 class="card-title">Sneaker Site</h5>
                <p>An Ecommerce Responsive Sneaker Site</p>
                <a href="Public/sneaker.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of Sneaker Site-->`,

  `<!--This is for crud project-->
        <div class="card card1">
            <img class="card-img-top" src="assets/Images/Crud.png" alt="Table">
            <div class="card-body">
                <h5 class="card-title">CRUD Project</h5>
                <p>Maintain and update your records here !</p>
                <a href="Public/crud-project.html" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of crud project-->`,

  `<!--This is for Currency Converter-->
        <div class="card card1">
            <!--Start of Currency Converter-->
            <img class="card-img-top" src="assets/Images/Currency-converter.PNG" alt="converter">
            <div class="card-body">
                <h5 class="card-title">Currency Converter</h5>
                <p>Do you convert</p>
                <a href="Public/Currency-converter.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of Currency Converter-->`,

  `<!--This is for Hangman Project-->
        <div class="card card1">
            <!--Start of Currency Converter-->
            <img class="card-img-top" src="./assets/Images/Web view.PNG" alt="converter">
            <div class="card-body">
                <h5 class="card-title">Hangman Game</h5>
                <p>Guess the given category</p>
                <a href="./Public/hangman.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of Hangman Project-->`,

  `<!--This is for To-Do List-->
        <div class="card card1">
            <!--Start of To-Do list-->
            <img class="card-img-top" src="./assets/Images/to-do-img.png" alt="TO-DO list">
            <div class="card-body">
                <h5 class="card-title">TO-DO List</h5>
                <p>Add your daily routine here to keep a check on them>
                <a href="./Public/to-do.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of To-Do-->`,

  `<!--This is for multiple pages portfolio-->
      
        <div class="card card1">
            <!--Start of multiple pages portfolio-->
            <img class="card-img-top" src="/assets/Images/multi-portfolio" alt="portfolio">
            <div class="card-body">
                <h5 class="card-title">Portfolio Website</h5>
                <p>See how a real portfolio website actually looks like !</p>
                <a href="/Public/multiple-portfolio.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of multiple pages portfolio-->`,

  `<!--This div is for Transpose-Matrix Calculator website-->
        <div class="card card1">
            <img class="card-img-top" src="assets/Images/TransposeMatrixCalculator.png" alt="Transpose-Matrix Calculator">
            <div class="card-body">
                <h5 class="card-title">Transpose-Matrix Calculator</h5>
                <p>Find Transpose of your Matrix here!</p>
                <a href="Public/Transpose-Matrix-Calculator.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of Transpose-Matrix Calculator website-->`,

  `<!--This div is for password generator website-->
        <div class="card card1">
            <img class="card-img-top" src="assets/Images/password generator.png" alt="password generator">
            <div class="card-body">
                <h5 class="card-title">Password Generator</h5>
                <p>Generate a unique password.</p>
                <a href="Public/password_generator.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of password generator website-->`,
  `<!--This div is for Memory game-->
         <div class="card card1">
            <img class="card-img-top" src="assets/Images/memory/memoryimg.jpeg" alt="memory game">
            <div class="card-body">
                <h5 class="card-title">Memory game</h5>
                <p>Match the candies before timer runs out...!</p>
                <a href="Public/memory.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of memory game-->`,

  `<!-- This is for RD return calculator project -->
        <div class="card card1">
            <img class="card-img-top" src="./assets/Images/RD-return-calculator.png" alt="RD-return-calculator">
            <div class="card-body">
              <h5 class="card-title">RD return calculator</h5>
              <p>Calculates RD return</p>
              <a href="./Public/RD-return-calculator.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!-- End of RD return calculator -->`,

  `<!-- This div is for Meditation feature -->
        <div class="card card1">
            <img class="card-img-top" src="./assets/Images/meditation/Image.jpg" alt="Meditation feature">
            <div class="card-body">
              <h5 class="card-title">Meditation Feature</h5>
              <p>Meditate and relax your mind</p>
              <a href="./Public/meditation.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of Meditation feature -->`,
  
 `<!-- This div is for Movie/TV Series Quote Generator -->
        <div class="card card1">
            <img class="card-img-top" src="./assets/Images/MovieQuoteGenerator.png" alt="Movie/TV Series Quote Generator">
            <div class="card-body">
              <h5 class="card-title">Movie/TV Series Quote Generator</h5>
              <p>Generates Random Quote from a Random Shows and Movies</p>
              <a href="./Public/MovieQuoteGenerator.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of Movie/TV Series Quote Generator -->`,

  `<!-- Function Grapher Card -->
        <div class="card card1">
            <img class="card-img-top" src="https://user-images.githubusercontent.com/64689436/160159074-af2519ff-d060-4d99-95a1-e3bcd535ae82.png" alt="Function-Grapher">
            <div class="card-body">
              <h5 class="card-title">Function Grapher</h5>
              <p>Function Grapher</p>
              <a href="./Public/Function_Grapher.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!-- Function Grapher Card -->`,

  `<!-- Third Degree Equation Solver -->
        <div class="card card1">
            <img class="card-img-top" src="https://user-images.githubusercontent.com/64689436/159751342-cd4e002d-479f-47b2-be8e-b24a58177409.png" alt="Third Degree Equation Solver">
            <div class="card-body">
              <h5 class="card-title">Third Degree Equation Solver</h5>
              <p>Solves Third Degree Equation</p>
              <a href="./Public/Third_Degree_Equation_Calculator.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!-- Third Degree Equation Solver -->`,

  `<!--This div is for Speech Synthesis-->
  <div class="card card1">
    <img class="card-img-top" src="assets/Images/speechsynthesis.png" alt="speech_synthesis">
   <div class="card-body">
      <h5 class="card-title">Speech Synthesis</h5>
      <p>Controls rate and pitch of speech.</p>
      <a href="Public/speech_synthesis.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
    </div>
  </div>
  <!--End of Speech Synthesis-->`,

  `<!--This div is for Color-Changing-App-->
  <div class="card card1">
    <img class="card-img-top" src="assets/Images/color-changing-app.png" alt="color-changing-app">
   <div class="card-body">
      <h5 class="card-title">Color Changing App</h5>
      <p>Change Colors on clicking 'Click Me' button.</p>
      <a href="Public/Color-Changing-App.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
    </div>
  </div>
  <!--End of Color-Changing-App-->`,

  `<!--This div is for Key Detector-->
    <div class="card card1">
        <img class="card-img-top" src="assets/Images/key_Detector.png" alt="speech_synthesis">
       <div class="card-body">
          <h5 class="card-title">Key Detector</h5>
          <p>Shows which key one has pressed on the keyboard.</p>
          <a href="Public/key_Detector.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
        </div>
      </div>
      <!--End of Key Detector-->`,

    `<!-- This is for tic-tac-toe game -->
        <div class="card">
            <!--Start of tic-tac-toe game-->
            <img class="card-img-top" src="assets/Images/tic-tac-toe.png" alt="tic-tac-toe game">
            <div class="card-body">
                <h5 class="card-title">Tic Tac Toe</h5>
                <p>Play the classic Tic-Tac-Toe game</p>
                <a href="Public/tic-tac-toe.html" class="btn btn-outline-primary">Try now</a>
            </div>
        </div>
     <!-- end of tic-tac-toe game -->`,

     `<!--This div is for  QR_Code_Generator-->
         <div class="card card1">
            <img class="card-img-top" src="assets/Images/QR_Code_Generator.png" alt="QR_Code_Generator">
            <div class="card-body">
                <h5 class="card-title">QR Code Generator</h5>
                <p>Shows which key one has pressed on the keyboard.</p>
                <a href="Public/QR_Code_Generator.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
            </div>
        </div>
        <!--End of  QR_Code_Generator-->`,

   `<!--This div is for Microsoft Clone-->
  <div class="card card1">
    <img class="card-img-top" src="assets/Images/microsoft.png" alt="microsoft">
   <div class="card-body">
      <h5 class="card-title">Microsoft Clone</h5>
      <p>It is a basic microsoft clone.</p>
      <a href="./Public/microsoftclone.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
    </div>
  </div>
  <!--End of Microsoft clone-->`,
    `<!--This div is for Drawing app-->
  <div class="card card1">
    <img class="card-img-top" src="assets/Images/drawingapp.png" alt="drawing app">
   <div class="card-body">
      <h5 class="card-title">Drawing App</h5>
      <p>Enjoy Drawing.</p>
      <a href="./Public/drawingapp.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
    </div>
  </div>
  <!--End of Drawing app-->`,
  `<!--This div is for Book Shopping Website-->
  <div class="card card1">
    <img class="card-img-top" src="assets/Images/bookshopimgs/bookbuy5.png" alt="book shopping website">
   <div class="card-body">
      <h5 class="card-title">Book Shopping Website</h5>
      <p>Book Shopping Website - Like a book? Add it to cart and purchase!$$$</p>
      <a href="./Public/book-shopping-website/book.html" target="_blank" class="btn btn-outline-primary">Try Now</a>
    </div>
  </div>
  <!--End of Book Shopping Website-->`,

]
