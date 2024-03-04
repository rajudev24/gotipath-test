export interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface UserType {
  first_name: string;
  last_name: string;
  email: string;
  company_name: string;
  country: string;
  password: string;
  type: string;
  accept_terms_and_conditions: boolean;
}

export interface PersonalType extends UserType {
  team_size: string;
  profession: string;
}

export interface CorporateType extends UserType {
  team_size: string;
  know_about_us: string;
  profession: string;
}

export interface SignInData {
  email: string;
  password: string;
}
