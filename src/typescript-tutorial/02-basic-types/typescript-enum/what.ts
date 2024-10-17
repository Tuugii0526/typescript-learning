export const what=()=>{
    return `
    What is an enum
An enum is a group of named constant values. Enum stands for enumerated type.

To define an enum, you follow these steps:

First, use the enum keyword followed by the name of the enum.
Then, define constant values for the enum.


enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

WHEN TO USE ENUM:
You should use an enum when you:

Have a small set of closely related fixed values.
And these values are known at compile time.

Summary
**A TypeScript enum is a group of constant values.
**Under the hood, an enum is a JavaScript object with named properties declared in the enum definition.
**Do use an enum when you have a small set of fixed values that are closely related and known at compile time.
    `
}
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};