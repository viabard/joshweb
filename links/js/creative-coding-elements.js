const main = document.querySelector('creative-coding');


var creative_coding_dict = {
    'Stars': 'https://joshschaaf.com/creative-coding/stars',
    'Bubbles': 'https://joshschaaf.com/creative-coding/bubbles',
    'Spaghetti': 'https://joshschaaf.com/creative-coding/spaghetti',
    'Spinny Thing': 'https://joshschaaf.com/creative-coding/spinny-thing',
    'Piet Mondrian': 'https://joshschaaf.com/creative-coding/mondrian',
    'Current Sketch': 'https://joshschaaf.com/creative-coding/current-sketch'
};

var html_string = ``;

Object.keys(creative_coding_dict).forEach(key => {
    html_string += `<div class='single_link'>${key} - <a href='${creative_coding_dict[key]}' rel="noopener noreferrer">${creative_coding_dict[key]}</a></div><br>`;
});



main.innerHTML = html_string;