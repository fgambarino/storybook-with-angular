export const wrap = templateFn => storyFn => {
  const story = storyFn();
  return {
    ...story,
    template: templateFn(story.template)
  };
};
