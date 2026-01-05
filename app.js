function displayRating() {
    let output = '';
    let rating = prompt('scale 1-5, how many stars would you give cationary?');
    for(let i = 0; i < rating; i++){//for loop: its is going to keep executing until condition is met; 5
        output += "<img src='images/star.png'>"
    }

    return document.write(output);
}