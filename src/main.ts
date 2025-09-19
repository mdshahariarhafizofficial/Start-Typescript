let country:string | number = "Bangladesh";
country=52;


const ageCalc = (name: string, age: number): string => {
    return `Hi ${name}, you are ${age} years old`;
};

ageCalc("Fahad", 25);

const info = (name: string): void => {
    console.log("Hlw Dev");
};

const test = (age: number): never => {
    throw new Error("");
}

const foods: (string|number)[] = ["", "", "", 5];