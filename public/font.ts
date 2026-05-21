type FontClass = {
  className: string;
};

// Keep the same interface the components already expect, but avoid
// build-time Google font fetches that can fail in restricted deploy envs.
export const gabarito: FontClass = {
  className: "font-gabarito",
};

export const cousine: FontClass = {
  className: "font-cousine",
};

export const manrope: FontClass = {
  className: "font-manrope",
};

export const hanken: FontClass = {
  className: "font-hanken",
};
