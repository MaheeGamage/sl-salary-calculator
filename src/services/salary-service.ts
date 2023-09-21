export type SalaryBreakdown = {
    totalSalary: number;
    epf: number;
    tax: number;
    totalDeduction: number;
    takeHomeSalary: number;
}

/**
 * This will output breakdown of sl salary
 * @param salary 
 */
const getSalaryBreakdown = (salary: number): SalaryBreakdown => {
    if (!salary) ({
        totalSalary: 0,
        tax: 0,
        epf: 0,
        totalDeduction: 0,
        takeHomeSalary: 0,
    })

    const epf = salary * 0.08;

    let tax = 0;
    let totalDeduction = epf + tax;
    let takeHomeSalary = salary - totalDeduction;

    if (salary <= 100000) {
        tax = 0;
    }
    else if (salary < 100000 && salary <= 141667) {
        tax = (salary - 100000) * 0.06;
    }
    else if (salary > 141667 && salary <= 183333) {
        tax = 2500 + (salary - 141667) * 0.12;
    }
    else if (salary > 183333 && salary <= 225000) {
        tax = 7500 + (salary - 183333) * 0.18;
    }
    else if (salary > 225000 && salary <= 266667) {
        tax = 15000 + (salary - 225000) * 0.24;
    }
    else if (salary > 266667 && salary <= 308333) {
        tax = 25000 + (salary - 266667) * 0.30;
    }
    else if (salary > 308333) {
        tax = 37500 + (salary - 308333) * 0.36;
    }

    totalDeduction = epf + tax;
    takeHomeSalary = salary - totalDeduction;

    return {
        totalSalary: salary,
        tax: tax,
        epf: epf,
        totalDeduction: totalDeduction,
        takeHomeSalary: takeHomeSalary,
    }
}

export default { getSalaryBreakdown }