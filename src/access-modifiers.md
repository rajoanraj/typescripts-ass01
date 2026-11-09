# Access Modifiers in TypeScript

## ভূমিকা

TypeScript-এর Object-Oriented Programming-এ Access Modifiers একটি গুরুত্বপূর্ণ বিষয়। এগুলোর মাধ্যমে Class-এর Property এবং Method কোথা থেকে ব্যবহার করা যাবে, তা নিয়ন্ত্রণ করা যায়। TypeScript-এ প্রধানত তিন ধরনের Access Modifier রয়েছে: public, private এবং protected। এছাড়া readonly ব্যবহার করে কোনো Property পরিবর্তন করা সীমিত করা যায়।

## Public Modifier

`public` হলো Default Access Modifier। কোনো Property বা Method public হলে Class-এর বাইরে থেকেও সেটি ব্যবহার করা যায়।

```ts
class Student {
  public name: string = "Raj";
}

const student = new Student();
console.log(student.name);
```

এখানে name Property বাইরে থেকে Access করা যাচ্ছে।

## Private Modifier

`private` Property বা Method শুধু নিজের Class-এর ভেতরে ব্যবহার করা যায়। Class-এর বাইরে থেকে এটি Access করা যায় না।

```ts
class BankAccount {
  private balance: number = 5000;

  getBalance(): number {
    return this.balance;
  }
}
```

এখানে balance সরাসরি বাইরে থেকে Access করা যাবে না। তবে `getBalance()` Method দিয়ে এর মান পাওয়া যাবে।

## Protected Modifier

`protected` Property নিজের Class এবং সেই Class থেকে তৈরি করা Child Class-এর মধ্যে ব্যবহার করা যায়।

```ts
class Person {
  protected name: string = "Raj";
}

class Teacher extends Person {
  getName(): string {
    return this.name;
  }
}
```

এখানে Teacher Class তার Parent Class Person-এর protected Property ব্যবহার করতে পারছে।

## Readonly Modifier

`readonly` ব্যবহার করলে কোনো Property-কে একবার মান দেওয়ার পর সাধারণভাবে পুনরায় পরিবর্তন করা যায় না।

```ts
class User {
  readonly id: number = 101;
}
```

এখানে id-এর মান পরবর্তীতে পরিবর্তন করা যাবে না।

## উপসংহার

Access Modifiers Class-এর Data নিয়ন্ত্রণ এবং নিরাপত্তা বজায় রাখতে সাহায্য করে। public, private এবং protected নির্ধারণ করে কোন Property কোথা থেকে ব্যবহার করা যাবে। অন্যদিকে readonly Property-এর মান পরিবর্তন সীমিত করে। বাস্তব প্রজেক্টে সঠিক Access Modifier ব্যবহার করলে কোড আরও গোছানো, নিরাপদ এবং সহজে পরিচালনাযোগ্য হয়।