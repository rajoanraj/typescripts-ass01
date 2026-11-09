// problem: 01

function multiplyValue(value: number, multiplier?: number): number {
    return value * (multiplier || 1);
}
// console.log(multiplyValue(0));
// console.log(multiplyValue(10, 5)); 
// console.log(multiplyValue(7, 0)); 

// problem: 02

function processInput(value: string | number | boolean): string | number {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive";
    }
}

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

export {};

// problem: 03

function formatCoordinate(
    coordinate: readonly [number, number, string]
): string {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

export {};

// problem: 04

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]));

console.log(concatenateArrays([1, 2], [3, 4], [5]));

export {};