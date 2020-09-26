import bcrypt from "bcrypt";

const saltRounds = 10;

export const hash = (pass: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(pass, saltRounds, (e: Error, hashedPass: string) => {
      if (e) {
        reject(e);
      }
      resolve(hashedPass);
    });
  });
};

export const compare = (pass: string, hashedPass: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pass, hashedPass, (e: Error, check: boolean) => {
      if (e) {
        reject(e);
      }
      resolve(check);
    });
  });
};
