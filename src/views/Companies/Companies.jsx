import { Box, Container } from '@mui/material';
import { CompanyListResults } from '../components/customer/company-list-results';
import { CompanyListToolbar } from '../components/customer/company-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { companies } from '../__mocks__/companies';

// import axios from "axios";

// const url =  "https://demo1779595.mockable.io/companies";

// axios.get(url)
//     .then(function (response) {
//         console.log(response);
//     })

const Companies = () => (
    <>
        
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth={false}>
                <CompanyListToolbar />
                <Box sx={{ mt: 3 }}>
                    <CompanyListResults companies={companies} />
                </Box>
            </Container>
        </Box>
    </>
);
Companies.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Companies;
