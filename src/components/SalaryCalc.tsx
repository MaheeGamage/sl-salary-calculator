'use client'
import salaryService, { SalaryBreakdown } from "@/services/salary-service";
import { Card, CardContent, Container, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

import { useMemo, useState } from "react";

const SalaryCalc = () => {
    const [salary, setSalary] = useState(0)
    const salaryBreakdown = useMemo(() => salaryService.getSalaryBreakdown(salary), [salary])

    return (
        <>
            <div>
                <Card><CardContent>
                    {/* <SimpleGrid columns={1} spacing={10}> */}
                    <Container>
                        {/* <Center flexDirection="column"> */}
                        <Typography fontSize='xl' mb={3}>Enter your Salary:</Typography >
                        {/* <NumberInput
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
                                </NumberInput> */}
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        {/* </Center> */}
                    </Container>
                    <Container>
                        {/* <Center flexDirection="column"> */}
                        <Typography fontSize='2xl'>Take home salary:</Typography>
                        <Typography fontSize='2xl'>{Math.round(salaryBreakdown.takeHomeSalary).toFixed(2)}</Typography>
                        {/* </Center> */}
                    </Container>
                    <Container>
                        {/* <Center flexDirection="column"> */}
                        <Typography fontSize='2xl'>Total Deductable</Typography>
                        <Typography fontSize='2xl'>{Math.round(salaryBreakdown.totalDeduction).toFixed(2)}</Typography>
                        <br />
                        <Typography fontSize='xl'>Breakdown:</Typography>
                        <Typography fontSize='xl'>Tax: {Math.round(salaryBreakdown.tax).toFixed(2)}</Typography>
                        <Typography fontSize='xl'>EPF: {Math.round(salaryBreakdown.epf).toFixed(2)}</Typography>
                        {/* </Center> */}
                    </Container>
                    {/* </SimpleGrid> */}
                </CardContent></Card>
            </div>
        </>
    )
}

export default SalaryCalc;