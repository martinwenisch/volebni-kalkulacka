"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Button } from "@repo/ui/components";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  canHaveChildren: true,
  inputs: [
    {
      name: "variant",
      type: "string",
      defaultValue: "default",
      enum: ["default", "destructive", "secondary", "outline", "ghost", "link"],
    },
    {
      name: "size",
      type: "string",
      defaultValue: "default",
      enum: ["default", "sm", "lg", "icon"],
    },
  ],
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: {
        name: "Text",
        options: {
          text: "Click me!",
        },
      },
    },
  ],
});
