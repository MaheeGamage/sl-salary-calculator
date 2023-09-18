'use client'
import { Container, Text, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Box, SimpleGrid, Center, Card, CardBody } from "@chakra-ui/react";
import { useState } from "react";

const SalaryCalc = () => {
    const [salary, setSalary] = useState(0)

    return (
        <>
            <div>
                <Card variant={"outline"}><CardBody>
                    <SimpleGrid columns={1} spacing={10}>
                        <Container>
                            <Center flexDirection="column">
                                <Text fontSize='xl' mb={3}>Enter your Salary:</Text>
                                <NumberInput
                                maxW={48}
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
                            </Center>
                        </Container>
                        <Container>
                            <Center flexDirection="column">
                                <Text fontSize='2xl'>Take home salary:</Text>
                                <Text fontSize='2xl'>{Math.round(salary * 0.7).toFixed(2)}</Text>
                            </Center>
                        </Container>
                        <Container>
                            <Center flexDirection="column">
                                <Text fontSize='2xl'>Total Deductable</Text>
                                <Text fontSize='2xl'>{Math.round(salary * 0.3).toFixed(2)}</Text>
                                <br />
                                <Text fontSize='xl'>Breakdown:</Text>
                                <Text fontSize='xl'>Tax: {Math.round(salary * 0.22).toFixed(2)}</Text>
                                <Text fontSize='xl'>EPF: {Math.round(salary * 0.08).toFixed(2)}</Text>
                            </Center>
                        </Container>
                    </SimpleGrid>
                </CardBody></Card>
            </div>
        </>
    )
}

export default SalaryCalc;