'use client'
import salaryService, { SalaryBreakdown } from "@/services/salary-service";
import { Card, Container } from "@mui/material";

import { useMemo, useState } from "react";

const SalaryCalc = () => {
    const [salary, setSalary] = useState(0)
    const salaryBreakdown = useMemo(() => salaryService.getSalaryBreakdown(salary), [salary])

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
                                <Text fontSize='2xl'>{Math.round(salaryBreakdown.takeHomeSalary).toFixed(2)}</Text>
                            </Center>
                        </Container>
                        <Container>
                            <Center flexDirection="column">
                                <Text fontSize='2xl'>Total Deductable</Text>
                                <Text fontSize='2xl'>{Math.round(salaryBreakdown.totalDeduction).toFixed(2)}</Text>
                                <br />
                                <Text fontSize='xl'>Breakdown:</Text>
                                <Text fontSize='xl'>Tax: {Math.round(salaryBreakdown.tax).toFixed(2)}</Text>
                                <Text fontSize='xl'>EPF: {Math.round(salaryBreakdown.epf).toFixed(2)}</Text>
                            </Center>
                        </Container>
                    </SimpleGrid>
                </CardBody></Card>
            </div>
        </>
    )
}

export default SalaryCalc;