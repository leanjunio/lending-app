export class LoginDto {
  email: string;
  password: string;
}

export type Payload = {
  email: string;
  role: string;
  id: number;
};
export type FullPayload = Payload & {
  iat: number;
  exp: number;
};
