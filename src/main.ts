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

const foods: (string|number)[] = ["aam", "jam", "Licu", 5];

const devInfo: [string, number, boolean] = ["Rahim", 65, false]; // Tuple Type

interface devs{
    name: string;
    age: number;
    isMarried?: boolean;
}

const userInfo: devs = {
    name: "ryhan",
    age: 54,
    isMarried: false
}

const fun = (val: string|number) => {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    val+10;
}