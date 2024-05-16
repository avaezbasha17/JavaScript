let per = "86%"
        console.log(`Ibrahim Scored ${per}`);

        let person = {
            name: "Avaez Basha",
            age: 23,
            dob: "05/05/2000"
        }

        let address = {
            street: "5th cross R/B manzil",
            area: "Gopala Gowda Shimoga",
            state: "Karnataka"
        }

        let job = {
            company: "Tibil Solution",
            role: "Techniacl Intern",
            id: 1718
        }

        Object.setPrototypeOf(person,address);
        Object.setPrototypeOf(person,job);
        console.log(person.area);