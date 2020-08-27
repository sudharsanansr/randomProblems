const cars = [
    {
        "cfc7b725-e912-4a95-8ab2-a5d77a55bf96":
        {
            "price":200,
            "id":"cfc7b725-e912-4a95-8ab2-a5d77a55bf96",
            "name":"Large",
            "available":true,
            "sortKey":0
        }
    }
]
const trucks =[
    {
        "0cde2e09-8673-42d2-a03a-dc51805900bc":
        {
            "price":200,
            "id":"0cde2e09-8673-42d2-a03a-dc51805900bc",
            "name":"other",
            "available":true,
            "sortKey":0
        }
    }
]
let vehicles = JSON.parse(JSON.stringify(cars.concat(trucks)));
console.log({vehicles});