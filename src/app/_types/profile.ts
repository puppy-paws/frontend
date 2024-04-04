export interface ConvertedProfileValues {
  nickname: boolean;
  email: boolean;
  dogBreed?: boolean;
  dogName?: boolean;
  dogImage?: boolean;
  dogCharacter?: boolean;
}

export interface ProfileFormData {
  nickname: string;
  email: string;
  dogName: string;
  dogBreed: string;
  dogCharacter: string;
  dogPersonality: string;
}
