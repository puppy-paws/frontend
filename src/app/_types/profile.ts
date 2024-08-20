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
  dogBoast: string;
}

export interface CommunityPostList {
  id: number;
  pickupLocation: string;
  pickupDate: Date;
}

export interface DogStagramPostList {
  id: number;
  image_url: string;
}

export interface ProfileAllInfo {
  member: {
    id: number;
    email: string;
    provider: string;
    nickname: string;
    profileUrl: string;
    dogType: string;
    dogName: string;
    dogCharacters: string[];
    dogProfileUrl: string;
    createdAt: Date;
    updatedAt: Date;
  };
  communities: [CommunityPostList];
  dogstagrams: [DogStagramPostList];
}

export interface EditUserProfile {
  nickname: string;
}

export interface EditDogProfile {
  dogType: string;
  dogName: string;
  dogCharacters: string[];
  dogProfileUrl?: string | File;
}
