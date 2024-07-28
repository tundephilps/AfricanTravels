// components/builder.tsx
"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { BuilderContent, builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import { Builder } from "@builder.io/react";

import discover from "../assets/aa-journey-image.png";
import Star from "../assets/Star.png";
import Beach from "../assets/Video.png";
import HeroImage from "../assets/Hero.png";

import City2 from "../assets/City2.png";

import City1 from "../assets/City1.png";
import Test1 from "../assets/Test1.png";
import Test2 from "../assets/Test2.png";
import Test3 from "../assets/Test3.png";
import Test4 from "../assets/Test4.png";
import Woman from "../assets/Woman.png";

import Create from "./Create";
import Discover from "./Discover";
import Experience from "./Experience";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Review from "./Review";
import Featured from "./Featured";
import Hero from "./Hero";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// Replace with your Public API Key
builder.init("2d1a159404034860a1c63441b96da5e6");

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "A Journey Curated by and for Black People",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Est minima odit et cupiditate laborum qui sint dolor! Et aspernatur architecto ut libero vitae qui saepe possimus eum itaque voluptates ea.",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "FIND YOUR ROOTS",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
      defaultValue: HeroImage,
    },
  ],
});

Builder.registerComponent(Create, {
  name: "Create",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Create An Unforgettable Reconnection",
    },
    {
      name: "description",
      type: "text",
      defaultValue:
        "Lorem ipsum dolor sit amet. Et deleniti deserunt ut dolores fugit ut ducimus neque...",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "gif"],
      required: true,
      defaultValue: Beach,
    },
    {
      name: "icon",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "gif"],
      required: true,
      defaultValue: Star,
    },
  ],
});

Builder.registerComponent(Discover, {
  name: "Discover",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Discover the Empowering Journey of African Ancestry",
    },
    {
      name: "description",
      type: "text",
      defaultValue: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "READ MORE",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "gif"],
      required: true,
      defaultValue: discover,
    },
  ],
});

Builder.registerComponent(Experience, {
  name: "Experience",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "The African Ancestry Experience is a Powerful",
    },
    {
      name: "cities",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "gif"],
          required: true,
        },
        {
          name: "description",
          type: "string",
          defaultValue: "Ut laudantium omnis aut molestias galisum et adipisci",
        },
        { name: "ctaText", type: "string", defaultValue: "JOIN US" },
      ],
      defaultValue: [
        {
          image: City2,
          description: "Ut laudantium omnis aut molestias galisum et adipisci",
          ctaText: "JOIN US IN CAMEROON",
        },
        {
          image: City2,
          description: "Ut laudantium omnis aut molestias galisum et adipisci",
          ctaText: "JOIN US IN LOME",
        },
        {
          image: City2,
          description: "Ut laudantium omnis aut molestias galisum et adipisci",
          ctaText: "JOIN US IN GHANA",
        },
      ],
    },
  ],
});

Builder.registerComponent(Review, {
  name: "Review",
  inputs: [
    {
      name: "quote",
      type: "string",
      defaultValue:
        "Lorem ipsum dolor sit amet. Hic commodi magnam aut minima esse At harum voluptatem et deleniti sint sit quisquam laudantium qui reiciendis galisum. Et pariatur nihil aut",
    },
    {
      name: "author",
      type: "string",
      defaultValue: "Alexander B., African Ancestry Family Member",
    },
    {
      name: "locationTitle",
      type: "string",
      defaultValue: "MAETERNAL ANCESTRY",
    },
    {
      name: "locationName",
      type: "string",
      defaultValue: "Bubi People of Bioko Island",
    },
  ],
});

Builder.registerComponent(FAQ, {
  name: "FAQ",
  inputs: [
    {
      name: "items",
      type: "list",
      subFields: [
        { name: "question", type: "string", defaultValue: "Sample question" },
        { name: "answer", type: "text", defaultValue: "Sample answer" },
      ],
      defaultValue: [
        {
          question: "What can I expect from an African Ancestry Test?",
          answer: "Sample answer",
        },
        { question: "How do the test kits work?", answer: "Sample answer" },
      ],
    },
  ],
});

Builder.registerComponent(Testimonial, {
  name: "Testimonial",
  inputs: [
    {
      name: "testimonialTitle",
      type: "string",
      defaultValue: "Video Testimonials",
      required: true,
      friendlyName: "Testimonial Title",
    },
    {
      name: "videos",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "png", "webp"],
          friendlyName: "Video Image",
        },
        { name: "alt", type: "string", friendlyName: "Alt Text" },
      ],
      defaultValue: [
        { image: Test1, alt: "Video 1" },
        { image: Test2, alt: "Video 2" },

        { image: Test3, alt: "Video 1" },
        { image: Test4, alt: "Video 2" },
        // Add more default values as needed
      ],
      required: true,
      friendlyName: "Video Thumbnails",
    },
    {
      name: "quote",
      type: "string",
      defaultValue:
        "“I can’t wait to go to Bioko Island… to have the sun in that part of the region on my body and know that I’m home.”",
      required: true,
      friendlyName: "Quote",
    },
    {
      name: "quoteAuthor",
      type: "string",
      defaultValue: "Ramunda Y., African Ancestry Family Member",
      required: true,
      friendlyName: "Quote Author",
    },
    {
      name: "locationTitle",
      type: "string",
      defaultValue: "MATERNAL ANCESTRY",
      required: true,
      friendlyName: "Location Title",
    },
    {
      name: "locationName",
      type: "string",
      defaultValue: "Bubi People of Bioko Island",
      required: true,
      friendlyName: "Location Name",
    },
    {
      name: "testimonialImage",
      type: "file",
      allowedFileTypes: ["jpeg", "png", "webp"],
      friendlyName: "Testimonial Image",
      defaultValue: "/path/to/testimonialImage.png",
    },
    {
      name: "testimonialImageAlt",
      type: "string",
      friendlyName: "Testimonial Image Alt Text",
      defaultValue: "Testimonial image",
    },
  ],
});

// Builder.registerComponent(Testimonial, {
//   name: "Testimonial",
//   inputs: [
//     {
//       name: "testimonialTitle",
//       type: "string",
//       defaultValue: "Video Testimonials",
//     },
//     {
//       name: "videos",
//       type: "list",
//       subFields: [
//         {
//           name: "image",
//           type: "file",
//           allowedFileTypes: ["jpeg", "jpg", "png"],
//           required: true,
//         },
//         { name: "alt", type: "string", required: true },
//       ],
//       defaultValue: [
//         { image: Test1, alt: "Testimonial image 1" },
//         { image: Test2, alt: "Testimonial image 2" },
//         { image: Test3, alt: "Testimonial image 3" },
//         { image: Test4, alt: "Testimonial image 4" },
//       ],
//     },
//     {
//       name: "quote",
//       type: "string",
//       defaultValue:
//         "“I can’t wait to go to Bioko Island… to have the sun in that part of the region on my body and know that I’m home.”",
//     },
//     {
//       name: "quoteAuthor",
//       type: "string",
//       defaultValue: "Ramunda Y., African Ancestry Family Member",
//     },
//     {
//       name: "locationTitle",
//       type: "string",
//       defaultValue: "MATERNAL ANCESTRY",
//     },
//     {
//       name: "locationName",
//       type: "string",
//       defaultValue: "Bubi People of Bioko Island",
//     },
//   ],
// });

Builder.registerComponent(Featured, {
  name: "Featured",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Tabs Products",
    },
    {
      name: "tabs",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
          defaultValue: "Tab Label",
        },
        {
          name: "products",
          type: "list",
          subFields: [
            { name: "title", type: "string", defaultValue: "Product Title" },
            {
              name: "description",
              type: "string",
              defaultValue: "Product Description",
            },
            { name: "note", type: "string", defaultValue: "Product Note" },
            {
              name: "image",
              type: "file",
              allowedFileTypes: ["jpeg", "png"],
              defaultValue: City1,
            },
            { name: "price", type: "string", defaultValue: "$0.00" },
            { name: "reviews", type: "number", defaultValue: 0 },
            { name: "stars", type: "number", defaultValue: 5 },
            {
              name: "verified",
              type: "boolean",
              defaultValue: true,
            },
          ],
        },
      ],
    },
  ],
});

export function RenderBuilderContent(props: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If `content` has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (props.content || isPreviewing) {
    return <BuilderComponent {...props} />;
  }
  // If the `content` is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}
