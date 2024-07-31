import Divider from '@/components/utilities/divider';
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="widget-title">{children}</h1>,
    hr: () => <Divider />,
    ...components,
  }
}
