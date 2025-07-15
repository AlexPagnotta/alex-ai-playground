import { type cx, defineConfig } from "cva";
import { extendTailwindMerge } from "tailwind-merge";

// Extend the default config based on the custom Tailwind config.
// Add all classNames that deviate from the standard naming convention.
// @see https://github.com/dcastil/tailwind-merge/blob/v1.14.0/src/lib/default-config.ts#L122
const twMerge = extendTailwindMerge({
  extend: {
    theme: {},
  },
});

const Cva = defineConfig({
  hooks: {
    onComplete: twMerge,
  },
});

export type { VariantProps } from "cva";
export type ClassValues = Parameters<typeof cx>;

/**
 * Create class name variants and resolve Tailwind rule conflicts.
 * @see https://github.com/joe-bell/cva
 * @see https://github.com/dcastil/tailwind-merge
 */
export const cva = Cva.cva;

/**
 * Conditionally join class names and resolve Tailwind rule conflicts.
 * @see https://github.com/lukeed/clsx
 * @see https://github.com/dcastil/tailwind-merge
 */
export const cn = Cva.cx;

/**
 * Shallow merge any number of `cva` components into a single component.
 * @see https://github.com/joe-bell/cva
 */
export const compose = Cva.compose;
