const movieSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    title: { type: "string" },
    category: { type: "string" },
    likes: { type: "number" },
    dislikes: { type: "number" },
  },
  required: ["id", "title", "category", "likes", "dislikes"],
  additionalProperties: false,
};

export const moviesSchema = {
  type: "array",
  items: movieSchema,
};
