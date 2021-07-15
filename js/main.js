
    // Basic Example 1  Basic user autocomplete to suggest name
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


    // Example 4 to initialize multiple autocomplete on the same field
    var userSettings = {
        at: "@",
        data:['Hans', 'Peter', 'Tom', 'Anne', 'Anna', 'John', 'Bob', 'Cook','Dolly','Eschar','Molly','Falsy','Gorge','Ita','Kenya','Lol','Nasty','Obi','Quick','Recd','Sally','Unv','Vale','Wow']
    };
    // Initialize User Settings, Emojis Settings and Country Settings on the same autocomplete field
    $("#multiple").atwho(emojiSettings).atwho(countriesSettings).atwho(userSettings);


 // example 5 normal ajax request
    // simple get data and show
    $('#first-ajax').keyup(function () {
        var url = 'https://restcountries.eu/rest/v2/all';
        $.get(url, function(data, status){
            let results = {
                at: '@',
                data:data,
                limit: 10,    // default set 5
                maxLen: 15,   // default set 20
                displayTpl: "<li>${name} </li>",
                insertTpl: "<li>${name} </li>",
                insertTpl: "${name}",
            };
            $("#first-ajax").atwho(results);
        });
    });


 /*
    // Finally More Complex (@) Country search and Suggest, (!) University search and Suggest (#) Capital search and Suggest. // Multiple API call and Dynamically api url change and api call to data fetch.
 */
    $('#more-complex').keyup(function () {
        // find search term
        let at = '';
        let query = '';
        let atRegex = /[@#!]/g; // set multiple character to mention search
        let str = $(this).val();  //  get query value

        // find mention character
        if (query = str.match(atRegex)) {
            at = query.toString();
        } else {
            return false;
        }

        //get url by specific search term to search data
        let url = '';
        if (createDynamicUrl(at, str)) {
            url = createDynamicUrl(at, str);
        } else {
            return false;
        }

        // finally ajax request to get data
        $.ajax({
            url: url,
            success: function(result){
                // data serialize
                // if data not formatting, so first need data formatting to display data
                if (at === '!') {
                    result = dataFormat(result);
                }
                // finally getting data display and selecting
                var country = {
                    at: at,  // dynamically set
                    data:result,
                    limit: 10,    // default set 5
                    maxLen: 15,   // default set 20
                    displayTpl: "<li>${name} </li>",
                    insertTpl: "<li>${name} </li>",
                    insertTpl: "${name}",
                };
                $("#more-complex").atwho(country);  // Finally auto complete
            }
        });
    });


    // data serialize
    function dataFormat(result) {
        let arrays = new Array();  // declare empty array to data serialize
        // Converting capital index to  name index
        for (const key of result) {
            arrays.push({name: key.capital, country: key.name});
        }
        return arrays; // finally return data
    }


    // set url by specific search term
    function createDynamicUrl(at, str) {
        let url = '';
        let regex = '';
        let search = '';

        // url define to data fetch
        regex = /(@|#|!)?\w*$/mg;
        if ((at === '@') && (str.match(regex))) {    // first set at sign character for search
            search = str.match(regex).join("").replace('@', '');
            if (search) {
                url = 'https://restcountries.eu/rest/v2/name/'+search;
            }

        } else if ((at === '#') && (str.match(regex))) {  // second set hash sign character for search
            // regex = /#\w*$/mg;
            search = str.match(regex).join("").replace('#', '');
            if (search) {
                url = 'http://universities.hipolabs.com/search?name='+search;
            }
        } else if ((at === '!') && (str.match(regex))) {   // third set exclamatory sign character for search
            // regex = /!\w*$/mg;
            search = str.match(regex).join("").replace('!', '');
            if (search) {
                url = 'https://restcountries.eu/rest/v2/capital/'+search;
            }
        }
        return url;  // finally return url
    }

// Conclusion the More complex section is not ensure to Time Complicity. This section just testing purpose used.
