 

export const stripHTMLTags = (htmlString) => {
    return htmlString.replace(/<br>/g, '\n').replace(/<[^>]+>/g, '');
}

export const replaceMergeTags = (data, htmlString) => {
    Object.keys(data)?.forEach(key => {
         if (htmlString.includes(`{{ ${key} }}`)) {
            let val = data[key];
             
            if (val instanceof Array) {
                const listElements = val.map(item => {
                    return `<li>${item}</li>`;
                });

                // create an unordered list in HTML
                val =   `<ul>${listElements}</ul>`;
            }


            const regexPattern = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
            htmlString = htmlString.replace(regexPattern, val)
         }
    });

    return htmlString;
}