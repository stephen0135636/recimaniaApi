
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
            "ingredients": ["2 cups of peeled beans (depending on the size of people you are proving for)","1 big onion","2 scotch bonnet chillies","salt","Little water to blend","Vegetable oil for frying"],
            "procedure": ["Soak the beans for about 30 minutes till the skin is swollen and peel off the skin by rubbing it between your palms or simply use a blender by pulsing it a couple of times till the skin falls off.","Put the beans into a large bowl and separate the skin from the beans by adding enough water and gently swirling the beans around so that the skin can float. Pour off the skins, into a colander. Repeat this process until the beans are clean.","Pour the clean beans inside the blender, add the water and blend into a paste.","Pour the batter into a large bowl and whisk together until it's light and fluffy. Hand whisk for about 3 to 4 minutes or an electric hand mixer for about a minute or two.","Blend the Habanero, bell peppers and Onions in a separately and mix it together with the Beans paste.","Add the stock cube and salt to taste (this recipe is very sensitive to salt so be careful a little goes a long way) then mix everything together.","Preheat some oil in a pan (enough to deep fry the Akara). Drop heaping tablespoons of fritter batter into the hot oil, frying a couple at a time to avoid overcrowding. Turn once or twice in between for even browning. Fry the fritters for about 5 to 6 minutes, or until golden brown on all sides.","It's good to press down the Akara balls a little bit just before taking them out of the oil to get rid of any excess oil that might have been absorbed during the frying process.","Remove fritters from the pan and drain on a paper towel-lined plate."],
            "image": "https://i0.wp.com/www.myactivekitchen.com/wp-content/uploads/2015/04/akara-image-4.jpg?w=600&ssl=1",
            "video": "https://www.youtube.com/watch?v=yQDw-P3CkAw"
        });
    }else if(req.query.search == "Amala" || req.query.search == "amala"){
        res.json({
            "search":"Amala",
            "location": "Nigeria",
            "summary": "Àmàlà is a local indigenous Nigerian food, native to the Yoruba ethnic group in the western states of the country. It is made out of yam and/or cassava flour, or unripe plantain flour. Yams are peeled, sliced, cleaned, dried and then blended into a flour, also called elubo. Yams are white in colour but turn brown when dried. This gives àmàlà its colour. Àmàlà is from Western Africa and eaten mostly by the Yoruba people in Nigeria. Amala is mainly consumed by indigenous people of the Southwestern part of Nigeria. It could be served with a variety of ọbẹ (soups), such as ẹfọ, ilá, ewédú, ogbono or gbegiri.",
            "ingredients": ["Flour (cassava or yam flour)","Water"],
            "procedure": ["Pour the quantity of water you want to use in a pot and let it heat to a boiling point.","Once the water is boiled, turn out the fire and gradually begin to add your flour. Ensure you do not add the flour to the water when still on the fire, that way it does not form lumps.","Turn the flour with a wooden stick for a while, add little water and put it back on the fire to cook on low heat for about 5mins so as to make it cook properly.","You can use one of your clean finger to feel it while still on fire to be sure it is neither too soft nor to hard add some hot water.","Stir well until it very smooth","Wrap with nylon and put it in a cooler , so as to keep it warm."],
            "image": "https://allnigeriainfo.ng/wp-content/uploads/2017/03/Amala-800x445.jpg",
            "video": "https://www.youtube.com/watch?v=XddnOvAlmwc"
        });
    }else if(req.query.search == "Asida" || req.query.search == "asida"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredients": ["10tbsp wheat flour","1200ml of water","10tbsp of Semolina","6tbsp honey","Olive oil","Salt"],
            "procedure": ["Sprinkle few drops of olive oil in a cooking pan and heat for one minute. Add all your ingredients into the pan and whisky until the mixture is perfectly thick and bubbling.","Transfer the mixture in a bowl and mizzle olive oil and honey","Enjoy with the middle and index finger of your right hand."],
            "image": "https://afrogistmedia.com/wp-content/uploads/2020/08/Asida-recipe.jpg",
            "video": "https://www.youtube.com/watch?v=xSg7rdKY3cs"
        })
    }else if(req.query.search == "Banga" || req.query.search == "banga"){
        res.json({
            "search":"Banga",
            "location": "North Africa",
            "summary": "Banga, also known as Oghwo amiedi in Urhobo language and izuwo ibiedi in Isoko language, is a type of palm fruit soup from Southern the Niger Delta Nigeria particularly the Itsekiri ethnic group.This cuisine is quite different from Ofe Akwu which is a variant found in Igbo culture. The Binis have a soup from palm fruits similar to Ofe Aku in ingredients and manner of preparation",
            "ingredients": ["1. 1 kg palm fruits or 800g tinned Palm Fruit Concentrate","Beef","Dry fish","Vegetable: scent leave for Ofe Akwu or dried and crushed bitter leaves for Delta-style Banga Soup","2 medium onions","2 Tbsp ground crayfish","Salt and chilli pepper, to taste","Ogiri Okpei (Iru) (seasoning mix)","1 - 2 big stock cubes"],
            "procedure": ["Extract the palm fruit concentrate from the palm fruits","Cook the beef and the dry fish with 1 bulb of diced onion and the stock cubes till done.","Wash and cut the scent leaves into tiny pieces. The scent leaves give the Banga Stew (Ofe Akwu) its unique aroma and taste. If you are outside Nigeria, this may be hard to find, so you can use pumpkin leaves or any other vegetable in place of scent leaves. If cooking Delta-style Banga Soup for starch, you should either cook this soup without vegetables or use dried and crushed bitter leaves.","Cut the remaining bulb of onion. Pound the crayfish, ogiri okpei and pepper in a mortar and set aside. You can also grind them with a dry mill.","Set the pot of palm fruit extract on the stove and start cooking at high heat. Leave to boil till you notice come red oil at the surface of the Banga Stew. If you think that the Banga Soup is watery, cook till the soup has thickened to the consistency you like for your stews.","Now, add the beef, dry fish and stock, the onions, crayfish and pepper and leave to boil very well.","Now, add the beef, dry fish and stock, the onions, crayfish and pepper and leave to boil very well."],
            "image": "https://allnigerianfoods.com/wp-content/uploads/banga-stew-ofe-akwu.jpg",
            "video": "https://www.youtube.com/watch?v=UbD-Z8Yq03cs"
        })
    }else if(req.query.search == "Bobotie" || req.query.search == "bobotie"){
        res.json({
            "search":"Bobotie",
            "location": "South African",
            "summary": "Bobotie (Afrikaans: [bəˈbuəti]) is a well-known South African dish consisting of spiced minced meat baked with an egg-based topping",
            "ingredients": ["3 slices of bread1", "cup + ½ cup milk, divided","2 tablespoons olive oil","2 large onions, roughly chopped","4 teaspoons medium curry powder","1 teaspoon dried herbs (whatever you’ve got around – oregano, basil, marjoram, etc.)","1 teaspoon ground cumin","½ teaspoon ground turmeric","2 garlic cloves"," finely chopped","1½ pound ground beef","½ cup fruit chutney","1 tablespoon apricot jam","Zest and juice of one medium lemon, divided","4 teaspoons tomato paste","Salt and pepper2"," large eggs","4 bay leaves"],
            "procedure": ["Preheat your oven to 350°F.","Soak the bread in 1 cup of the milk.","Heat the olive oil in a wide skillet set over medium heat. Once the oil is hot, add the onions, and cook until soft.","Add the curry powder, mixed herbs, cumin, turmeric and garlic, and stirring constantly, allow to cook for a minute or two until the garlic is soft.","Add the ground beef, and cook, stirring frequently to break up any big chunks, until browned.", "Once the beef is browned, remove the skillet from the heat, and stir in the chutney, apricot jam, all the lemon zest, half the lemon juice, tomato paste, and salt and pepper to taste. Mix well, give it a taste, and add more lemon juice, salt, and pepper as desired. It should be delightfully zingy!", "Squeeze the milk from the bread, reserving the milk for later, and smooshing and tearing the bread into small pieces. Mix the bread into the beef mixture, and spread evenly into an oven proof dish.","Strain the milk that has come from the bread, and add the remaining ½ cup of milk. Beat in the eggs, and season with ¼ teaspoon salt and pepper to taste. Pour this over the meat, and decoratively scatter the bay leaves on top.","Bake, uncovered, at 350°F for 45 minutes, or until golden brown."],
            "image": ""
        })
    }else if(req.query.search == "Jollof rice" || req.query.search == "jollof rice"){
        res.json({
            "search":"Jollof rice",
            "location": "West africa",
            "summary": "Jollof, or jollof rice, is a rice dish popular in West and Sub-Saharan Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a single pot, although its ingredients and preparation methods vary across different regions.",
            "ingredients": ["6 medium tomatoes, sliced","1 red bell pepper, stemmed, seeded and quartered","2 small red onions, 1 quartered, 1 diced","1 scotch bonnet pepper, or habanero, stem removed","½ cup vegetable oil (120 mL), plus 2 tablespoons","1 lb boneless chicken thighs (450 g), cubed","2 teaspoons curry powder","1 teaspoon dried thyme"," 2 cups parboiled long grain rice (400 g), washed","2 stock cubes"," ¾ cup water (180 mL)"],
            "procedure": ["Add the tomatoes, red bell pepper, quartered onion, and pepper to a blender and blend until smooth.","In a pot over medium heat, add 2 tablespoons oil, diced red onion, chicken, and curry powder. Cook until onions are soft and chicken has browned, about 8-10 minutes. Remove chicken from pot and set aside.","Raise heat to medium-high, and using the same pot, add pureed tomato mixture, cooking until reduced by half.","Add in remaining oil, and fry sauce for 8-10 minutes.","Stir in chicken, along with rice, stock and thyme leaves.","Cover pot tightly with foil. Cover with lid and reduce heat to low, cooking for 30 minutes.","Once rice is cooked, fluff up before serving." , "Enjoy!"],
            "image": "https://cheflolaskitchen.com/wp-content/uploads/2018/10/Jollof-Rice-15.jpg",
            "video": "https://www.youtube.com/watch?v=nZJm84Iemeo"
        })
    }else if(req.query.search == "Fried rice" || req.query.search == "fried rice"){
        res.json({
            "search":"Fried rice",
            "location": "Nigeria",
            "summary": "The Nigerian fried Rice is a staple lunch or dinner dish in Nigeria. Very simple yet delicious recipe. This version uses mixed vegetables and Beef liver, which is one of the most popular choices in Nigeria, you can use Shrimp or any protein you'd like.",
            "ingredients": ["2 Cups cooked Rice","1 Cup Mixed Vegetables I used Carrots, Sweet Peas, Sweet Corn and Green Beans","1 cup Onion diced","2 Scallions","1 Cup Beef Liver Cubed","1/2 Teaspoon Thyme","1 Teaspoon Curry powder","1/2 cup Chicken stock","1 Stock cube","3 Tablespoons Oil for frying","Salt to taste"],
            "procedure": ["Add the parboiled Rice to the stock and cook until the water is dried up.","Preheat the oil in a Pan, throw in the Onions and fry for a minute or two, add the scallions, mixed vegetables and the seasonings ( Thyme, Curry Powder, Salt and Stock Cube)","Throw in the rice and stir-fry for about 3 to 5 Minutes. Take it off the heat and serve"],
            "image": "https://cheflolaskitchen.com/wp-content/uploads/2015/06/Fried-Rice-30.jpg",
            "video": "https://www.youtube.com/watch?v=Td35lo50TCs"
        })
    }else if(req.query.search == "Yam and Egg sauce" || req.query.search == " yam and egg sauce"){
        res.json({
            "search":"Yam and Egg sauce",
            "location": "Nigeria",
            "summary": "Egg sauce is just one of the many egg recipes existing in Nigeria. Now that I think about it, I just realized that eggs are actually very common in Nigeria. It is used for making bread, cakes, and virtually every snack in Nigeria.",
            "ingredients": ["3 eggs."," 2 spoons sliced pepper","Vegetable oil (200ml).","2 cups of sliced fresh tomatoes.","Sliced pepper to taste.","1 cup of sliced onions.","One cube of maggi or knorr.","Salt to taste.","2 spoons of Sliced Green Peppers (optional)"],
            "procedure": ["Start by Slicing your tomatoes, onions, and peppers using a kitchen knife.","Set frying pan on the heat and add just 200ml of oil (vegetable or olive oil), allow the oil to heat up for few minutes.","Add the sliced tomatoes, peppers, onions and fry.","Add salt to taste, half of a seasoning cube. Stir to avoid burning.","Beat eggs in a separate bowl, add a pinch of salt and pour it into the frying tomatoes.","Allow the egg to fry.","Don't let it get burned. Try breaking into tiny crumbs so you can get an exact replica of what you see here.","Serve egg sauce with boiled white yams.",],
            "image": "https://allnigerianfoods.com/wp-content/uploads/making-egg-sauce.jpg",
            "video": "https://www.youtube.com/watch?v=9ISlwG5ULxc"
        })
    }else if(req.query.search == "Ogbono soup" || req.query.search == "ogbono soup"){
        res.json({
            "search":"Ogbono soup ",
            "location": "Nigeria",
            "summary": "Ogbono soup is a delectable Nigerian concoction soup and it’s super easy to prepare. It’s a thick and hearty stew made with Ogbono seeds loaded with meats and fish simmered in a light delicious broth.",
            "ingredients": ["1 Cup blended Ogbono or wild mango seed","4 Cups stock Beef or Chicken","Meat Tripe, cow skin or Fish of choice","1 Cup Stock Fish","Salt to taste","2 stock cubes","1/2 Tbsp Red Chili flakes or Cayenne pepper","1 Tbsp Crayfish ground","Ugwu Kale or Collard Greens","3/4 Cup Periwinkle","1/3 Cup Palm Oil"],
            "procedure": ["Cut the beef rinse and throw into a pot. season with Salt, bullion powder (or stock cubes). Add the diced Onions and the red chili flakes, Leave to boil for about 20 to 30 minutes depending on how tender you want the meat to be.","Once the meat is almost done, add the stockfish and cook for 5 minutes or till soft.","Blend the Ogbono seeds and add it to the boiling meat: Be sure you have enough stock in the pot. You need about four cups of stock to start with. Stir very well until the Ogbono is well dissolved in the stock","Stir in the periwinkles, crayfish, and Palm Oil and leave to cook for another 5 minutes.","Now turn down the heat then add your leafy greens. Leave to simmer for another 2 to 3 minutes.","Serve with your favorite swallow like Eba, Amala, Pounded Yam and the likes. ENJOY!"],
            "image": "https://i1.wp.com/www.thepretendchef.com/wp-content/uploads/2016/04/pstn-1-3.jpg?w=640",
            "video": "https://www.youtube.com/watch?v=SsjFg55ggqo"
        })
    }else if(req.query.search == "Egusi" || req.query.search == "egusi"){
        res.json({
            "search":"Egusi Soup",
            "location": "West african",
            "summary": "Nigerian Egusi Soup is a soup thickened with ground melon seeds and contains leafy and other vegetables.  It is one of the most popular soups prepared by most tribes in Nigeria with considerable variation and often eaten with dishes like Pounded Yams.  Prepare it with goat, beef, fish, or shellfish!",
            "ingredients": ["2 Cups Melon","1 Cup Palm Oil or a little more or less depending on preference","4 Tbsp Crayfish","3 Tbsp locust beans","24 oz chopped spinach","1 Red Bell Pepper","1 Habanero Pepper","1 Fresno Pepper","2 Onions","Stock Cube Optional","1 lb Beef Tripe, Dry Fish, Cow Leg","Salt To Taste","3 cups Beef stock Chicken stock works just as well"],
            "procedure": ["Blend the peppers and Onions together until smooth and set aside.","Blend the Egusi melon, half of the second Onion, and Crayfish together. Set aside as well.","Heat the Palm Oil in a pan and allow it to melt over medium heat but don't overheat the Oil. Add the remaining half onion (diced) and half of the Locust bean. Let it cook for about 3 minutes on medium heat.","Add the blended pepper and cook till the water is reduced this should take about 15 minutes on medium heat until the water is reduced stirring about every 5 minutes to prevent burning.","Add the remaining locust bean, Beef stock, and salt to taste. Cover and leave to cook for another 5 minutes","Gently introduce the blended Egusi inside the sauce but don't stir it at this point. Just cover it and leave it to cook for about 20 to 30 minutes Keep an eye on it so it doesn't burn but try not to stir it until the Egusi turns into a soft compact mass. Then, gently stir together and add more stock or water if necessary.","Add the Fish and meat and leave to cook again for another 5 minutes.","Stir in the Spinach and leave to simmer for about 5 minutes (stir constantly).  Adjust the seasoning if necessary.","Serve while still hot."],
            "image": "https://cheflolaskitchen.com/wp-content/uploads/2018/06/Egusi-soup-Recipe-2.jpg",
            "video": "https://www.youtube.com/watch?v=LqGj3_UT9h8&t=300s"
        })
    }else if(req.query.search == "Bitter leaf soup" || req.query.search == "bitter leaf soup"){
        res.json({
            "search":"Bitter leaf soup",
            "location": "Nigeria",
            "summary": "Bitter leaf soup or ofe onugbu is another popular Nigerian soup made with bitter leaves and cocoyam paste. This delicious Nigerian soup is packed full of flavour, hearty and quite filling too. ",
            "ingredients": ["330g Bitter leaf (onugbu, processed in the market)","Assorted meat (beef, cowskin, tripe, intestines etc)","Dry fish","stockfish","3-4 cups Palmoil","2 cups cocoyam paste (ede)","22-25g ogili isi","6 tablespoons ground crayfish","6 scotch bonnet (fresh pepper)","8 cups stock+water","4 seasoning cubes","salt"],
            "procedure": ["Wash and boil bitter leaf to remove the last bit of bitterness and soften it. The colour of the leaves will be dull and very slightly browned.","Meanwhile, process your cocoyam. Wash and boil cocoyam till soft. Peel and pound with mortar and pestle, blender or food processor. Set aside.","Wash dry fish. Soak dry fish in boiling hot water for 2 minutes, drain and rinse well in cold water.","Wash and boil meat and stockfish, till almost tender, add dry fish and boil for 5 minutes.","Add enough water to the stock to make up to 8 cups of broth. Bring to a boil.","Add palm oil, bitter leaf, pepper and cocoyam paste in big lumps.","Cook for 5-8 minutes till cocoyam has almost all dissolved and the soup has thickened.","Reduce heat to medium high and add crayfish, ogili and seasoning cube, stir and taste, add salt.","Cook till the oil has lost all its raw taste and the taste of the ingredients have blended well, about 8 minutes.","Reduce the heat further and cook for another 5 minutes, it is a long cooking soup. Take off the heat.","Serve with any swallow of your choice."],
            "image": "https://i1.wp.com/www.myactivekitchen.com/wp-content/uploads/2019/12/bitter-leaf-soup-ofe-onugbu-recipe-img-1.jpg?w=600&ssl=1",
            "video": "https://www.youtube.com/watch?v=ya3FpKz9qYY"
        })
    }else if(req.query.search == "Nigerian Barbecue Fish" || req.query.search == "nigerian Barbecue Fish"){
        res.json({
            "search":"Nigerian Barbecue Fish",
            "location": "So many places",
            "summary": "A barbecue can refer to the cooking method itself, the meat cooked this way, or to a type of social event featuring this type of cooking. Barbecuing is done outdoors by smoking meat over wood or charcoal. Restaurant barbecue may be cooked in large, specially-designed brick or metal ovens. Barbecue is practiced in many countries and there are numerous regional variations.",
            "ingredients": ["1 Large Tilapia Fish","A thumb size of Ginger","4 Cloves of Garlic","7 Scotch Bonnet Peppers (Adjust accordingly)","1 Bulb of onion","2 Tomatoes","A handful of Parsley","1 Green Bell Pepper","1 Red Bell Pepper","2 Chicken Seasoning cubes","1 tablespoon of Suya Spice","1/2 cup of Vegetable oil"],
            "procedure": ["Descale and wash fish, make incisions in the fish for better seasoning and set aside."," Secondly, blend the ginger, garlic, peppers, onions, tomatoes, parsley, green pepper, chicken seasoning cube, suya spice and vegetable oil till all is coarsely blended.","With gloves or well oiled hands, rub the marinade all over the fish and inside the slits as well and allow to sit for about an hour or 2.","Oil your grill rack and if you are using a fish grill basket, oil that as well. Place your seasoned fish in the fish grill basket and place on the grill. You can also place directly on the grill as long as it is well oiled.","5. Flip the fish multiple times in the course of grilling to ensure it cooks well which would take 30-45 minutes and pour some marinade on each side as you flip.","Once fish is cooked, serve it hot with the blended marinade (optional), extra onions, green pepper and any other accompaniment."],
            "image": "https://lagosmums.com/wp-content/uploads/2019/01/nigerian-bbq-fish-recipe-600x400.jpg",
            "video": "https://youtu.be/VYNOd-4YGBI"
        })
    }else if(req.query.search == "Suya" || req.query.search == "suya"){
        res.json({
            "search":"Suya",
            "location": "Northern Nigeria",
            "summary": "Suya or tsire is a spicy meat skewer which is a popular food item in West Africa.[1] It is also eaten in Sudan, referred to as 'Agashe' Suya is generally made with skewered beef, ram, or chicken. Innards such as kidney, liver and tripe are also used.The thinly sliced meat is marinated in various spices which include peanut cake, salt, vegetable oil and other flavorings, and then barbecued. ",
            "ingredients": ["1 tablespoon finely ground roasted peanuts","1 teaspoon ground cayenne pepper","1 teaspoon ground paprika","1 teaspoon salt","½ teaspoon ground ginger"," ½ teaspoon garlic powder","½ teaspoon onion powder","1 ½ pounds beef tri-tip steak, cut into bite-size pieces","1 red bell pepper, cut into bite-size pieces","¼ onion, cut into bite-size pieces","4 mushrooms, halved"],
            "procedure": ["Mix ground peanuts, cayenne pepper, paprika, salt, ginger, garlic powder, and onion powder together in a bowl.","Step 2","Combine spice mixture and beef in a resealable plastic bag; shake until well coated. Marinate in the refrigerator, about 30 minutes.","Step 3","Preheat an outdoor grill for medium-high heat and lightly oil the grate.","Step 4","Place beef, bell pepper, onion, and mushrooms in alternating order onto skewers.","Step 5","Cook on the preheated grill, flipping once, until meat is browned and vegetables are soft, 10 to 15 minutes."],
            "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4619789.jpg",
            "video": "https://www.youtube.com/watch?v=5Tiam7S3lig"
        })
    }else if(req.query.search == "Beans" || req.query.search == "beans"){
        res.json({
            "search":"Cooked beans",
            "location": "Northern Nigeria",
            "summary": "A bean is the seed of one of several genera of the flowering plant family Fabaceae, which are used as vegetables for human or animal food.They can be cooked in many different ways,[2] including boiling, frying, and baking, and are used in many traditional dishes throughout the world.",
            "ingredients": ["5 or any amount of beans", "Onions","pepper","Red oil","Curry","Salt for taste"],
            "procedure": ["First boil your beans to the point that it can be eatable", "after boling it mix it with red oil","Mix other ingredients with it for taste","most importantly add red oil","Mix all together and leave it on the fire for 10 min","you can add other ingredients like plantain and yam"],
            "image": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/cooked-beans-with-yam-crayfish-ugu-african-foods.jpg",
            "video": ""
        })
    }else if(req.query.search == "Moin moin" || req.query.search == "Moin moin" || req.query.search == "moi moi"){
        res.json({
            "search":"Moin moin",
            "location": "Western Nigeria",
            "summary": "Moin-Moin or Moimoi is a Nigerian steamed bean pudding made from a mixture of washed and peeled black-eyed beans, onions and fresh ground red peppers (usually a combination of bell peppers and chili or Scotch bonnet). It is a protein-rich food that is a staple in Nigeria.",
            "ingredients": ["11/2 Cups dry beans Black eyed Peas or Brown Beans","1 Red Bell pepper/Tatashe Medium size","1 Habanero/scotch Bonnet/Rodo","3/4 Cup Diced onion","2 Tablespoons Crayfish","1/4 Cup Vegetable Oil","2 Bullion Cubes","3/4 Cup cooked minced Fish","3 Hard boiled Eggs","Salt to taste"],
            "procedure": ["Soak the Beans for 1 hour (more or less). The length of time used in soaking the Beans depends on the type of beans you are using and how dry your Beans is. The drier beans tends to be ready for peeling faster than the less dried beans.","Pour the Beans in the Blender and add twice as much Water as the Beans (by volume) blend the Beans for 3-4 seconds per time and repeat this for 3 to 4 times - Remember we are peeling the Beans and not blending it.","Pour the beans back into a large Bowl and add enough Water to fully cover the Beans. Now agitate the Beans with your fingers and the skin will float then quickly separate the skin from the Beans by pouring through a sieve.","Once that is done, pour the peeled Beans (the skinless Beans) inside a Blender, together with the Red Pepper, Habanero and Onion - Blend to the smoothest consistency you can ever get.","Combine the blended mixture with the remaining ingredients except the boiled Eggs.","Spray or oil the container you will be using then pour in the mixture and cover it with a lid or seal with a foil paper.","Line the base of the pot you will be using with either foil paper,sticks,leaves or any thing you deem fit. This is to prevent the Moin moin from burning.(seriously, burnt Moin moin is a disaster- Talking from experience).","Arrange the Moin moin inside the Pot and cook till done. This should take about 45 minutes to 1 hour 30 minutes depending on the quantity of the Moin moin mixture in each container.","Remove from heat and serve.","Insert a tooth pick into the middle of the Moin Moin/Moi moi to check for it's doness. The tooth pick should come out fairly clean and not moist."],
            "image": "https://cheflolaskitchen.com/wp-content/uploads/2015/03/Moin-Moin-website-edition-1024x684.jpg.webp",
            "video": "https://www.youtube.com/watch?v=UIHM-gqb0zc"
        })
    }else if(req.query.search == "Garri" || req.query.search == "garri"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredients": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Gatsby" || req.query.search == "gatsby"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredients": [],
            "procedure": "",
            "image": ""
        })
    }else if(req.query.search == "Harira" || req.query.search == "Harira"){
        res.json({
            "search":"Asida",
            "location": "North Africa",
            "summary": "Asida is a dish with origins from medieval al-Andalus, made of a cooked wheat flour lump of dough, sometimes with added butter or honey. Similar in texture to gruel, it is eaten in many North African and Middle Eastern countries. It is considered one of the most popular desserts and traditional dishes in many Arab countries. Asida is particularly popular in Yemen, Sudan, Saudi Arabia, Kuwait, Algeria, Libya, Somalia, Tunisia, Ethiopia, Eritrea, and Indonesia. As most traditional foods of these countries, it is usually eaten by hand, without the use of utensils. Often served during religious holidays such as Mawlid and Eid, it is also served during other traditional ceremonies, for example accompanying the birth of child, such as the ‘aqīqah, the cutting of the hair of a newborn seven days after birth.",
            "ingredients": [],
            "procedure": "",
            "image": ""
        })
    }
});

app.listen(port, () => {
    console.log("Server running on port 3000");
   });
   
