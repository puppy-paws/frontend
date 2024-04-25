import { useState, useCallback } from "react";
import { produce, Draft } from "immer";

type UpdateUploadedFileFunction = (index: number, file: File | null) => void;

export const useUploadedImages = (): [
  Array<File | null>,
  UpdateUploadedFileFunction
] => {
  const [uploadedImages, setUploadedImages] = useState<Array<File | null>>([]);

  const updateUploadedFile = useCallback<UpdateUploadedFileFunction>(
    (index, file) => {
      setUploadedImages((prevFiles) =>
        produce(prevFiles, (draft: Draft<Array<File | null>>) => {
          draft[index] = file;
        })
      );
    },
    []
  );

  const uploadedFilesResult = uploadedImages.filter((file) => file !== null);

  return [uploadedFilesResult, updateUploadedFile];
};
