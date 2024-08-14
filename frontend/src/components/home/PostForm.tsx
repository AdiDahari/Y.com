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

const PostForm = () => {
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
    <div className="flex flex-row gap-2 border px-4">
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
                    placeholder="What's on your mind?"
                    className="resize-none border-b-2 border-secondary text-xl focus-visible:ring-transparent"
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
              className="rounded-full bg-blue-500 font-bold text-secondary-foreground"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PostForm;
