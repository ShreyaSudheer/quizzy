function open(){

    question_word = '<h2>Which Contries Flag is This?</h2>';
    image_flag = '<img src="New_Zealand.jpg">';
    check_button1 = '<br><br><button style="color:black; background-color:white;" onclick="India()">India</button';
    check_button2 = '<br><br><button style="color:black; background-color:white;" onclick="South_Korea()">South Korea</button';
    check_button3 = '<br><br><button style="color:black; background-color:white;" onclick="New_Zealand()">New Zealand</button';
    check_button4 = '<br><br><button style="color:black; background-color:white;" id="thailand" onclick="ThaiLand()">ThaiLand</button';
    row = question_word + image_flag + check_button1 + check_button2 + check_button3 + check_button4;
    document.getElementById("question_div").innerHTML = "";
}