document.addEventListener("DOMContentLoaded", () => {
    const restaurantList = document.querySelector("#restaurant-list");
    const detailSection = document.querySelector("#restaurant-detail");
    const menuButton = document.querySelector("#menu-button");

    const restaurantDetails = {
        "Gabbel-Loffel": {
            image: "images/restoplace1.png",
            title: "Gabbel Loffel",
            address: "88 Olive St, Barcelona, Spain",
            phone: "+34 678 90 1234",
            website: "gabbel-loffel.de",
            category: "Mediterranean, Vegetarian",
            hours: "8AM to 9PM",
            price: "$$",
            description: "Gabbel Loffel is a Mediterranean-inspired vegetarian restaurant offering fresh, organic dishes. Favorites include lentil-stuffed peppers and homemade hummus with warm pita. The airy ambiance and natural wine selection make it a great spot for a relaxing meal. With a focus on sustainability, the restaurant sources ingredients from local farms whenever possible."
        },
        "Gary-Gari": {
            image: "images/restoplace2.png",
            title: "Gary Gari",
            address: "45 Maple Ave, Toronto, Canada",
            phone: "416 123 4567",
            website: "garygari.ca",
            category: "Steakhouse",
            hours: "11AM to 11PM",
            price: "$$$",
            description: "Gary Gari is a premier steakhouse that embodies the heart and soul of grilling traditions. Known for its expertly cooked cuts of beef, such as ribeye and tenderloin, all sourced from grass-fed cattle, this restaurant is a paradise for meat lovers. The chefs use an authentic wood-fired grill to enhance the natural flavors of the meat."
        },
        "Il-Piatto": {
            image: "images/restoplace3.png",
            title: "Il Piatto",
            address: "78 Rue de Paris, Lyon, France",
            phone: "321 76 5432",
            website: "ilpiatto.fr",
            category: "Italian",
            hours: "12PM to 10PM",
            price: "$$$",
            description: "Il Piatto is an upscale Italian eatery offering a refined dining experience with a modern twist. Known for its handcrafted pasta and wood-fired pizzas, this restaurant captures the essence of Italy in every bite. The wine selection is extensive, featuring some of the finest Italian vintages. Guests rave about the truffle risotto and the house-made tiramisu."
        },
        "Pierre-Platters": {
            image: "images/restoplace4.png",
            title: "Pierre Platters",
            address: "7102 Champs Street, Paris, France",
            phone: "+33 1 23 45 6789",
            website: "pierreplatters.com",
            category: "French, Seafood",
            hours: "9AM to 10PM",
            price: "$$$",
            description: "Pierre Platters is a charming French bistro celebrated for its exquisite seafood dishes, especially its shrimp specialties. Guests rave about the garlic butter shrimp, served with a side of freshly baked baguette, and the shrimp Provençal, simmered in a fragrant white wine and herb sauce. The restaurant also offers a luxurious shrimp bisque."
        }
    };

    restaurantList.addEventListener("click", (e) => {
        const container = e.target.closest(".card-container");
        if (!container) return;

        const restaurantId = container.getAttribute("info-id");
        const info = restaurantDetails[restaurantId];
        if (!info) return;

        const updateTextContent = (selector, text) => {
            document.querySelector(selector).textContent = text;
        };

        updateTextContent("#detail-title", info.title);
        updateTextContent("#detail-info", info.description);
        updateTextContent("#detail-address", info.address);
        updateTextContent("#detail-telephone", info.phone);
        updateTextContent("#detail-website", info.website);
        updateTextContent("#detail-category", info.category);
        updateTextContent("#detail-hours", info.hours);
        updateTextContent("#detail-price", info.price);

        const img = document.querySelector("#detail-image");
        img.src = info.image;

        restaurantList.style.display = "none";
        detailSection.style.display = "flex";
    });

    menuButton.addEventListener("click", () => {
        document.getElementById("restaurant-list").style.display = "block";
        detailSection.style.display = "none";
    });
});
