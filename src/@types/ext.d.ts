declare module '*.less' {
  const content: {
    css: string;
    id: number;
  };
  export default content;
}

declare module '*.css' {
  const content: {
    css: string;
    id: number;
  };
  export default content;
}
