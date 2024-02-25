'use client'

import salaryService from "@/services/salary-service";
import { Card, CardContent, Container, FormControl, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { useMemo, useState } from "react";

const SalaryCalc = () => {
    const [salary, setSalary] = useState(0)
    const salaryBreakdown = useMemo(() => salaryService.getSalaryBreakdown(salary), [salary])

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h4" textAlign={"center"}>Salary Calculator</Typography>
                    <Typography variant="h6" textAlign={"center"} sx={{ mb: 4 }}>(Sri Lanka)</Typography>
                    <Container sx={{ mb: 4, mt: 4, display: "flex", justifyContent: "center" }} >
                        <FormControl>
                            <InputLabel htmlFor="outlined-adornment-amount" sx={{ fontSize: '1.25rem' }}>Enter your Salary</InputLabel>
                            <OutlinedInput
                                sx={{ fontSize: '1.5rem' }}
                                id="outlined-adornment-amount"
                                type="number"
                                startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
                                label="Enter your Salary"
                                value={salary}
                                onChange={(event) => setSalary(Number(event.target.value))}
                            />
                        </FormControl>
                    </Container>
                    <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 2 }}>
                        <Typography variant="h6">Take Home Salary:</Typography>
                        <Typography variant="h6">{salaryBreakdown.takeHomeSalary.toLocaleString('en')}</Typography>
                    </Container>
                    <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant="h6">Total Deductable:</Typography>
                        <Typography variant="h6">{salaryBreakdown.totalDeduction.toLocaleString('en')}</Typography>
                        <br />
                        <Typography variant="h6" fontWeight={'bold'}>Breakdown:</Typography>
                        <Typography>Tax: {salaryBreakdown.tax.toLocaleString('en')}</Typography>
                        <Typography>EPF: {salaryBreakdown.epf.toLocaleString('en')}</Typography>

                    </Container>
                </CardContent>
            </Card>
        </>
    )
}

export default SalaryCalc;