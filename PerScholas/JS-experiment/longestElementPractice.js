let arr1 = ["20","30","60","20","45","100"]
output = arr1[0]
let arr2 = []
    for (i = 1; i < arr1.length; i++){
        if (output.length<arr1[i].length)
            output = arr1[i];
    }

    for (let i = 0; i < arr1.length; i++){
        if(output.length == arr1[i].length)
        arr2.push(arr1[i])
    }

    console.log ('The largest element in this array is ' + arr2)