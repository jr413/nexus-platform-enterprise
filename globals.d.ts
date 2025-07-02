// Global type definitions for CSS imports
declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: any;
  export default content;
}

declare module '*.sass' {
  const content: any;
  export default content;
}

// Allow CSS file imports without type checking
declare module './src/app/globals.css';
declare module './globals.css';
declare module '../globals.css';
declare module '../../globals.css';