import { DogStagramPostListType } from "@/app/_types/dogStagram";
import DogStagramPostImage from "./DogStagramPostImage";
import DogStagramPostContents from "./DogStagramPostContents";

interface DogStagramPostProps {
  props: DogStagramPostListType;
}

export default function DogStagramPostCard({ props }: DogStagramPostProps) {
  const images: string[] = [
    "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg",
    "https://images.dog.ceo//breeds//akita//An_Akita_Inu_resting.jpg",
    "https://images.dog.ceo//breeds//poodle-toy//n02113624_253.jpg",
  ];

  return (
    <>
      <DogStagramPostImage images={images} />
      <DogStagramPostContents />
    </>
  );
}
