# Type Alias vs Interface in TypeScript

## ভূমিকা

TypeScript-এ Type Alias এবং Interface হলো দুটি গুরুত্বপূর্ণ বিষয়। এগুলো ব্যবহার করে আমরা কোনো ভেরিয়েবলের ডেটা বা অবজেক্টের গঠন নির্দিষ্ট করতে পারি। দেখতে কাছাকাছি মনে হলেও এদের মধ্যে কিছু পার্থক্য রয়েছে।

## Type Alias কী?

Type Alias ব্যবহার করে আমরা একটি নতুন নামের মাধ্যমে কোনো Type তৈরি করতে পারি। এটি Primitive, Union, Object, Array এবং অন্যান্য Type-এর ক্ষেত্রে ব্যবহার করা যায়।

উদাহরণ:

```ts
type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "Raj",
  age: 22
};
```

এখানে `Student` একটি Type Alias। এটি নির্ধারণ করে দিয়েছে যে Student অবজেক্টে `name` হবে string এবং `age` হবে number।

## Interface কী?

Interface মূলত Object-এর গঠন নির্ধারণ করতে ব্যবহৃত হয়। এটি বলে দেয় একটি Object-এর মধ্যে কী কী Property এবং Method থাকতে পারে।

উদাহরণ:

```ts
interface Teacher {
  name: string;
  subject: string;
}

const teacher: Teacher = {
  name: "Rahim",
  subject: "Mathematics"
};
```

এখানে Teacher Interface নির্ধারণ করেছে যে একটি Teacher Object-এ name এবং subject থাকতে হবে।

## Type Alias ও Interface-এর পার্থক্য

Type Alias দিয়ে Union Type তৈরি করা যায়, কিন্তু Interface সরাসরি Union Type তৈরি করতে পারে না।

```ts
type Status = "success" | "error";
```

অন্যদিকে, Interface ব্যবহার করে `extends` keyword-এর মাধ্যমে অন্য Interface-এর বৈশিষ্ট্য গ্রহণ করা যায়।

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  roll: number;
}
```

## উপসংহার

Type Alias এবং Interface দুটিই TypeScript-এ Type নিরাপত্তা নিশ্চিত করতে সাহায্য করে। সাধারণ Object-এর Structure তৈরির জন্য Interface ব্যবহার করা যায়। অন্যদিকে, Union বা বিভিন্ন ধরনের Type তৈরি করতে Type Alias বেশ কার্যকর। প্রয়োজন অনুযায়ী সঠিকটি নির্বাচন করাই ভালো প্রোগ্রামিংয়ের অংশ।