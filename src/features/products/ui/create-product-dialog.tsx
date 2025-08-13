import { CreateProductDTO } from "@/repositories/products";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useProductsCreate } from "../model/mutations";
import { Spinner } from "@/shared/components/spinner";

interface Props {
  className?: string;
}

export const CreateProductDialog: React.FC<Props> = ({ className }) => {
  const { mutate, isPending, isSuccess } = useProductsCreate();

  const [formData, setFormData] = useState<CreateProductDTO>({
    name: "",
    count: "",
    weight: "",
    imageUrl: "",
    size: { height: 0, width: 0 },
  });

  const handleChange = <K extends keyof CreateProductDTO>(
    key: K,
    value: CreateProductDTO[K]
  ) => {
    if (key === "count" && !/^\d*$/.test(value as string)) return;

    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSizesChange = <K extends keyof CreateProductDTO["size"]>(
    key: K,
    value: CreateProductDTO["size"][K]
  ) => {
    if (!/^\d*$/.test(value)) return;
    setFormData((prev) => ({
      ...prev,
      size: { ...prev.size, [key]: value },
    }));
  };

  const handleMutation = () =>
    mutate(formData, {
      onSuccess: () => {
        setFormData({
          name: "",
          count: "",
          weight: "",
          imageUrl: "",
          size: { height: 0, width: 0 },
        });
      },
    });

  return (
    <Dialog >
      <DialogTrigger>
        <Card className="cursor-pointer size-[70px] flex items-center justify-center rounded-full hover:bg-neutral-200 transition-all transition-300">
          <Plus />
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Product</DialogTitle>
        </DialogHeader>

        <Input
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Name..."
        />
        <Input
          value={formData.count}
          onChange={(e) => handleChange("count", e.target.value)}
          placeholder="Count..."
        />
        <Input
          value={formData.weight}
          onChange={(e) => handleChange("weight", e.target.value)}
          placeholder="Weight..."
        />

        <Input
          value={formData.imageUrl}
          onChange={(e) => handleChange("imageUrl", e.target.value)}
          placeholder="Image URL..."
        />

        <div className="flex gap-2">
          <Input
            value={formData.size.height}
            onChange={(e) => handleSizesChange("height", e.target.value)}
            placeholder="Height..."
          />

          <Input
            value={formData.size.width}
            onChange={(e) => handleSizesChange("width", e.target.value)}
            placeholder="Width..."
          />
        </div>

        <Button
          onClick={handleMutation}
          disabled={Object.values(formData).some((item) => item === "")}
        >
          {isPending ? <Spinner /> : "Create"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
