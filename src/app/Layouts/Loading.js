import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

export default function Loading({message= 'Loading...'}) {
  return (
    // Backdrop disable application while loading
    <Backdrop open={true} invisible={true}>
        <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
            <CircularProgress size={100} color='primary'/>
            <Typography variant="h4" sx={{justifyContent: 'center', position: 'fixed', top: '60%'}}>{message}</Typography>
        </Box>
    </Backdrop>
  )
}