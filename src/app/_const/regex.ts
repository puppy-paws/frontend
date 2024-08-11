export const regexPatterns = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  nickname: /^[a-zA-Z0-9가-힣]{1,8}$/,
  dogName: /^[가-힣]{1,8}$/,
  dogBreed: /^[가-힣]{1,20}$/,
  dogCharacter: /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s!?\(\)~.,""'^*]{1,30}$/,
  dogBoast: /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s!?\(\)~.,""'^*]{1,30}$/,
  dogPersonality: /^[가-힣]{1,5}$/,
};
