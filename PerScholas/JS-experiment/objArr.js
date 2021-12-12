let personsList = [
                {
                    fname: "Sarah",
                    lname: "Abbot",
                    gender: "Female",
                    activity: "Swimming"
                },

                {
                    fname: "Jimmy",
                    lname: "Hoffa",
                    gender: "Male",
                    activity: "Painting Houses"
                },

                {
                    fname: "Kobe",
                    lname: "Bryant",
                    gender: "Male",
                    activity: "Basketball"
                },

                {
                    fname: "Serena",
                    lname: "Williams",
                    gender: "Female",
                    activity: "Swimming"
                },

                {
                    fname: "James",
                    lname: "Bond",
                    gender: "Male",
                    activity: "British Secret Service"
                }

            ];
            let swimmingSelection = personsList.filter(function(person){
                return person.activity === "swimming"
            })

            console.log(swimmingSelection)