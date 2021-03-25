
var express = require("express");
var app = express();

const port = process.env.PORT || 3000

app.get("/recipe" , (req, res) =>   {

    if(req.query.search == "Achu" || req.query.search == "achu"){
        res.json({
            "search":"Achu Soup",
            "location": "Cameroon",
            "summary": "Achu is a traditional food in Cameroon, a yellow soup. It is made with cocoyam. Spices, water, palm oil, and canwa (limestone), and fish also other ingredient like meat can be added",
            "ingredients": ["FOR THE ACHU SOUP","3 pounds boiled meats/fish of choice","4 cups beef stock (from the beef above)","½ cup palm oil","2 teaspoons baking soda (or kanwa/nikki)","2 teaspoons powdered achu spices","2-4 small seasoning cubes (Maggi)","Salt to taste","1 hot (scotch bonnet) pepper - optional","FOR THE ACHU", "4 pounds small cocoyams (taro) - you could add in achu banana (unripe bananas) and some large cocoyams if you so wish"],
            "procedure": ["TO MAKE THE ACHU","Warm palm oil in a skillet (frying pan) for about 1 minute. Do NOT bleach it.","Pour the all ingredients except the meat and fish into a blender. Pulse until it is well mixed and yellowish. Taste to ensure that seasoning is perfect. Add a little salt if needed (I assume your beef stock is salted so you might not need to add a lot more salt)"," You might find some bubbles at the top of the soup. That is totally okay. Pour over the meat/fish and mix. Alternately, you could keep the meat seperately from the soup and put it on the side while serving.Serve with some achu","TO MAKE THE ACHU", "Wash cocoyams and place in a pot with skin on. If also using large cocoyams (mami coco) and achu banana, place the large cocoyams at the bottom of the pot then add in the small cocoyams and top with the bananas.","Boil until cocoyams are soft and the skin comes off easily.","While they are still warm, peel and process to a paste in a food processor. Traditionally, they are pounded in a mortar but a food processor can do the job though it might not give you a very smooth paste.","When it is all processed, place into a serving bowl and serve. You could also wrap the achu into lumps using warmed banana leaves or aluminium foil."],
            "image": "https://www.africanbites.com/wp-content/uploads/2014/02/IMG_3487.jpg",
            "video": "https://www.youtube.com/watch?v=bjy-AzsCLnM"
        });

    }else if (req.query.search == "Afang" || req.query.search == "afang"){
        res.json({
            "search":"Afang Soup",
            "location": "Nigeria",
            "summary": "Afang soup is a vegetable soup that originates from the Efik people of the Efik kingdom in Cross River State and the Ibibio People of Akwa Ibom in Southern Nigeria.It is a dish popularly known by Nigerians and also some parts of Africa. It is especially popular among the Ibibio and the Anang people of Akwa Ibom and Cross River state whom have adopted this cuisine as part of their cultural identity.It is served at homes and also sometimes at ceremonies such as weddings, burials, festivals etc. mostly in the southern part of Nigeria.Afang soup is very nutritious and cost of preparation can be adaptable based on family needs.", 
            "ingredients": ["4 handfuls Okazi or Afang leaves, ground","2 handfuls water leaves, sliced","1 large dry fish","1 large stockfish","1kg assorted meat","4 tbsp crayfish","2 cups palm oil","5 pieces of fresh yellow pepper","5 stock cubes","1 onion, sliced","2 cups of water","1 cup of periwinkles, washed","Salt to taste"],
            "procedure": ["Place your assorted meat, stockfish, dry fish and two cups of water into a pot. Add one onion, three stock cubes and salt to taste. Cook until soft.", "When the meat water is almost dry, add the water leaves, leave to cook for 3 minutes. (Tip: No need to put in more water because water leaves produce a lot of water on their own.)","Put the periwinkles, ground crayfish and five blended yellow pepper, let that cook for another three minutes.","Add your ground Afang or Okazi leaves and let cook for two minutes. Lastly, add palm oil and leave to simmer for about two minutes.","Serve hot with your preferred staple food.","The soup is ready"],
            "image": "https://guardian.ng/wp-content/uploads/2018/09/Afang-soup-recipe-581x600.png",
            "video": "https://www.youtube.com/watch?v=0iY9uZLMO1s"
        });
    }else if(req.query.search == "Akara" || req.query.search == "akara"){
        res.json({
            "search":"Akara",
            "location": "Nigeria",
            "summary": "Akara, which is also known as black-eyed peas fritters or Acaraje, is a very delicious, deep-fried beans cake made from black-eyed peas paste. It is a vegetarian-friendly meal eaten in most parts of West Africa and Brazil. ",
            "ingredient": ["2 cups of peeled beans (depending on the size of people you are proving for)","1 big onion","2 scotch bonnet chillies","salt","Little water to blend","Vegetable oil for frying"],
            "procedure": ["Soak the beans for about 30 minutes till the skin is swollen and peel off the skin by rubbing it between your palms or simply use a blender by pulsing it a couple of times till the skin falls off.","Put the beans into a large bowl and separate the skin from the beans by adding enough water and gently swirling the beans around so that the skin can float. Pour off the skins, into a colander. Repeat this process until the beans are clean.","Pour the clean beans inside the blender, add the water and blend into a paste.","Pour the batter into a large bowl and whisk together until it's light and fluffy. Hand whisk for about 3 to 4 minutes or an electric hand mixer for about a minute or two.","Blend the Habanero, bell peppers and Onions in a separately and mix it together with the Beans paste.","Add the stock cube and salt to taste (this recipe is very sensitive to salt so be careful a little goes a long way) then mix everything together.","Preheat some oil in a pan (enough to deep fry the Akara). Drop heaping tablespoons of fritter batter into the hot oil, frying a couple at a time to avoid overcrowding. Turn once or twice in between for even browning. Fry the fritters for about 5 to 6 minutes, or until golden brown on all sides.","It's good to press down the Akara balls a little bit just before taking them out of the oil to get rid of any excess oil that might have been absorbed during the frying process.","Remove fritters from the pan and drain on a paper towel-lined plate."],
            "image": "https://i0.wp.com/www.myactivekitchen.com/wp-content/uploads/2015/04/akara-image-4.jpg?w=600&ssl=1",
            "video": "https://www.youtube.com/watch?v=yQDw-P3CkAw"
        });
    }else if(req.query.search == "Amala" || req.query.search == "amala"){
        res.json({
            "search":"Amala",
            "location": "Nigeria",
            "summary": "Àmàlà is a local indigenous Nigerian food, native to the Yoruba ethnic group in the western states of the country. It is made out of yam and/or cassava flour, or unripe plantain flour. Yams are peeled, sliced, cleaned, dried and then blended into a flour, also called elubo. Yams are white in colour but turn brown when dried. This gives àmàlà its colour. Àmàlà is from Western Africa and eaten mostly by the Yoruba people in Nigeria. Amala is mainly consumed by indigenous people of the Southwestern part of Nigeria. It could be served with a variety of ọbẹ (soups), such as ẹfọ, ilá, ewédú, ogbono or gbegiri.",
            "ingredient": ["Flour (cassava or yam flour)","Water"],
            "procedure": ["Pour the quantity of water you want to use in a pot and let it heat to a boiling point.","Once the water is boiled, turn out the fire and gradually begin to add your flour. Ensure you do not add the flour to the water when still on the fire, that way it does not form lumps.","Turn the flour with a wooden stick for a while, add little water and put it back on the fire to cook on low heat for about 5mins so as to make it cook properly.","You can use one of your clean finger to feel it while still on fire to be sure it is neither too soft nor to hard add some hot water.","Stir well until it very smooth","Wrap with nylon and put it in a cooler , so as to keep it warm."],
            "image": "https://allnigeriainfo.ng/wp-content/uploads/2017/03/Amala-800x445.jpg",
            "video": "https://www.youtube.com/watch?v=XddnOvAlmwc"
        });
    }else if(req.query.search == "Asida" || req.query.search == "asida"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredient": ["10tbsp wheat flour","1200ml of water","10tbsp of Semolina","6tbsp honey","Olive oil","Salt"],
            "procedure": ["Sprinkle few drops of olive oil in a cooking pan and heat for one minute. Add all your ingredients into the pan and whisky until the mixture is perfectly thick and bubbling.","Transfer the mixture in a bowl and mizzle olive oil and honey","Enjoy with the middle and index finger of your right hand."],
            "image": "https://afrogistmedia.com/wp-content/uploads/2020/08/Asida-recipe.jpg",
            "video": "https://www.youtube.com/watch?v=xSg7rdKY3cs"
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
   
