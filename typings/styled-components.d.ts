import * as React from "react";
import { StatelessComponent, ComponentClass, PureComponent } from "react";

type Component<P> = ComponentClass<P> | StatelessComponent<P>;

export interface ThemeProps<T> {
  theme: T;
}

export type ThemedStyledProps<P, T> = P & ThemeProps<T>;
export type StyledProps<P> = ThemedStyledProps<P, any>;

export type ThemedOuterStyledProps<P, T> = P & {
  theme?: T;
  innerRef?: (instance: any) => void;
};
export type OuterStyledProps<P> = ThemedOuterStyledProps<P, any>;

export type Interpolation<P> = FlattenInterpolation<P> | ReadonlyArray<FlattenInterpolation<P> | ReadonlyArray<FlattenInterpolation<P>>>;
export type FlattenInterpolation<P> = InterpolationValue | InterpolationFunction<P>;
export type InterpolationValue = string | number;
export type SimpleInterpolation = InterpolationValue | ReadonlyArray<InterpolationValue | ReadonlyArray<InterpolationValue>>;
export interface InterpolationFunction<P> {
  (props: P): Interpolation<P>;
}

export interface ThemedStyledFunction<P, T> {
  (strings: TemplateStringsArray, ...interpolations: Interpolation<ThemedStyledProps<P, T>>[]): ComponentClass<ThemedOuterStyledProps<P, T>>;
  <U>(strings: TemplateStringsArray, ...interpolations: Interpolation<ThemedStyledProps<P & U, T>>[]): ComponentClass<ThemedOuterStyledProps<P & U, T>>;
}
export type StyledFunction<P> = ThemedStyledFunction<P, any>;

export type ThemedHtmlStyledFunction<E, T, P> = ThemedStyledFunction<React.HTMLProps<E> & P, T>;
export type HtmlStyledFunction<E> = ThemedHtmlStyledFunction<E, any, any>;

export type ThemedSvgStyledFunction<E extends SVGElement, T, P> = ThemedStyledFunction<React.SVGAttributes<E> & P, T>;
export type SvgStyledFunction<E extends SVGElement, P> = ThemedSvgStyledFunction<E, any, P>;

export interface ThemedBaseStyledInterface<T> {
  <P>(component: Component<P>): ThemedStyledFunction<P, T>;
}
export type BaseStyledInterface<P> = ThemedBaseStyledInterface<any & P>;

export type StyledInterface = ThemedStyledInterface<any, {}>;
export interface ThemedStyledInterface<T, P> extends ThemedBaseStyledInterface<T> {
  a: ThemedHtmlStyledFunction<HTMLAnchorElement, T, P>;
  abbr: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  address: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  area: ThemedHtmlStyledFunction<HTMLAreaElement, T, P>;
  article: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  aside: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  audio: ThemedHtmlStyledFunction<HTMLAudioElement, T, P>;
  b: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  base: ThemedHtmlStyledFunction<HTMLBaseElement, T, P>;
  bdi: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  bdo: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  big: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  blockquote: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  body: ThemedHtmlStyledFunction<HTMLBodyElement, T, P>;
  br: ThemedHtmlStyledFunction<HTMLBRElement, T, P>;
  button: ThemedHtmlStyledFunction<HTMLButtonElement, T, P>;
  canvas: ThemedHtmlStyledFunction<HTMLCanvasElement, T, P>;
  caption: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  cite: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  code: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  col: ThemedHtmlStyledFunction<HTMLTableColElement, T, P>;
  colgroup: ThemedHtmlStyledFunction<HTMLTableColElement, T, P>;
  data: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  datalist: ThemedHtmlStyledFunction<HTMLDataListElement, T, P>;
  dd: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  del: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  details: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  dfn: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  dialog: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  div: ThemedHtmlStyledFunction<HTMLDivElement, T, P>;
  dl: ThemedHtmlStyledFunction<HTMLDListElement, T, P>;
  dt: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  em: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  embed: ThemedHtmlStyledFunction<HTMLEmbedElement, T, P>;
  fieldset: ThemedHtmlStyledFunction<HTMLFieldSetElement, T, P>;
  figcaption: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  figure: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  footer: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  form: ThemedHtmlStyledFunction<HTMLFormElement, T, P>;
  h1: ThemedHtmlStyledFunction<HTMLHeadingElement, T, P>;
  h2: ThemedHtmlStyledFunction<HTMLHeadingElement, T, P>;
  h3: ThemedHtmlStyledFunction<HTMLHeadingElement, T, P>;
  h4: ThemedHtmlStyledFunction<HTMLHeadingElement, T, P>;
  h5: ThemedHtmlStyledFunction<HTMLHeadingElement, T, P>;
  h6: ThemedHtmlStyledFunction<HTMLHeadingElement, T, P>;
  head: ThemedHtmlStyledFunction<HTMLHeadElement, T, P>;
  header: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  hgroup: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  hr: ThemedHtmlStyledFunction<HTMLHRElement, T, P>;
  html: ThemedHtmlStyledFunction<HTMLHtmlElement, T, P>;
  i: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  iframe: ThemedHtmlStyledFunction<HTMLIFrameElement, T, P>;
  img: ThemedHtmlStyledFunction<HTMLImageElement, T, P>;
  input: ThemedHtmlStyledFunction<HTMLInputElement, T, P>;
  ins: ThemedHtmlStyledFunction<HTMLModElement, T, P>;
  kbd: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  keygen: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  label: ThemedHtmlStyledFunction<HTMLLabelElement, T, P>;
  legend: ThemedHtmlStyledFunction<HTMLLegendElement, T, P>;
  li: ThemedHtmlStyledFunction<HTMLLIElement, T, P>;
  link: ThemedHtmlStyledFunction<HTMLLinkElement, T, P>;
  main: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  map: ThemedHtmlStyledFunction<HTMLMapElement, T, P>;
  mark: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  menu: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  menuitem: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  meta: ThemedHtmlStyledFunction<HTMLMetaElement, T, P>;
  meter: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  nav: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  noscript: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  object: ThemedHtmlStyledFunction<HTMLObjectElement, T, P>;
  ol: ThemedHtmlStyledFunction<HTMLOListElement, T, P>;
  optgroup: ThemedHtmlStyledFunction<HTMLOptGroupElement, T, P>;
  option: ThemedHtmlStyledFunction<HTMLOptionElement, T, P>;
  output: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  p: ThemedHtmlStyledFunction<HTMLParagraphElement, T, P>;
  param: ThemedHtmlStyledFunction<HTMLParamElement, T, P>;
  picture: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  pre: ThemedHtmlStyledFunction<HTMLPreElement, T, P>;
  progress: ThemedHtmlStyledFunction<HTMLProgressElement, T, P>;
  q: ThemedHtmlStyledFunction<HTMLQuoteElement, T, P>;
  rp: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  rt: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  ruby: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  s: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  samp: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  script: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  section: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  select: ThemedHtmlStyledFunction<HTMLSelectElement, T, P>;
  small: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  source: ThemedHtmlStyledFunction<HTMLSourceElement, T, P>;
  span: ThemedHtmlStyledFunction<HTMLSpanElement, T, P>;
  strong: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  style: ThemedHtmlStyledFunction<HTMLStyleElement, T, P>;
  sub: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  summary: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  sup: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  table: ThemedHtmlStyledFunction<HTMLTableElement, T, P>;
  tbody: ThemedHtmlStyledFunction<HTMLTableSectionElement, T, P>;
  td: ThemedHtmlStyledFunction<HTMLTableDataCellElement, T, P>;
  textarea: ThemedHtmlStyledFunction<HTMLTextAreaElement, T, P>;
  tfoot: ThemedHtmlStyledFunction<HTMLTableSectionElement, T, P>;
  th: ThemedHtmlStyledFunction<HTMLTableHeaderCellElement, T, P>;
  thead: ThemedHtmlStyledFunction<HTMLTableSectionElement, T, P>;
  time: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  title: ThemedHtmlStyledFunction<HTMLTitleElement, T, P>;
  tr: ThemedHtmlStyledFunction<HTMLTableRowElement, T, P>;
  track: ThemedHtmlStyledFunction<HTMLTrackElement, T, P>;
  u: ThemedHtmlStyledFunction<HTMLElement, T, P>;
  ul: ThemedHtmlStyledFunction<HTMLUListElement, T, P>;
  "var": ThemedHtmlStyledFunction<HTMLElement, T, P>;
  video: ThemedHtmlStyledFunction<HTMLVideoElement, T, P>;
  wbr: ThemedHtmlStyledFunction<HTMLElement, T, P>;

  // SVG
  circle: ThemedSvgStyledFunction<SVGCircleElement, T, P>;
  clipPath: ThemedSvgStyledFunction<SVGClipPathElement, T, P>;
  defs: ThemedSvgStyledFunction<SVGDefsElement, T, P>;
  ellipse: ThemedSvgStyledFunction<SVGEllipseElement, T, P>;
  g: ThemedSvgStyledFunction<SVGGElement, T, P>;
  image: ThemedSvgStyledFunction<SVGImageElement, T, P>;
  line: ThemedSvgStyledFunction<SVGLineElement, T, P>;
  linearGradient: ThemedSvgStyledFunction<SVGLinearGradientElement, T, P>;
  mask: ThemedSvgStyledFunction<SVGMaskElement, T, P>;
  path: ThemedSvgStyledFunction<SVGPathElement, T, P>;
  pattern: ThemedSvgStyledFunction<SVGPatternElement, T, P>;
  polygon: ThemedSvgStyledFunction<SVGPolygonElement, T, P>;
  polyline: ThemedSvgStyledFunction<SVGPolylineElement, T, P>;
  radialGradient: ThemedSvgStyledFunction<SVGRadialGradientElement, T, P>;
  rect: ThemedSvgStyledFunction<SVGRectElement, T, P>;
  stop: ThemedSvgStyledFunction<SVGStopElement, T, P>;
  svg: ThemedSvgStyledFunction<SVGSVGElement, T, P>;
  text: ThemedSvgStyledFunction<SVGTextElement, T, P>;
  tspan: ThemedSvgStyledFunction<SVGTSpanElement, T, P>;
}

export type ThemeProviderComponent<T> = ComponentClass<ThemeProps<T>>;

export interface ThemedCssFunction<T> {
  (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]): InterpolationValue[];
  <P>(strings: TemplateStringsArray, ...interpolations: Interpolation<ThemedStyledProps<P, T>>[]): FlattenInterpolation<ThemedStyledProps<P, T>>[];
}

export interface ThemedStyledComponentsModule<T> {
  default: ThemedStyledInterface<T, {}>;

  css: ThemedCssFunction<T>;
  keyframes(strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]): string;
  injectGlobal(strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]): void;
  withTheme<P extends { theme?: T; }, T>(component: Component<P>): ComponentClass<P>;

  ThemeProvider: ThemeProviderComponent<T>;
}

declare const styled: StyledInterface;

export const css: ThemedCssFunction<any>;
export function withTheme<P extends { theme?: T; }, T>(component: Component<P>): ComponentClass<P>;

export function keyframes(strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]): string;
export function injectGlobal(strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]): void;

export const ThemeProvider: ThemeProviderComponent<any>;

export default styled;
