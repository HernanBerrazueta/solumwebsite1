declare module "@splidejs/react-splide" {
  import * as React from "react";

  interface SplideProps {
    [key: string]: any;
  }

  interface SplideMethods {
    go(index: number | string): void;
  }

  export class Splide
    extends React.Component<SplideProps>
    implements SplideMethods
  {
    go(index: number | string): void;
  }

  interface SplideSlideProps {
    [key: string]: any;
  }

  export class SplideSlide extends React.Component<SplideSlideProps> {}
}
