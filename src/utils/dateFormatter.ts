export const { format: humanDateFmt } = Intl.DateTimeFormat(
  navigator.language,
  {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  },
);

export const { format: hourFmt } = Intl.DateTimeFormat(navigator.language, {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
