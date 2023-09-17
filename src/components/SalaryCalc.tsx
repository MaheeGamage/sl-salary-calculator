'use client'
import { Container, Text, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Box, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

const SalaryCalc = () => {
    const [salary, setSalary] = useState(0)

    return (
        <>
            <div>
                <SimpleGrid columns={1} spacing={10}>
                    <Container>
                        <NumberInput
                            size='lg'
                            onChange={(valueString) => setSalary(Number(valueString))}
                            value={salary}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Container>
                    <Container>
                        <Text fontSize='2xl'>Take home salary: {Math.round(salary * 0.7).toFixed(2)}</Text>
                    </Container>
                </SimpleGrid>

            </div>
        </>
    )
}

export default SalaryCalc;