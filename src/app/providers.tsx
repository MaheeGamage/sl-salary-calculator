'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '@/style/theme'

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}