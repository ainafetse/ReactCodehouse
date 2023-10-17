import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { useState } from "react"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = ()=>{
    setShowPassword(!showPassword)
  }

  return (
    <Box component={"section"} sx={{padding:{xs:"20px", md:"50px"}}}>
      <Grid container sx={{display: "flex", justifyContent:"center"}} spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField label="email" fullWidth/>
        </Grid>
        <Grid item xs={12} md={6}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff color="primary"/> : <Visibility color="primary"/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant={"contained"}>Enter</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login