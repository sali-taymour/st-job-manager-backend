import bcrypt from "bcrypt";

const password = "abc123";

// const superSafePassword = secret + password;

// const salt = await bcrypt.genSalt();
// console.log(salt);
// const hash = await bcrypt.hash(superSafePassword, salt);
// console.log(hash);

const databaseHash =
    "$2b$10$529oG8BQSFwdq38cnEPcDeNQ0ztNh3dmHpebJye/KGbsjuDJs42RS";
console.log(await bcrypt.compare(password, databaseHash));
