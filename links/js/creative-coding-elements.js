const main = document.querySelector('creative-coding');

const prefix = 'https://joshschaaf.com/creative-coding/'

var creative_coding_dict = {
    'Stars': prefix + 'stars',
    'Bubbles': prefix + 'bubbles',
    'Spaghetti': prefix + 'spaghetti',
    'Piet Mondrian': prefix + 'mondrian',
    'Light and Dark': prefix + 'light-and-dark',
    'Grid': prefix + 'grid',
    '10 Minute(ish) Sketch': prefix + 'ten-minutes',
    'Glitch': prefix + 'glitch',
    'Intersections': prefix + 'intersections',
    'Debug-View': prefix + 'debug-view',
    'Spinny Thing': prefix + 'spinny-thing',
    'Spinny Loop': prefix + 'spinny-loop',
    'Horizontal & Vertical': prefix + 'genuary-1-2025',
    'Layers': prefix + 'genuary-2-2025'
};

var html_string = ``;

Object.keys(creative_coding_dict).forEach(key => {
    html_string += `<div class='single_link'>${key} - <a href='${creative_coding_dict[key]}' rel="noopener noreferrer">${creative_coding_dict[key]}</a></div><br>`;
});



main.innerHTML = html_string;