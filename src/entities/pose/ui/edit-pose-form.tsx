"use client";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { OtherTitle, PoseType } from "../model/types";
import { Button } from "@/shared/ui/button";
import { PlusCircle, Trash2 } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Textarea } from "@/shared/ui/textarea";
import { cn } from "@/shared/utils";

type EditPoseFormProps = {
  className?: string;
  pose: PoseType;
  onSubmit?: (pose: PoseType) => void;
};

const OtherTitleInput = ({
  title,
  onTitleChange,
  onDelete,
}: {
  title: OtherTitle;
  onTitleChange: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
}) => (
  <div className="flex items-center mb-2">
    <Input
      value={title.title}
      onChange={(e) =>
        onTitleChange(title.id!, e.target.value)
      }
      className="mr-2"
    />
    <Button
      variant="destructive"
      size="icon"
      onClick={() => onDelete(title.id!)}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  </div>
);

export const EditPoseForm = (props: EditPoseFormProps) => {
  const { pose, className, onSubmit } = props;

  const [poseState, setPoseState] = useState<PoseType>(
    pose || {
      id: 0,
      source_title: "",
      image: null,
      description: "",
      other_titles: [],
      short_description: null,
    }
  );

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPoseState({
      ...poseState,
      [e.target.id]: e.target.value,
    });
  };

  const handleImageUpload = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setPoseState({
            ...poseState,
            image: event.target.result as string,
          });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const addOtherTitle = () => {
    const newId =
      poseState.other_titles.length > 0
        ? Math.max(
            ...poseState.other_titles.map((t) => t.id ?? 0)
          ) + 1
        : 1;
    setPoseState({
      ...poseState,
      other_titles: [
        ...poseState.other_titles,
        { id: newId, id_pose: poseState.id, title: "" },
      ],
    });
  };

  const updateOtherTitle = (
    id: number,
    newTitle: string
  ) => {
    setPoseState({
      ...poseState,
      other_titles: poseState.other_titles.map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      ),
    });
  };

  const deleteOtherTitle = (id: number) => {
    setPoseState({
      ...poseState,
      other_titles: poseState.other_titles.filter(
        (t) => t.id !== id
      ),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit?.({
      ...poseState,
      image:
        poseState.image === pose.image
          ? null
          : poseState.image,
      other_titles: poseState.other_titles.map(
        (otherTitle) => {
          if (
            pose.other_titles.find(
              (ot) => ot.id === otherTitle.id
            )
          ) {
            return otherTitle;
          } else {
            return {
              ...otherTitle,
              id: undefined,
            };
          }
        }
      ),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        className,
        "space-y-4 max-w-md mx-auto"
      )}
    >
      <Input
        id="source_title"
        label="Название"
        value={poseState.source_title}
        onChange={handleInputChange}
      />

      <div className="mb-4">
        <Label htmlFor="image">Картинка</Label>
        <Input
          id="image"
          type="file"
          onChange={handleImageUpload}
          className="mt-1 bg-white"
        />
        {poseState.image && (
          <img
            src={poseState.image}
            alt="Uploaded pose"
            className="mt-2 max-w-full h-auto"
          />
        )}
      </div>

      <div className="mb-4">
        <Label htmlFor="description">Описание</Label>
        <Textarea
          id="description"
          value={poseState.description}
          onChange={handleInputChange}
          className="mt-1"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="short_description">
          Краткое описание
        </Label>
        <Textarea
          id="short_description"
          value={poseState.short_description ?? ""}
          onChange={handleInputChange}
          className="mt-1"
        />
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <Label>Другие заголовки</Label>
        <div className="grid grid-cols-2 gap-1">
          {poseState.other_titles.map((title) => (
            <OtherTitleInput
              key={title.id}
              title={title}
              onTitleChange={updateOtherTitle}
              onDelete={deleteOtherTitle}
            />
          ))}
        </div>
        <Button
          type="button"
          onClick={addOtherTitle}
          className="mt-2"
        >
          <PlusCircle className="mr-2 h-4 w-4" /> добавить
          другой заголовок
        </Button>
      </div>

      <Button type="submit">Сохранить изменения</Button>
    </form>
  );
};
