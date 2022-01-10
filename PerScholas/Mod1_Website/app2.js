//recognize what button is pressed SOLVED
//send value to the backend SOLVED
//run through url to adjust 
//run through api SOLVED
//display values you want shown SOLVED
    //go to api and find the names of the values you want shown SOLVED

//send to html SOLVED
const aButton = document.getElementById("A");
const bButton = document.getElementById("B");
const cButton = document.getElementById("C");
const dButton = document.getElementById("D");
const eButton = document.getElementById("E");
const fButton = document.getElementById("F");
const gButton = document.getElementById("G");
const hButton = document.getElementById("H");
const iButton = document.getElementById("I");
const jButton = document.getElementById("J");
const kButton = document.getElementById("K");
const lButton = document.getElementById("L");
const mButton = document.getElementById("M");
const nButton = document.getElementById("N");
const oButton = document.getElementById("O");
const pButton = document.getElementById("P");
const qButton = document.getElementById("Q");
const rButton = document.getElementById("R");
const sButton = document.getElementById("S");
const tButton = document.getElementById("T");
const uButton = document.getElementById("U");
const vButton = document.getElementById("V");
const wButton = document.getElementById("W");
const xButton = document.getElementById("X");
const yButton = document.getElementById("Y");
const zButton = document.getElementById("Z");
const displayStrMeal = document.getElementById("strMeal");
const displayStrCategory = document.getElementById("strCategory");
const displayStrInstructions = document.getElementById("strInstructions");
const displayStrIngredient1 = document.getElementById("strIngredient1");
const displayStrIngredient2 = document.getElementById("strIngredient2");
const displayStrIngredient3 = document.getElementById("strIngredient3");
const displayStrIngredient4 = document.getElementById("strIngredient4");
const displayStrIngredient5 = document.getElementById("strIngredient5");
const displayStrIngredient6 = document.getElementById("strIngredient6");
const displayStrIngredient7 = document.getElementById("strIngredient7");
const displayStrIngredient8 = document.getElementById("strIngredient8");
const displayStrIngredient9 = document.getElementById("strIngredient9");
const displayStrIngredient10 = document.getElementById("strIngredient10");
const displayStrIngredient11 = document.getElementById("strIngredient11");
const displayStrIngredient12 = document.getElementById("strIngredient12");
const displayStrIngredient13 = document.getElementById("strIngredient13");
const displayStrIngredient14 = document.getElementById("strIngredient14");
const displayStrIngredient15 = document.getElementById("strIngredient15");
const displayStrIngredient16 = document.getElementById("strIngredient16");
const displayStrIngredient17 = document.getElementById("strIngredient17");
const displayStrIngredient18 = document.getElementById("strIngredient18");
const displayStrIngredient19 = document.getElementById("strIngredient19");
const displayStrIngredient20 = document.getElementById("strIngredient20");
const displayStrMealThumb = document.getElementById("strMealThumb");
const displayStrYoutube = document.getElementById("strYoutube");
const displayStrMeasure1 = document.getElementById("strMeasure1");
const displayStrMeasure2 = document.getElementById("strMeasure2");
const displayStrMeasure3 = document.getElementById("strMeasure3");
const displayStrMeasure4 = document.getElementById("strMeasure4");
const displayStrMeasure5 = document.getElementById("strMeasure5");
const displayStrMeasure6 = document.getElementById("strMeasure6");
const displayStrMeasure7 = document.getElementById("strMeasure7");
const displayStrMeasure8 = document.getElementById("strMeasure8");
const displayStrMeasure9 = document.getElementById("strMeasure9");
const displayStrMeasure10 = document.getElementById("strMeasure10");
const displayStrMeasure11 = document.getElementById("strMeasure11");
const displayStrMeasure12 = document.getElementById("strMeasure12");
const displayStrMeasure13 = document.getElementById("strMeasure13");
const displayStrMeasure14 = document.getElementById("strMeasure14");
const displayStrMeasure15 = document.getElementById("strMeasure15");
const displayStrMeasure16 = document.getElementById("strMeasure16");
const displayStrMeasure17 = document.getElementById("strMeasure17");
const displayStrMeasure18 = document.getElementById("strMeasure18");
const displayStrMeasure19 = document.getElementById("strMeasure19");
const displayStrMeasure20 = document.getElementById("strMeasure20");
const displayStrSource = document.getElementById("strSource");

const urlA = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
const urlB = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`
const urlC = `https://www.themealdb.com/api/json/v1/1/search.php?f=c`
const urlD = `https://www.themealdb.com/api/json/v1/1/search.php?f=d`
const urlE = `https://www.themealdb.com/api/json/v1/1/search.php?f=e`
const urlF = `https://www.themealdb.com/api/json/v1/1/search.php?f=f`
const urlG = `https://www.themealdb.com/api/json/v1/1/search.php?f=g`
const urlH = `https://www.themealdb.com/api/json/v1/1/search.php?f=h`
const urlI = `https://www.themealdb.com/api/json/v1/1/search.php?f=i`
const urlJ = `https://www.themealdb.com/api/json/v1/1/search.php?f=j`
const urlK = `https://www.themealdb.com/api/json/v1/1/search.php?f=k`
const urlL = `https://www.themealdb.com/api/json/v1/1/search.php?f=l`
const urlM = `https://www.themealdb.com/api/json/v1/1/search.php?f=m`
const urlN = `https://www.themealdb.com/api/json/v1/1/search.php?f=n`
const urlO = `https://www.themealdb.com/api/json/v1/1/search.php?f=o`
const urlP = `https://www.themealdb.com/api/json/v1/1/search.php?f=p`
const urlQ = `https://www.themealdb.com/api/json/v1/1/search.php?f=q`
const urlR = `https://www.themealdb.com/api/json/v1/1/search.php?f=r`
const urlS = `https://www.themealdb.com/api/json/v1/1/search.php?f=s`
const urlT = `https://www.themealdb.com/api/json/v1/1/search.php?f=t`
const urlU = `https://www.themealdb.com/api/json/v1/1/search.php?f=u`
const urlV = `https://www.themealdb.com/api/json/v1/1/search.php?f=v`
const urlW = `https://www.themealdb.com/api/json/v1/1/search.php?f=w`
const urlX = `https://www.themealdb.com/api/json/v1/1/search.php?f=x`
const urlY = `https://www.themealdb.com/api/json/v1/1/search.php?f=y`
const urlZ = `https://www.themealdb.com/api/json/v1/1/search.php?f=z`
const urlRandom = `https://www.themealdb.com/api/json/v1/1/random.php`

const getRecipe = (x) => { 
        fetch(x)
            .then((response) => response.json())
            .then((data) => {   
                    displayStrMeal.innerHTML = `${data.meals[0].strMeal}`;
                    
                    displayStrMealThumb.innerHTML = `<img src = ${data.meals[0].strMealThumb}></img>`;
                    
                    displayStrInstructions.innerHTML = `${data.meals[0].strInstructions}`;

                    displayStrIngredient1.innerHTML = data.meals[0].strIngredient1 ? `${data.meals[0].strIngredient1}` : ''
                    displayStrMeasure1.innerHTML = data.meals[0].strMeasure1 ? `${data.meals[0].strMeasure1}`: ''

                    displayStrIngredient2.innerHTML = data.meals[0].strIngredient2 ? `${data.meals[0].strIngredient2}` : ''
                    displayStrMeasure2.innerHTML = data.meals[0].strMeasure2 ? `${data.meals[0].strMeasure2}`: ''

                    displayStrIngredient3.innerHTML = data.meals[0].strIngredient3 ? `${data.meals[0].strIngredient3}` : ''
                    displayStrMeasure3.innerHTML = data.meals[0].strMeasure3 ? `${data.meals[0].strMeasure3}`: ''

                    displayStrIngredient4.innerHTML = data.meals[0].strIngredient4 ? `${data.meals[0].strIngredient4}` : ''
                    displayStrMeasure4.innerHTML = data.meals[0].strMeasure4 ? `${data.meals[0].strMeasure4}`: ''

                    displayStrIngredient5.innerHTML = data.meals[0].strIngredient5 ? `${data.meals[0].strIngredient5}` : ''
                    displayStrMeasure5.innerHTML = data.meals[0].strMeasure5 ? `${data.meals[0].strMeasure5}`: ''

                    displayStrIngredient6.innerHTML = data.meals[0].strIngredient6 ? `${data.meals[0].strIngredient6}` : ''
                    displayStrMeasure6.innerHTML = data.meals[0].strMeasure6 ? `${data.meals[0].strMeasure6}`: ''

                    displayStrIngredient7.innerHTML = data.meals[0].strIngredient7 ? `${data.meals[0].strIngredient7}` : ''
                    displayStrMeasure7.innerHTML = data.meals[0].strMeasure7 ? `${data.meals[0].strMeasure7}`: ''

                    displayStrIngredient8.innerHTML = data.meals[0].strIngredient8 ? `${data.meals[0].strIngredient8}` : ''
                    displayStrMeasure8.innerHTML = data.meals[0].strMeasure8 ? `${data.meals[0].strMeasure8}`: ''

                    displayStrIngredient9.innerHTML = data.meals[0].strIngredient9 ? `${data.meals[0].strIngredient9}` : ''
                    displayStrMeasure9.innerHTML = data.meals[0].strMeasure9 ? `${data.meals[0].strMeasure9}`: ''

                    displayStrIngredient10.innerHTML = data.meals[0].strIngredient10 ? `${data.meals[0].strIngredient10}` : ''
                    displayStrMeasure10.innerHTML = data.meals[0].strMeasure10 ? `${data.meals[0].strMeasure10}`: ''

                    displayStrIngredient11.innerHTML = data.meals[0].strIngredient11 ? `${data.meals[0].strIngredient11}` : ''
                    displayStrMeasure11.innerHTML = data.meals[0].strMeasure11 ? `${data.meals[0].strMeasure11}`: ''

                    displayStrIngredient12.innerHTML = data.meals[0].strIngredient12 ? `${data.meals[0].strIngredient12}` : ''
                    displayStrMeasure12.innerHTML = data.meals[0].strMeasure12 ? `${data.meals[0].strMeasure12}`: ''

                    displayStrIngredient13.innerHTML = data.meals[0].strIngredient13 ? `${data.meals[0].strIngredient13}` : ''
                    displayStrMeasure13.innerHTML = data.meals[0].strMeasure13 ? `${data.meals[0].strMeasure13}`: ''

                    displayStrIngredient14.innerHTML = data.meals[0].strIngredient14 ? `${data.meals[0].strIngredient14}` : ''
                    displayStrMeasure14.innerHTML = data.meals[0].strMeasure14 ? `${data.meals[0].strMeasure14}`: ''

                    displayStrIngredient15.innerHTML = data.meals[0].strIngredient15 ? `${data.meals[0].strIngredient15}` : ''
                    displayStrMeasure15.innerHTML = data.meals[0].strMeasure15 ? `${data.meals[0].strMeasure15}`: ''

                    displayStrIngredient16.innerHTML = data.meals[0].strIngredient16 ? `${data.meals[0].strIngredient16}` : ''
                    displayStrMeasure16.innerHTML = data.meals[0].strMeasure16 ? `${data.meals[0].strMeasure16}`: ''

                    displayStrIngredient17.innerHTML = data.meals[0].strIngredient17 ? `${data.meals[0].strIngredient17}` : ''
                    displayStrMeasure17.innerHTML = data.meals[0].strMeasure17 ? `${data.meals[0].strMeasure17}`: ''

                    displayStrIngredient18.innerHTML = data.meals[0].strIngredient18 ? `${data.meals[0].strIngredient18}` : ''
                    displayStrMeasure18.innerHTML = data.meals[0].strMeasure18 ? `${data.meals[0].strMeasure18}`: ''

                    displayStrIngredient19.innerHTML = data.meals[0].strIngredient19 ? `${data.meals[0].strIngredient19}` : ''
                    displayStrMeasure19.innerHTML = data.meals[0].strMeasure19 ? `${data.meals[0].strMeasure19}`: ''

                    displayStrIngredient20.innerHTML = data.meals[0].strIngredient20 ? `${data.meals[0].strIngredient20}` : ''
                    displayStrMeasure20.innerHTML = data.meals[0].strMeasure20 ? `${data.meals[0].strMeasure20}`: ''

                    displayStrYoutube.innerHTML = `${data.meals[0].strYoutube}`;

                    displayStrSource.innerHTML = `${data.meals[0].strSource}`;
                })
        
            .catch((error1) => console.log(error1))
}
a.addEventListener("click",() =>{
    getRecipe(urlA)
})

b.addEventListener("click",() =>{
    getRecipe(urlB)
})

c.addEventListener("click",() =>{
    getRecipe(urlC)
})

d.addEventListener("click",() =>{
    getRecipe(urlD)
})

e.addEventListener("click",() =>{
    getRecipe(urlE)
})

f.addEventListener("click",() =>{
    getRecipe(urlF)
})

g.addEventListener("click",() =>{
    getRecipe(urlG)
})

h.addEventListener("click",() =>{
    getRecipe(urlH)
})

i.addEventListener("click",() =>{
    getRecipe(urlI)
})

j.addEventListener("click",() =>{
    getRecipe(urlJ)
})

k.addEventListener("click",() =>{
    getRecipe(urlK)
})

l.addEventListener("click",() =>{
    getRecipe(urlL)
})

m.addEventListener("click",() =>{
    getRecipe(urlM)
})

n.addEventListener("click",() =>{
    getRecipe(urlN)
})

o.addEventListener("click",() =>{
    getRecipe(urlO)
})

p.addEventListener("click",() =>{
    getRecipe(urlP)
})

q.addEventListener("click",() =>{
    getRecipe(urlQ)
})

r.addEventListener("click",() =>{
    getRecipe(urlR)
})

s.addEventListener("click",() =>{
    getRecipe(urlS)
})

t.addEventListener("click",() =>{
    getRecipe(urlT)
})

u.addEventListener("click",() =>{
    getRecipe(urlU)
})

v.addEventListener("click",() =>{
    getRecipe(urlV)
})

w.addEventListener("click",() =>{
    getRecipe(urlW)
})

x.addEventListener("click",() =>{
    getRecipe(urlX)
})

y.addEventListener("click",() =>{
    getRecipe(urlY)
})

z.addEventListener("click",() =>{
    getRecipe(urlZ)
})

random.addEventListener("click",() =>{
    getRecipe(urlRandom)
})