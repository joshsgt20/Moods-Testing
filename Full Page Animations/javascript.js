new fullpage("#fullpage",{
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({delay: 0.5});
        tl.fromTo(title, 0.5, {y: "50", opacity: "0"}, {y:"0", opacity: "1"});

        if(destination.index === 1){
            const Pups = document.querySelectorAll(".Pups");
            const description = document.querySelectorAll(".description");

            tl.fromTo(Pups, 0.7, {x: "100%"}, {x:"-55%;"})
            .fromTo(description, 0.5, {y: "50", opacity: "0"}, {y:"0", opacity: "1"})
            .fromTo(Pups[0], 2, {opacity: 1}, {opacity: 1})
            .fromTo(Pups[1], 2, {opacity: 0}, {opacity: 1})
            .fromTo(Pups[2], 2, {opacity: 0}, {opacity: 1})

        }
    }
});
