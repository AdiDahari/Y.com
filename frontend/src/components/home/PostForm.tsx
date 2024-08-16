"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Button } from "../ui/button";
import Image from "next/image";
import React from "react";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type PostFormProps = {
  className?: string;
};

const FormSchema = z.object({
  content: z
    .string()
    .min(1, {
      message: "Content is required.",
    })
    .max(280, {
      message: "Content must not be longer than 280 characters.",
    }),
});

const PostForm = ({ className }: PostFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      duration: 5000,
    });
  }

  return (
    <div
      className={
        "flex flex-row gap-2 border pb-2 pl-6 pr-4 pt-4" + " " + className
      }
    >
      <Image
        src="/assets/user-placeholder.jpeg"
        alt="user"
        width={48}
        height={48}
        className="size-10 rounded-full"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-2 focus:outline-none"
        >
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    rows={1}
                    placeholder="What's on your mind?"
                    className="max-h-[300px] w-[98%] resize-none overflow-hidden border-0 border-b-2 border-secondary text-xl focus-visible:ring-transparent"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-between">
            <div className=""></div>
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              className="mr-2 rounded-full bg-teal-700 font-bold text-secondary-foreground dark:hover:bg-teal-800"
            >
              Post
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PostForm;
