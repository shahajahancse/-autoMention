
    // Basic Example 1 to suggest name
    $('#basic-example').atwho({
        at: "@",  //set search term
        data:['Hans', 'Peter', 'Tom', 'Anne', 'Anna', 'John', 'Bob', 'Cook','Dolly','Eschar','Molly','Falsy','Gorge','Ita','Kenya','Lol','Nasty','Obi','Quick','Recd','Sally','Unv','Vale','Wow']
    });


    // Example 2 to suggest Emoji name
    var emojiSettings = {
        at: "#",   // search term set
        data: emojis,  // passing data  and emojis set country.js file
        // displayTpl: "<li>${name} <img src='https://assets-cdn.github.com/images/icons/emoji/${key}.png'  height='20' width='20' /></li>",  //if you display image, set image url
        displayTpl: "<li>${name} </li>",  // display name
        // insertTpl: "<img src='https://assets-cdn.github.com/images/icons/emoji/${name}.png'  height='20' width='20' />",  // if insert image, set image name and type
        insertTpl: "<li>${name} </li>",  // insert name
        insertTpl: ':${key}:', // insert with :
        // insertTpl: '${key}',   // insert with out :
        delay: 400  //set delay time
    };
    // Initialize Emojis on the autocomplete field
    $('#emojis-example').atwho(emojiSettings);


    // Example 3 to suggest Country name
    var countriesSettings = {
        at: "$",
        limit: 10,  // set limit, default 5
        data: countries,   // Country set country.js file
        displayTpl: "<li>${name} </li>",  // display name
        insertTpl: "<li>${name} </li>",
        insertTpl: "${name}",
    };
    // Initialize Country on the autocomplete field
    $("#county-example").atwho(countriesSettings);


    // Example 4 to initialize multiple same field
    var userSettings = {
        at: "@",
        data:['Hans', 'Peter', 'Tom', 'Anne', 'Anna', 'John', 'Bob', 'Cook','Dolly','Eschar','Molly','Falsy','Gorge','Ita','Kenya','Lol','Nasty','Obi','Quick','Recd','Sally','Unv','Vale','Wow']
    };
    // Initialize User Settings, Emojis Settings and Country Settings on the same autocomplete field
    $("#multiple").atwho(emojiSettings).atwho(countriesSettings).atwho(userSettings);


