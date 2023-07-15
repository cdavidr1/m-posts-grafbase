"use client";

import Image from "next/image";
import FormField from "./FormField";
import CustomOption from "./CustomOption";
import { useState } from "react";
import Button from "./Button";
import { createPost } from "@/util/actions";
import { useRouter } from "next/navigation";

type Props = {
  type: string
}

const categoryFilters = [
  "Health",
  "Mindset",
  "Gym",
  "Spiritual"
]

const PostForm = ({ type }: Props) => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (type === 'create') {
        await createPost(form);
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('image')) {
      return alert('Please upload image file');
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;

      handleState('image', result);
    }
  }

  const handleState = (fieldName: string, value: string) => {
    setForm((prevState) => ({...prevState, [fieldName]: value}));
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: '',
    content: '',
    image: '',
    category: ''
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-start flex-col w-full lg:pt-24 pt-12 gap-10 text-lg max-w-5xl mx-auto"
    >
      <div className="flex items-center justify-start w-full lg:min-h-[400px] min-h-[200px] relative">
        <label htmlFor="poster"
          className="z-10 text-center w-full h-full p-20 text-gray-800 border-2 border-gray-900 border-dashed">
          {!form.image && 'Add Thumbnail'}
        </label>
        <input id="image"
          type="file"
          accept="image/*"
          required={type === "create"}
          className="absolute z-30 w-full opacity-0 h-full cursor-pointer"
          onChange={handleImage}>
        </input>
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="Post Thumbnail"
            fill />
        )}
      </div>

      <FormField
        title="Title"
        state={form.title}
        placeholder="What is the title?"
        setState={(value) => handleState('title', value)}
      />

      <FormField
        title="Content"
        state={form.content}
        placeholder="What is this post about?"
        isTextArea
        setState={(value) => handleState('content', value)}
      />

      <CustomOption
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleState('category', value)}
      />

      <div className="flex items-center justify-start w-full">
        <Button
          title={isSubmitting ? `${type === 'create' ? ' Creating' : ' Editing'}` : `${type === 'create' ? ' Create' : ' Edit'}`}
          type="submit"
          bgColor="bg-green-400"
          leftIcon={isSubmitting ? "" : "+"}
          isSubmitting={isSubmitting}
        />
      </div>

    </form>
  )
}

export default PostForm