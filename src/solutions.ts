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

// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// 
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

export {};

// problem: 05

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(
    courses: Course[],
    minStudents: number
): Course[] {

    return courses.filter((course) => {
        return course.isPublished === true &&
               course.students >= minStudents;
    });

}

const courses: Course[] = [
    {
        title: "TypeScript Mastery",
        students: 120,
        isPublished: true
    },
    {
        title: "Draft Course",
        students: 200,
        isPublished: false
    },
    {
        title: "Basic HTML",
        students: 45,
        isPublished: true
    },
    {
        title: "Next.js Pro",
        students: 85,
        isPublished: true
    }
];

// console.log(getPopularCourses(courses, 80));

export {};

// problem: 06

// problem: 07

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    get RoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager("Alice", 50000, "Engineering");

// console.log(manager.getDetails());
// console.log(manager.RoleInfo);

export {};

// problem: 08

function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {

        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }

    });
}

validateAgeAsync(20)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

validateAgeAsync(15)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

export {};