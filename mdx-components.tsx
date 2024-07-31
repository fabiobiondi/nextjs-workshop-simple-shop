import Divider from '@/components/utilities/divider';
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="widget-title">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold mt-6">{children}</h2>,
    hr: () => <Divider />,
    li: ({ children }) => <li>• {children}</li>,
    img2: (props) => <>• {JSON.stringify(props)}</>,
    img: (props) => <Image src={props.src || ''} alt={props.alt || ''} width={300} height={300} /> ,
    ...components,
  }
}
