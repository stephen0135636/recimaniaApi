
var express = require("express");
var app = express();

const port = process.env.PORT || 3000

app.get("/recipe" , (req, res) =>   {

    if(req.query.search == "Achu" || req.query.search == "achu"){
        res.json({
            "search":"Achu Soup",
            "location": "Cameroon",
            "summary": "Achu is a traditional food in Cameroon, a yellow soup. It is made with cocoyam. Spices, water, palm oil, and canwa (limestone), and fish also other ingredient like meat can be added",
            "ingredients": ["For the Achu soup","3 pounds boiled meats/fish of choice","4 cups beef stock (from the beef above)","½ cup palm oil","2 teaspoons baking soda (or kanwa/nikki)","2 teaspoons powdered achu spices","2-4 small seasoning cubes (Maggi)","Salt to taste","1 hot (scotch bonnet) pepper - optional","For the Achu", "4 pounds small cocoyams (taro) - you could add in achu banana (unripe bananas) and some large cocoyams if you so wish"],
            "procedure": ["To make the achu soup","Warm palm oil in a skillet (frying pan) for about 1 minute. Do NOT bleach it.","Pour the all ingredients except the meat and fish into a blender. Pulse until it is well mixed and yellowish. Taste to ensure that seasoning is perfect. Add a little salt if needed (I assume your beef stock is salted so you might not need to add a lot more salt)"," You might find some bubbles at the top of the soup. That is totally okay. Pour over the meat/fish and mix. Alternately, you could keep the meat seperately from the soup and put it on the side while serving.Serve with some achu","To make the achu", "Wash cocoyams and place in a pot with skin on. If also using large cocoyams (mami coco) and achu banana, place the large cocoyams at the bottom of the pot then add in the small cocoyams and top with the bananas.","Boil until cocoyams are soft and the skin comes off easily.","While they are still warm, peel and process to a paste in a food processor. Traditionally, they are pounded in a mortar but a food processor can do the job though it might not give you a very smooth paste.","When it is all processed, place into a serving bowl and serve. You could also wrap the achu into lumps using warmed banana leaves or aluminium foil."],
            "image": "https://cdn.tasteatlas.com/Images/Dishes/6f95e843c7ab4a089bc188cb2b8e07f0.jpg?w=905&h=510"
        });

    }else if (req.query.search == "Afang" || req.query.search == "afang"){
        res.json({
            "search":"Afang Soup",
            "location": "Nigeria",
            "summary": "Afang soup is a vegetable soup that originates from the Efik people of the Efik kingdom in Cross River State and the Ibibio People of Akwa Ibom in Southern Nigeria.It is a dish popularly known by Nigerians and also some parts of Africa. It is especially popular among the Ibibio and the Anang people of Akwa Ibom and Cross River state whom have adopted this cuisine as part of their cultural identity.It is served at homes and also sometimes at ceremonies such as weddings, burials, festivals etc. mostly in the southern part of Nigeria.Afang soup is very nutritious and cost of preparation can be adaptable based on family needs.", 
            "ingredients": [],
            "procedure": [],
            "image": ""
        });
    }else if(req.query.search == "Akara" || req.query.search == "akara"){
        res.json({
            "search":"Akara",
            "location": "Nigeria",
            "summary": "",
            "ingredient": [],
            "procedure": [],
            "image": ""
        });
    }else if(req.query.search == "Amala" || req.query.search == "amala"){
        res.json({
            "search":"Amala",
            "location": "Nigeria",
            "summary": "Àmàlà is a local indigenous Nigerian food, native to the Yoruba ethnic group in the western states of the country. It is made out of yam and/or cassava flour, or unripe plantain flour. Yams are peeled, sliced, cleaned, dried and then blended into a flour, also called elubo. Yams are white in colour but turn brown when dried. This gives àmàlà its colour. Àmàlà is from Western Africa and eaten mostly by the Yoruba people in Nigeria. Amala is mainly consumed by indigenous people of the Southwestern part of Nigeria. It could be served with a variety of ọbẹ (soups), such as ẹfọ, ilá, ewédú, ogbono or gbegiri.",
            "ingredient": [],
            "procedure": [],
            "image": ""
        });
    }else if(req.query.search == "Asida" || req.query.search == "asida"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Attiéké" || req.query.search == "attiéké"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Banga" || req.query.search == "banga"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Bobotie" || req.query.search == "bobotie"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Boerewors" || req.query.search == "boerewors"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Braaibroodjies" || req.query.search == " braaibroodjies"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Chakalaka" || req.query.search == "chakalaka"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Draw soup" || req.query.search == "draw soup"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Edikang Ikong" || req.query.search == "edikang Ikong"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Echicha" || req.query.search == "echicha"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Efo Riro" || req.query.search == "efo Riro"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Egusi soup" || req.query.search == "egusi soup"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Fufu" || req.query.search == "Fufu"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Garri" || req.query.search == "garri"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Gatsby" || req.query.search == "gatsby"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Harira" || req.query.search == "Harira"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": [],
            "procedure": "",
            "image": ""
        })
    }
});

app.listen(port, () => {
    console.log("Server running on port 3000");
   });
   