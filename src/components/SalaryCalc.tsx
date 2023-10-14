'use client'

import salaryService from "@/services/salary-service";
import { Card, CardContent,  Container, FormControl,  InputAdornment, InputLabel, OutlinedInput,  Typography } from "@mui/material";
import { useMemo, useState } from "react";

const SalaryCalc = () => {
    const [salary, setSalary] = useState(0)
    const salaryBreakdown = useMemo(() => salaryService.getSalaryBreakdown(salary), [salary])

    return (
        <>
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="h4" textAlign={"center"} sx={{mb:6}}>Salary Calculator</Typography>
                        <Container sx={{mb:4, mt:4}}>
                            <FormControl>
                                <InputLabel htmlFor="outlined-adornment-amount">Enter your Salary</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    type="number"
                                    startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
                                    label="Enter your Salary"
                                    value={salary}
                                    onChange={(event) => setSalary(Number(event.target.value))}
                                />
                            </FormControl>
                        </Container>
                        <Container sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', mb:2}}>
                            <Typography variant="h5">Take Home Salary:</Typography>
                            {/* <Typography variant="h5">{Math.round(salaryBreakdown.takeHomeSalary).toFixed(2)}</Typography> */}
                            <Typography variant="h5">{salaryBreakdown.takeHomeSalary.toLocaleString('en')}</Typography>
                        </Container>
                        <Container sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <Typography variant="h5">Total Deductable</Typography>
                            <Typography variant="h5">{salaryBreakdown.totalDeduction.toLocaleString('en')}</Typography>
                            <br />
                            <Typography variant="h6" fontWeight={'bold'}>Breakdown:</Typography>
                            <Typography variant="h6">Tax: {salaryBreakdown.tax.toLocaleString('en')}</Typography>
                            <Typography variant="h6">EPF: {salaryBreakdown.epf.toLocaleString('en')}</Typography>

                        </Container>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default SalaryCalc;