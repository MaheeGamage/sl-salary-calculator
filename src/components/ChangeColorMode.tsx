'use client'
import { useColorMode, Button } from "@chakra-ui/react"

export function ChangeColorMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button onClick={() => {
            console.log('toggleColorMode')
            toggleColorMode()
        }}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
    )
}