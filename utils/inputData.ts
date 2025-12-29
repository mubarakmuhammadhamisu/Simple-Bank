// types.ts
export type InputData = {
  Id: string;
  Name: string;
  Label: string;
  Type: string;
  Placeholder: string;
};


export const signupInputs: InputData[] = [
  {
    Id: "signup-fullname",
    Name: "fullName",
    Label: "Full Name",
    Type: "text",
    Placeholder: "Enter your full name",
  },

  {
    Id: "signup-email",
    Name: "email",
    Label: "Email",
    Type: "email",
    Placeholder: "Enter your email",
  },
  {
    Id: "signup-password",
    Name: "password",
    Label: "Password",
    Type: "password",
    Placeholder: "Enter your password",
  },
  {
    Id: "signup-confirm-password",
    Name: "confirmPassword",
    Label: "Confirm Password",
    Type: "password",
    Placeholder: "Confirm your password",
  },
];

export const loginInputs: InputData[] = [
  {
    Id: "signup-email",
    Name: "email",
    Label: "Email",
    Type: "email",
    Placeholder: "Enter your email",
  },
  {
    Id: "signup-password",
    Name: "password",
    Label: "Password",
    Type: "password",
    Placeholder: "Enter your password",
  }
]