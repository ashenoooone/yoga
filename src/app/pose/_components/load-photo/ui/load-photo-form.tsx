"use client";

import { ChangeEvent, useState } from "react";
import {
  UploadCloud,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

interface LoadPhotoFormProps {
  onSubmit: (base64File: string) => void;
  isUploading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export const LoadPhotoForm: React.FC<
  LoadPhotoFormProps
> = ({ onSubmit, isUploading, isSuccess, isError }) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(
    null
  ); // Состояние для предпросмотра изображения

  // Функция для преобразования файла в Base64
  const convertFileToBase64 = (
    file: File
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>
        resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      const base64 =
        await convertFileToBase64(selectedFile);
      setPreview(base64); // Устанавливаем Base64 для предпросмотра
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!file) return;

    const base64File = await convertFileToBase64(file);
    onSubmit(base64File); // Передаем закодированное изображение в Base64
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Распознавание позы по фото
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                label="Фото"
                id="photo"
                type="file"
                accept="image/*"
                onChange={handleFileChange} // Обработчик изменения файла
                disabled={isUploading}
              />
            </div>
            {file && (
              <div className="text-sm text-muted-foreground">
                Выбран файл: {file.name}
              </div>
            )}
            {preview && ( // Предпросмотр изображения
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Предпросмотр изображения"
                  className="max-w-[150px] max-h-[150px]"
                />
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            type="submit"
            disabled={!file || isUploading}
          >
            {isUploading && (
              <>
                <UploadCloud className="mr-2 h-4 w-4 animate-bounce" />
                Загрузка...
              </>
            )}
            {!isUploading && isSuccess && (
              <>
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                Успешно распознано
              </>
            )}
            {isError && (
              <>
                <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                Произошла ошибка
              </>
            )}
            {!isUploading &&
              !isSuccess &&
              !isError &&
              "Распознать позу"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
