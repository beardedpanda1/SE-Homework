let arr1 = ["Do", "You", "Know", "How", "To", "Traverse", "An", "Array", "?"]

            const traverse = (arr1) =>{
                let counter = 0;
                let output="";
                arr1.map((find) => output += `${find} is at ${counter++} `)
                    