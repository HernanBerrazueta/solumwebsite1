declare module "@splidejs/react-splide" {
  import * as React from "react";

  interface SplideProps {
    // Define the props according to the documentation or leave it as any
    [key: string]: any;
  }

  interface SplideMethods {
    go(index: number | string): void;
    // Add other methods you might use
  }

  export class Splide
    extends React.Component<SplideProps>
    implements SplideMethods
  {
    go(index: number | string): void;
    // Implement other methods
  }

  interface SplideSlideProps {
    // Define the props according to the documentation or leave it as any
    [key: string]: any;
  }

  export class SplideSlide extends React.Component<SplideSlideProps> {}
}
